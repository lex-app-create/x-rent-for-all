
-- Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles: users can read their own roles
CREATE POLICY "Users can read own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create offers table
CREATE TABLE public.offers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    model_name TEXT NOT NULL,
    fuel_type TEXT NOT NULL DEFAULT 'Benzina',
    price_monthly INTEGER NOT NULL,
    duration_months INTEGER NOT NULL DEFAULT 36,
    km_annual INTEGER NOT NULL DEFAULT 15000,
    deposit INTEGER NOT NULL DEFAULT 0,
    delivery TEXT NOT NULL DEFAULT 'Italia',
    services_included TEXT NOT NULL DEFAULT 'RCA, Kasko, Manutenzione, Assistenza stradale',
    badge_type TEXT NOT NULL DEFAULT 'AZIENDA',
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '3 days'),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;

-- Public can read active offers
CREATE POLICY "Anyone can read active offers"
ON public.offers FOR SELECT
USING (is_active = true);

-- Only admins can insert/update/delete offers
CREATE POLICY "Admins can insert offers"
ON public.offers FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update offers"
ON public.offers FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete offers"
ON public.offers FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
