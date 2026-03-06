export interface Offer {
  id: string;
  model_name: string;
  fuel_type: string;
  price_monthly: number;
  duration_months: number;
  km_annual: number;
  deposit: number;
  delivery: string;
  services_included: string;
  badge_type: string;
  expires_at: string;
  is_active: boolean;
  created_at: string;
}
