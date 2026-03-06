import { useState } from "react";
import { MessageCircle, ShieldCheck, Truck, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildWhatsAppUrl, buildHeroFormMessage } from "@/lib/whatsapp";

const Hero = () => {
  const [citta, setCitta] = useState("");
  const [budget, setBudget] = useState("");
  const [km, setKm] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(buildHeroFormMessage({ citta, budget, km, tipo }));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="container relative grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <MessageCircle className="h-3.5 w-3.5" />
            Preventivo WhatsApp entro 2 ore
          </span>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Noleggio lungo termine aziendale:{" "}
            <span className="text-primary">offerte lampo</span> finché disponibili.
          </h1>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground">
            Ogni giorno selezioniamo occasioni a tempo su auto e contratti.
            Preventivo su WhatsApp in 2 ore.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, label: "Trasparenza totale" },
              { icon: Truck, label: "Consegna in tutta Italia" },
              { icon: Receipt, label: "Soluzioni P.IVA" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardContent className="p-6">
            <h2 className="mb-1 text-lg font-bold text-foreground">
              Richiedi il tuo preventivo
            </h2>
            <p className="mb-5 text-sm text-muted-foreground">
              Compila e apri WhatsApp con la richiesta pronta
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Città / Provincia"
                value={citta}
                onChange={(e) => setCitta(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                maxLength={100}
              />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Budget mensile</option>
                <option value="€200–€350">€200–€350</option>
                <option value="€350–€500">€350–€500</option>
                <option value="€500–€700">€500–€700</option>
                <option value="€700+">€700+</option>
              </select>
              <select
                value={km}
                onChange={(e) => setKm(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Km annui</option>
                <option value="10.000 km">10.000 km</option>
                <option value="15.000 km">15.000 km</option>
                <option value="20.000 km">20.000 km</option>
                <option value="30.000 km">30.000 km</option>
              </select>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Tipo esigenza</option>
                <option value="City car">City car</option>
                <option value="Berlina / Wagon">Berlina / Wagon</option>
                <option value="SUV">SUV</option>
                <option value="Van / Commerciale">Van / Commerciale</option>
                <option value="Flotta 3+ veicoli">Flotta 3+ veicoli</option>
              </select>
              <Button type="submit" size="lg" className="gap-2 text-base">
                <MessageCircle className="h-5 w-5" />
                Apri WhatsApp con richiesta pronta
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
