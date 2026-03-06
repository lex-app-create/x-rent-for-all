import OfferCard from "@/components/OfferCard";

interface OffersGridProps {
  offers: Array<{
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
  }>;
  isLoading: boolean;
}

const OffersGrid = ({ offers, isLoading }: OffersGridProps) => (
  <section id="offerte" className="py-16">
    <div className="container">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        Offerte del giorno
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
        Occasioni selezionate oggi per aziende e P.IVA. Prezzi + IVA, disponibilità limitata.
      </p>

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-80 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      ) : offers.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Nessuna offerta attiva al momento. Torna a trovarci!
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      )}
    </div>
  </section>
);

export default OffersGrid;
