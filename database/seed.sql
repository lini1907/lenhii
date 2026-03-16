-- Alerts
insert into public.alerts (title, description, disaster_type, severity, location, created_by, created_at)
values
('Flood Warning: Saigon River rising','Water levels are rising rapidly. Avoid low-lying roads and monitor local updates.','flood','high','Ho Chi Minh City',(select id from profiles where role='admin' limit 1), now() - interval '10 days'),
('Storm Alert: Tropical depression','Strong winds expected. Secure loose objects and prepare for outages.','storm','medium','Da Nang',(select id from profiles where role='admin' limit 1), now() - interval '9 days'),
('Landslide Risk: Mountain roads','Heavy rainfall increases landslide risk. Avoid mountainous routes.','landslide','high','Quang Nam',(select id from profiles where role='admin' limit 1), now() - interval '8 days'),
('Heat Advisory','High temperature and humidity. Stay hydrated and limit outdoor activity.','heat','low','Can Tho',(select id from profiles where role='coordinator' limit 1), now() - interval '7 days'),
('Flash Flood Watch','Short bursts of extreme rainfall may cause flash floods.','flood','medium','Hue',(select id from profiles where role='coordinator' limit 1), now() - interval '6 days'),
('Coastal Storm Surge','Potential coastal flooding due to storm surge.','storm','high','Da Nang',(select id from profiles where role='admin' limit 1), now() - interval '5 days'),
('River Overflow Advisory','Rivers approaching overflow threshold in several districts.','flood','medium','Ho Chi Minh City',(select id from profiles where role='admin' limit 1), now() - interval '4 days'),
('Landslide Watch','Soil saturation high after consecutive rain days.','landslide','medium','Hue',(select id from profiles where role='coordinator' limit 1), now() - interval '3 days'),
('Severe Thunderstorm Warning','Lightning and gusts expected. Stay indoors if possible.','storm','high','Can Tho',(select id from profiles where role='coordinator' limit 1), now() - interval '2 days'),
('Flood Evacuation Notice','Evacuation recommended for flood-prone areas near canals.','flood','critical','Ho Chi Minh City',(select id from profiles where role='admin' limit 1), now() - interval '1 day');



-- SOS reports
insert into public.sos_reports (citizen_id, description, location, status, created_at)
values
((select id from profiles where role='citizen' limit 1),'Family trapped in flooded house. Need evacuation.','Ho Chi Minh City - District 8','pending', now() - interval '20 hours'),
((select id from profiles where role='citizen' limit 1),'Road blocked by fallen tree, elderly nearby.','Da Nang - Son Tra','assigned', now() - interval '18 hours'),
((select id from profiles where role='citizen' limit 1),'Injured person needs medical assistance.','Can Tho - Ninh Kieu','pending', now() - interval '16 hours'),
((select id from profiles where role='citizen' limit 1),'House sliding risk, need relocation advice.','Quang Nam - Hoi An outskirts','resolved', now() - interval '15 hours'),
((select id from profiles where role='citizen' limit 1),'Power outage and flooding, need supplies.','Hue - Phu Hoi','assigned', now() - interval '14 hours'),
((select id from profiles where role='citizen' limit 1),'Water entering home, child needs help.','Ho Chi Minh City - Thu Duc','pending', now() - interval '13 hours'),
((select id from profiles where role='citizen' limit 1),'Motorbike accident in heavy rain.','Da Nang - Hai Chau','resolved', now() - interval '12 hours'),
((select id from profiles where role='citizen' limit 1),'Need transport to shelter for 3 people.','Can Tho - Cai Rang','pending', now() - interval '11 hours'),
((select id from profiles where role='citizen' limit 1),'Bridge area flooded; stranded commuters.','Hue - Huong Thuy','assigned', now() - interval '10 hours'),
((select id from profiles where role='citizen' limit 1),'Minor landslide, road blocked.','Quang Nam - Dien Ban','pending', now() - interval '9 hours'),
((select id from profiles where role='citizen' limit 1),'Need urgent medicine delivery.','Ho Chi Minh City - District 7','pending', now() - interval '8 hours'),
((select id from profiles where role='citizen' limit 1),'Flood water rising, pets trapped.','Da Nang - Lien Chieu','pending', now() - interval '7 hours'),
((select id from profiles where role='citizen' limit 1),'Need rescue boat near canal.','Can Tho - Binh Thuy','assigned', now() - interval '6 hours'),
((select id from profiles where role='citizen' limit 1),'Shelter overcrowded, need guidance.','Hue - An Cuu','resolved', now() - interval '5 hours'),
((select id from profiles where role='citizen' limit 1),'Flooded street; wheelchair user needs help.','Ho Chi Minh City - Go Vap','assigned', now() - interval '4 hours');



-- Missions
insert into public.missions (sos_id, rescue_team_id, status, assigned_at, completed_at)
values
((select id from sos_reports limit 1 offset 1),(select id from profiles where role='rescue' limit 1),'in_progress', now() - interval '17 hours', null),
((select id from sos_reports limit 1 offset 4),(select id from profiles where role='rescue' limit 1),'assigned', now() - interval '13 hours', null),
((select id from sos_reports limit 1 offset 8),(select id from profiles where role='rescue' limit 1),'assigned', now() - interval '9 hours', null),
((select id from sos_reports limit 1 offset 12),(select id from profiles where role='rescue' limit 1),'in_progress', now() - interval '5 hours', null),
((select id from sos_reports limit 1 offset 3),(select id from profiles where role='rescue' limit 1),'completed', now() - interval '14 hours', now() - interval '13 hours'),
((select id from sos_reports limit 1 offset 6),(select id from profiles where role='rescue' limit 1),'completed', now() - interval '11 hours', now() - interval '10 hours'),
((select id from sos_reports limit 1 offset 13),(select id from profiles where role='rescue' limit 1),'completed', now() - interval '6 hours', now() - interval '5 hours'),
((select id from sos_reports limit 1 offset 14),(select id from profiles where role='rescue' limit 1),'in_progress', now() - interval '3 hours', null);