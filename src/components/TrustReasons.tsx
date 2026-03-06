import { BadgeCheck, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Best Price verificato",
    desc: "Se trovi un'offerta aziendale comparabile (stessa auto/servizi/durata/km/anticipo) a meno entro 24 ore, te la eguagliamo oppure ti proponiamo un'alternativa migliore.",
  },
  {
    icon: Clock,
    title: "Risposta rapida",
    desc: "Risposta garantita entro 2 ore lavorative. Ti mandiamo 2-3 opzioni 'miglior prezzo del giorno' su WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Copertura nazionale",
    desc: "Consegna e gestione in tutta Italia. Operiamo con partner selezionati su tutto il territorio.",
  },
];

const TrustReasons = () => (
  <section className="py-16">
    <div className="container">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        Perché NoleggioXTutti
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
        Trasparenza, velocità e convenienza per la tua azienda.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <Card key={r.title} className="border-0 bg-card shadow-md transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-start gap-3 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TrustReasons;
