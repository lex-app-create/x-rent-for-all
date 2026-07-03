import { Mail, Phone, MapPin, Clock } from "lucide-react";

const AboutUs = () => (
  <section id="chi-siamo" className="bg-muted/50 py-16">
    <div className="container max-w-3xl">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        Chi siamo
      </h2>
      <p className="mx-auto mb-8 text-center text-muted-foreground">
        Operiamo con partner selezionati tra le principali società di noleggio a
        lungo termine in Italia. Il nostro obiettivo è trovare il miglior prezzo
        per aziende e professionisti con P.IVA, in modo trasparente e senza
        intermediari nascosti.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Mail, label: "gzucchelli@luxurent.it" },
          { icon: Phone, label: "+39 340 821 8788" },
          { icon: MapPin, label: "Operativi in tutta Italia" },
          { icon: Clock, label: "Lun–Ven 9:00–18:00" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg border bg-card p-4"
          >
            <Icon className="h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-foreground">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        NoleggioXTutti.it è un marchio di luxurent.it — Luxurent Srl – P.I. 08763480962 – Sede: Via Emilia Km 312, Vizzolo Predabissi (MI)
      </p>
    </div>
  </section>
);

export default AboutUs;
