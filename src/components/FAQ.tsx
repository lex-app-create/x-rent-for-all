import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ci sono costi nascosti?",
    a: "No. Ogni offerta indica chiaramente: canone mensile (+ IVA), durata, km annui, anticipo e servizi inclusi. Nessun costo aggiuntivo non dichiarato.",
  },
  {
    q: "Chi è il fornitore?",
    a: "Operiamo con partner selezionati tra le principali società di noleggio a lungo termine in Italia. Non riveliamo i nomi per tutelare le condizioni riservate che ci consentono di offrire il miglior prezzo.",
  },
  {
    q: "Quanto dura la promo?",
    a: "Ogni offerta ha una scadenza indicata sulla card. Le condizioni dipendono dalla disponibilità del partner: quando l'auto è assegnata, l'offerta termina.",
  },
  {
    q: "Posso scaricare costi e IVA?",
    a: "Sì. Il noleggio a lungo termine è deducibile e detraibile secondo la normativa fiscale vigente per professionisti e aziende con P.IVA. Consigliamo di consultare il proprio commercialista.",
  },
  {
    q: "Cosa succede se l'offerta scade?",
    a: "Ti proponiamo la migliore alternativa equivalente (stesso budget e parametri). Le offerte cambiano ogni giorno: il nostro obiettivo è trovare sempre il miglior prezzo.",
  },
  {
    q: 'Come funziona la garanzia "Best Price"?',
    a: "Se trovi un'offerta aziendale comparabile (stessa auto, servizi, durata, km e anticipo) a un prezzo inferiore entro 24 ore, te la eguagliamo oppure ti proponiamo un'alternativa migliore.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-16">
    <div className="container max-w-2xl">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">
        Domande frequenti
      </h2>
      <p className="mx-auto mb-10 text-center text-muted-foreground">
        Tutto quello che serve sapere prima di contattarci.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
