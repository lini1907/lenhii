-- Disaster Response Coordination System
-- Row Level Security (RLS) policies for Supabase

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.alerts enable row level security;
alter table public.sos_reports enable row level security;
alter table public.missions enable row level security;

-- Helpers
create or replace function public.current_role()
returns text
language sql
stable
as $$
  select role from public.profiles where id = auth.uid()
$$;

-- =========
-- PROFILES
-- =========
-- Users can read/update their own profile.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (id = auth.uid());

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

-- ======
-- ALERTS
-- ======
-- Everyone (including anonymous) can view alerts.
drop policy if exists "alerts_select_public" on public.alerts;
create policy "alerts_select_public"
on public.alerts
for select
to anon, authenticated
using (true);

-- Coordinators can create alerts.
drop policy if exists "alerts_insert_coordinator" on public.alerts;
create policy "alerts_insert_coordinator"
on public.alerts
for insert
to authenticated
with check (
  public.current_role() = 'coordinator'
  and created_by = auth.uid()
);

-- Coordinators can update/delete alerts they created.
drop policy if exists "alerts_update_coordinator_own" on public.alerts;
create policy "alerts_update_coordinator_own"
on public.alerts
for update
to authenticated
using (public.current_role() = 'coordinator' and created_by = auth.uid())
with check (public.current_role() = 'coordinator' and created_by = auth.uid());

drop policy if exists "alerts_delete_coordinator_own" on public.alerts;
create policy "alerts_delete_coordinator_own"
on public.alerts
for delete
to authenticated
using (public.current_role() = 'coordinator' and created_by = auth.uid());

-- ==========
-- SOS REPORTS
-- ==========
-- Citizens can create SOS reports for themselves.
drop policy if exists "sos_insert_citizen" on public.sos_reports;
create policy "sos_insert_citizen"
on public.sos_reports
for insert
to authenticated
with check (
  public.current_role() = 'citizen'
  and citizen_id = auth.uid()
);

-- Citizens can view their own SOS reports.
-- Coordinators can view all SOS reports.
drop policy if exists "sos_select_citizen_or_coordinator" on public.sos_reports;
create policy "sos_select_citizen_or_coordinator"
on public.sos_reports
for select
to authenticated
using (
  (public.current_role() = 'citizen' and citizen_id = auth.uid())
  or (public.current_role() = 'coordinator')
);

-- Coordinators can update SOS status (e.g., assigned/resolved).
drop policy if exists "sos_update_coordinator" on public.sos_reports;
create policy "sos_update_coordinator"
on public.sos_reports
for update
to authenticated
using (public.current_role() = 'coordinator')
with check (public.current_role() = 'coordinator');

-- ========
-- MISSIONS
-- ========
-- Coordinators can create missions.
drop policy if exists "missions_insert_coordinator" on public.missions;
create policy "missions_insert_coordinator"
on public.missions
for insert
to authenticated
with check (public.current_role() = 'coordinator');

-- Coordinators can view all missions.
-- Rescue teams can view only missions assigned to them.
drop policy if exists "missions_select_rescue_or_coordinator" on public.missions;
create policy "missions_select_rescue_or_coordinator"
on public.missions
for select
to authenticated
using (
  (public.current_role() = 'coordinator')
  or (public.current_role() = 'rescue' and rescue_team_id = auth.uid())
);

-- Rescue teams can update status of missions assigned to them.
drop policy if exists "missions_update_rescue_assigned" on public.missions;
create policy "missions_update_rescue_assigned"
on public.missions
for update
to authenticated
using (public.current_role() = 'rescue' and rescue_team_id = auth.uid())
with check (public.current_role() = 'rescue' and rescue_team_id = auth.uid());

