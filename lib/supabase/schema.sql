-- =============================================
-- YOGA STUDIO DATABASE SCHEMA
-- Run this in your Supabase SQL Editor
-- =============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =============================================
-- PROFILES TABLE (extends Supabase auth.users)
-- =============================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text unique not null,
  full_name text,
  phone text,
  avatar_url text,
  role text default 'member' check (role in ('member', 'admin', 'instructor')),
  membership_type text default 'none' check (membership_type in ('none', 'drop-in', 'monthly', 'annual', 'founding')),
  membership_expires_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS for profiles
alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Admins can view all profiles" on public.profiles for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- =============================================
-- SERVICES TABLE
-- =============================================
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  description text,
  short_description text,
  category text check (category in ('yoga', 'pilates', 'sound-therapy', 'cacao-ceremony', 'hiking', 'workshop')),
  duration_minutes int,
  max_participants int,
  price_drop_in decimal(10,2),
  price_member decimal(10,2),
  image_url text,
  is_active boolean default true,
  created_at timestamptz default now()
);

alter table public.services enable row level security;
create policy "Anyone can view active services" on public.services for select using (is_active = true);
create policy "Admins can manage services" on public.services for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('admin', 'instructor'))
);

-- =============================================
-- EVENTS / CLASSES TABLE
-- =============================================
create table public.events (
  id uuid default uuid_generate_v4() primary key,
  service_id uuid references public.services(id) on delete set null,
  title text not null,
  description text,
  instructor_id uuid references public.profiles(id) on delete set null,
  start_time timestamptz not null,
  end_time timestamptz not null,
  location text default 'Studio',
  max_participants int default 20,
  current_participants int default 0,
  price_drop_in decimal(10,2),
  price_member decimal(10,2),
  is_online boolean default false,
  meeting_url text,
  image_url text,
  status text default 'scheduled' check (status in ('scheduled', 'cancelled', 'completed', 'full')),
  created_at timestamptz default now()
);

alter table public.events enable row level security;
create policy "Anyone can view scheduled events" on public.events for select using (status != 'cancelled');
create policy "Admins can manage events" on public.events for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('admin', 'instructor'))
);

-- =============================================
-- BOOKINGS TABLE
-- =============================================
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  event_id uuid references public.events(id) on delete cascade,
  status text default 'confirmed' check (status in ('confirmed', 'cancelled', 'waitlist', 'attended')),
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'refunded', 'complimentary')),
  amount_paid decimal(10,2) default 0,
  notes text,
  created_at timestamptz default now(),
  unique(user_id, event_id)
);

alter table public.bookings enable row level security;
create policy "Users can view own bookings" on public.bookings for select using (auth.uid() = user_id);
create policy "Users can create own bookings" on public.bookings for insert with check (auth.uid() = user_id);
create policy "Users can cancel own bookings" on public.bookings for update using (auth.uid() = user_id);
create policy "Admins can manage all bookings" on public.bookings for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- =============================================
-- MEMBERSHIPS TABLE
-- =============================================
create table public.memberships (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  description text,
  price_monthly decimal(10,2),
  price_annual decimal(10,2),
  features jsonb,
  classes_per_month int,
  is_unlimited boolean default false,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

alter table public.memberships enable row level security;
create policy "Anyone can view active memberships" on public.memberships for select using (is_active = true);
create policy "Admins can manage memberships" on public.memberships for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- =============================================
-- SOUND THERAPY SAMPLES TABLE
-- =============================================
create table public.sound_samples (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  file_url text not null,
  duration_seconds int,
  instrument text,
  is_preview boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

alter table public.sound_samples enable row level security;
create policy "Anyone can view preview samples" on public.sound_samples for select using (is_preview = true);
create policy "Members can view all samples" on public.sound_samples for select using (
  exists (select 1 from public.profiles where id = auth.uid() and membership_type != 'none')
);

-- =============================================
-- CONTACT / INQUIRIES TABLE
-- =============================================
create table public.inquiries (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  created_at timestamptz default now()
);

alter table public.inquiries enable row level security;
create policy "Anyone can create inquiries" on public.inquiries for insert with check (true);
create policy "Admins can manage inquiries" on public.inquiries for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- =============================================
-- TRIGGER: auto-create profile on signup
-- =============================================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- =============================================
-- TRIGGER: update participant count on booking
-- =============================================
create or replace function public.update_event_participants()
returns trigger as $$
begin
  if (TG_OP = 'INSERT' and NEW.status = 'confirmed') then
    update public.events set current_participants = current_participants + 1 where id = NEW.event_id;
  elsif (TG_OP = 'UPDATE' and OLD.status = 'confirmed' and NEW.status = 'cancelled') then
    update public.events set current_participants = current_participants - 1 where id = NEW.event_id;
  end if;
  return NEW;
end;
$$ language plpgsql security definer;

create trigger on_booking_changed
  after insert or update on public.bookings
  for each row execute procedure public.update_event_participants();

-- =============================================
-- SEED: default membership plans
-- =============================================
insert into public.memberships (name, slug, description, price_monthly, price_annual, is_unlimited, classes_per_month, features, sort_order)
values
  ('Drop-In', 'drop-in', 'Single class access', null, null, false, 1, '["Access to any single class", "Mat rental included", "No commitment"]', 1),
  ('Explorer', 'explorer', 'Perfect for those beginning their practice', 89, 890, false, 4, '["4 classes per month", "Mat rental included", "Access to online library", "10% retail discount"]', 2),
  ('Devotee', 'devotee', 'For the dedicated practitioner', 149, 1490, false, 12, '["12 classes per month", "Mat & props included", "Full online library access", "15% retail discount", "One free guest pass/month"]', 3),
  ('Unlimited', 'unlimited', 'Immerse yourself fully', 199, 1990, true, null, '["Unlimited classes", "All props included", "Full online library", "20% retail discount", "Two free guest passes/month", "Priority booking"]', 4),
  ('Founding Member', 'founding', 'Exclusive charter membership', 159, 1590, true, null, '["Unlimited classes", "All props included", "Full online library", "25% retail discount", "Four guest passes/month", "Priority booking", "Founding member events", "Name on studio wall"]', 5);

-- =============================================
-- SEED: default services
-- =============================================
insert into public.services (name, slug, description, short_description, category, duration_minutes, max_participants, price_drop_in, price_member)
values
  ('Hatha Yoga', 'hatha-yoga', 'A gentle introduction to the most basic yoga postures. Hatha classes are ideal for beginners and those seeking mindful, measured movement.', 'Gentle postures for all levels', 'yoga', 75, 20, 25, 18),
  ('Vinyasa Flow', 'vinyasa-flow', 'Dynamic sequences linking breath to movement. Build strength, flexibility, and focus through fluid transitions.', 'Dynamic breath-linked movement', 'yoga', 60, 18, 25, 18),
  ('Yin Yoga', 'yin-yoga', 'Long-held poses targeting deep connective tissue. Perfect for stress relief and deep relaxation.', 'Deep, meditative stretching', 'yoga', 75, 20, 25, 18),
  ('Pilates', 'pilates', 'Core-focused movement system developed by Joseph Pilates. Builds strength, stability, and body awareness through precise, controlled exercises.', 'Core strength & alignment', 'pilates', 55, 12, 30, 22),
  ('Sound Bath', 'sound-bath', 'Immersive healing experience using crystal singing bowls, gongs, and Tibetan instruments. Lie in savasana as resonant frequencies guide you into deep restoration.', 'Vibrational healing journey', 'sound-therapy', 75, 25, 35, 25),
  ('Cacao Ceremony', 'cacao-ceremony', 'Sacred ceremonial cacao ritual from Mesoamerican tradition. Heart-opening medicine combined with meditation, breath, and community sharing.', 'Heart-opening sacred ritual', 'cacao-ceremony', 120, 16, 45, 35),
  ('Sunrise Hike', 'sunrise-hike', 'Begin the day with intentional movement in nature. Our guided hikes combine mindful walking, breath awareness, and connection with the natural world.', 'Mindful movement in nature', 'hiking', 180, 12, 35, 25);
