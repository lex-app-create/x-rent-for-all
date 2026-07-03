import { Mail, Phone, MapPin } from "lucide-react";

const Privacy = () => (
  <div className="min-h-screen bg-background pb-16">
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center">
        <a href="/" className="text-xl font-extrabold tracking-tight text-foreground">
          Noleggio<span className="text-primary">X</span>Tutti
          <span className="text-xs font-normal text-muted-foreground">.it</span>
        </a>
      </div>
    </header>

    <main className="container py-12">
      <h1 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Versione 1.0 — aggiornata al 03 dicembre 2024
      </p>

      <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Informativa ai sensi dell’art. 13 GDPR</h2>
          <p>
            Con il presente documento il Titolare del trattamento, come di seguito definito, desidera informarti sulle finalità e le modalità del trattamento dei tuoi dati personali e dei diritti che ti sono riconosciuti dal Regolamento (UE) 2016/679 relativo alla protezione delle persone fisiche, con riguardo al trattamento dei dati personali nonché alla loro libera circolazione (“GDPR”). La presente Informativa potrà essere integrata dal Titolare ove eventuali servizi aggiuntivi da te richiesti dovessero comportare ulteriori trattamenti.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Titolare del trattamento</h2>
          <div className="rounded-lg border bg-card p-4">
            <p className="font-semibold text-foreground">Luxurent Srl</p>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Via Emilia Km 312, Vizzolo Predabissi (MI)
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+393408218788" className="underline hover:text-foreground">+39 340 821 8788</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:amazzarotto@luxurent.it" className="underline hover:text-foreground">amazzarotto@luxurent.it</a>
              </li>
              <li className="mt-2 text-xs">
                P.IVA / C.F.: 08763480962
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Responsabile della protezione dei dati (DPO)</h2>
          <p>
            Communicatemotion di Basile Massimiliano — P.IVA / C.F.: 11062460966 — Via Roma 24, Carpiano (MI). Email: <a href="mailto:info@communicatemotion.it" className="underline hover:text-foreground">info@communicatemotion.it</a>, PEC: <a href="mailto:communicatemotion@pec.it" className="underline hover:text-foreground">communicatemotion@pec.it</a>, telefono +39 328 9777652.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Tipi di dati trattati</h2>
          <p className="mb-2">Le attività di trattamento svolte sono finalizzate all’acquisizione dei seguenti dati personali:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Dati anagrafici e di contatto:</strong> nome, email, numero di telefono, Partita IVA, città, budget, km annui, tipo di veicolo richiesto.</li>
            <li><strong>Dati di navigazione:</strong> log di navigazione, indirizzo IP, cookie tecnici e di profilazione (vedi <a href="/cookie-policy" className="underline hover:text-foreground">Cookie Policy</a>).</li>
            <li><strong>Dati relativi al contratto:</strong> dati necessari per la gestione del noleggio a lungo termine.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Finalità e base giuridica del trattamento</h2>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">1. Navigazione sul sito</h3>
              <p className="mt-1">Ricavare informazioni statistiche anonime sull’uso, controllare il corretto funzionamento del sito e accertamento di responsabilità in caso di ipotetici reati informatici.</p>
              <p className="mt-2 text-xs font-medium text-foreground">Base giuridica: legittimo interesse, art. 6, c.1, lett. f) GDPR.</p>
              <p className="text-xs">Conservazione: 30 giorni.</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">2. Richieste e preventivi</h3>
              <p className="mt-1">Gestire le richieste di preventivo e di informazioni inviate tramite il sito o WhatsApp, per fornire un’offerta personalizzata di noleggio a lungo termine.</p>
              <p className="mt-2 text-xs font-medium text-foreground">Base giuridica: esecuzione di contratto o precontrattuale, art. 6, c.1, lett. b) GDPR.</p>
              <p className="text-xs">Conservazione: per il tempo necessario all’evasione della richiesta, salvo obblighi di conservazione fiscali o amministrativi.</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">3. Comunicazioni commerciali</h3>
              <p className="mt-1">Invio di offerte, promozioni e aggiornamenti sui servizi di noleggio, solo previo consenso.</p>
              <p className="mt-2 text-xs font-medium text-foreground">Base giuridica: consenso, art. 6, c.1, lett. a) GDPR.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Trasferimento dati extra UE</h2>
          <p>I dati personali sono trattati esclusivamente all’interno dell’Unione Europea, salvo l’utilizzo di servizi di terze parti (es. Google Fonts, Meta, WhatsApp) che possono comportare trasferimenti regolati dalle rispettive privacy policy e dagli strumenti contrattuali previsti dal GDPR.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Diritti dell’interessato</h2>
          <p className="mb-2">In relazione ai trattamenti descritti, in qualità di interessato potrai esercitare i diritti sanciti dagli articoli 15-22 GDPR, tra cui:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>diritto di accesso;</li>
            <li>diritto di rettifica;</li>
            <li>diritto alla cancellazione (“diritto all’oblio”);</li>
            <li>diritto di limitazione del trattamento;</li>
            <li>diritto alla portabilità dei dati;</li>
            <li>diritto di opposizione, anche al marketing;</li>
            <li>revoca del consenso in ogni momento.</li>
          </ul>
          <p className="mt-2">
            Potrai proporre reclamo all’Autorità Garante per la protezione dei dati personali: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">www.garanteprivacy.it</a>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Contatti</h2>
          <p>
            Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy, scrivi a: <a href="mailto:amazzarotto@luxurent.it" className="underline hover:text-foreground">amazzarotto@luxurent.it</a>.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Riferimento legale: <a href="https://www.iusprivacy.eu/informativa-privacy-info-1007690271" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">iusprivacy.eu/informativa-privacy-info-1007690271</a>.
        </p>
      </div>
    </main>
  </div>
);

export default Privacy;
