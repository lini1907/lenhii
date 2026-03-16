-- Disaster Response Coordination System
-- Schema for Supabase (PostgreSQL)

-- Extensions (available in Supabase)
create extension if not exists "pgcrypto";

-- =========
-- PROFILES
-- =========
-- Linked 1:1 with Supabase Auth user (auth.users.id)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  phone text,
  role text not null check (role in ('citizen', 'coordinator', 'rescue')),
  created_at timestamptz not null default now()
);

create index if not exists profiles_role_idx on public.profiles(role);

-- ======
-- ALERTS
-- ======
create table if not exists public.alerts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  disaster_type text not null,
  severity text not null,
  location text not null,
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now()
);

create index if not exists alerts_created_at_idx on public.alerts(created_at desc);
create index if not exists alerts_created_by_idx on public.alerts(created_by);

-- ==========
-- SOS REPORTS
-- ==========
create table if not exists public.sos_reports (
  id uuid primary key default gen_random_uuid(),
  citizen_id uuid not null references public.profiles(id) on delete restrict,
  description text not null,
  location text not null,
  status text not null check (status in ('pending', 'assigned', 'resolved')) default 'pending',
  created_at timestamptz not null default now()
);

create index if not exists sos_reports_created_at_idx on public.sos_reports(created_at desc);
create index if not exists sos_reports_citizen_id_idx on public.sos_reports(citizen_id);
create index if not exists sos_reports_status_idx on public.sos_reports(status);

-- ========
-- MISSIONS
-- ========
create table if not exists public.missions (
  id uuid primary key default gen_random_uuid(),
  sos_id uuid not null references public.sos_reports(id) on delete cascade,
  rescue_team_id uuid not null references public.profiles(id) on delete restrict,
  status text not null check (status in ('assigned', 'in_progress', 'completed')) default 'assigned',
  assigned_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists missions_rescue_team_id_idx on public.missions(rescue_team_id);
create index if not exists missions_sos_id_idx on public.missions(sos_id);
create index if not exists missions_status_idx on public.missions(status);

