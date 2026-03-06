import { Clock, Fuel, Route, Calendar, CreditCard, Truck, ShieldCheck, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, buildOfferMessage } from "@/lib/whatsapp";
import type { Offer } from "@/lib/types";

function getTimeLeft(expiresAt: string): string {
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return "Scaduta";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 24) {
    const d = Math.floor(h / 24);
    return `${d}g ${h % 24}h`;
  }
  return `${h}h ${m}m`;
}

function isExpiringSoon(expiresAt: string): boolean {
  const diff = new Date(expiresAt).getTime() - Date.now();
  return diff > 0 && diff < 24 * 3600000;
}

const OfferCard = ({ offer }: { offer: Offer }) => {
  const expiring = isExpiringSoon(offer.expires_at);
  const timeLeft = getTimeLeft(offer.expires_at);

  return (
    <Card className="flex flex-col overflow-hidden border shadow-md transition-shadow hover:shadow-lg">
      <CardContent className="flex flex-1 flex-col gap-4 p-5">
        {/* badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs font-semibold uppercase">
            {offer.badge_type}
          </Badge>
          <Badge
            className={`text-xs font-semibold ${
              expiring
                ? "border-accent bg-accent/10 text-accent"
                : "border-primary bg-primary/10 text-primary"
            }`}
            variant="outline"
          >
            <Clock className="mr-1 h-3 w-3" />
            {timeLeft}
          </Badge>
        </div>

        {/* title */}
        <div>
          <h3 className="text-lg font-bold text-foreground">{offer.model_name}</h3>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Fuel className="h-3.5 w-3.5" />
            {offer.fuel_type}
          </span>
        </div>

        {/* price */}
        <div className="rounded-lg bg-primary/5 p-3 text-center">
          <span className="text-3xl font-extrabold text-primary">€{offer.price_monthly}</span>
          <span className="text-sm text-muted-foreground">/mese + IVA</span>
        </div>

        {/* specs */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-secondary" />
            {offer.duration_months} mesi
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Route className="h-3.5 w-3.5 text-secondary" />
            {offer.km_annual.toLocaleString("it-IT")} km/anno
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <CreditCard className="h-3.5 w-3.5 text-secondary" />
            Anticipo: €{offer.deposit.toLocaleString("it-IT")}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Truck className="h-3.5 w-3.5 text-secondary" />
            {offer.delivery}
          </span>
        </div>

        {/* services */}
        <div className="flex items-start gap-1.5 rounded-md bg-muted p-3 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
          <span>{offer.services_included}</span>
        </div>

        {expiring && (
          <p className="text-center text-xs font-semibold text-accent">
            ⚠️ Disponibilità limitata — scade tra {timeLeft}
          </p>
        )}

        {/* CTA */}
        <Button asChild className="mt-auto gap-2">
          <a
            href={buildWhatsAppUrl(buildOfferMessage(offer.model_name, offer.price_monthly))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Blocca su WhatsApp
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
