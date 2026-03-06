import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Offer } from "@/lib/types";

export function useOffers() {
  return useQuery<Offer[]>({
    queryKey: ["offers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("offers")
        .select("*")
        .eq("is_active", true)
        .gte("expires_at", new Date().toISOString())
        .order("created_at", { ascending: false })
        .limit(6);
      if (error) throw error;
      return (data ?? []) as Offer[];
    },
    refetchInterval: 60000,
  });
}
