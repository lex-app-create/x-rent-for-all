import { MessageCircle, ListChecks, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "1",
    title: "Scrivi su WhatsApp",
    desc: "In 30 secondi ci dici budget, km annui e tipo di veicolo. Oppure compila il form qui sopra.",
  },
  {
    icon: ListChecks,
    num: "2",
    title: "Ricevi 2-3 opzioni",
    desc: "Entro 2 ore lavorative ti mandiamo le migliori alternative compatibili al miglior prezzo del giorno.",
  },
  {
    icon: FileCheck,
    num: "3",
    title: "Blocca e finalizza",
    desc: "Scegli l'offerta, firmi e organizziamo la consegna in tutta Italia.",
  },
];

const HowItWorks = () => (
  <section id="come-funziona" className="bg-muted/50 py-16">
    <div className="container">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        Come funziona
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
        Tre passi, zero burocrazia.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              {s.num}
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
