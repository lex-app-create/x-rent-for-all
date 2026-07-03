import { Mail, MapPin } from "lucide-react";

const Cookies = () => (
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
        Cookie Policy
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Versione 1.0 — aggiornata al 03 dicembre 2024
      </p>

      <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell’utente (computer, tablet, smartphone) dove vengono memorizzati per essere poi ritrasmessi agli stessi siti in occasione della visita successiva. I cookie possono essere di prima parte (installati dal sito visitato) o di terza parte (installati da domini esterni).
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
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:amazzarotto@luxurent.it" className="underline hover:text-foreground">amazzarotto@luxurent.it</a>
              </li>
              <li className="mt-2 text-xs">P.IVA / C.F.: 08763480962</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Cookie utilizzati</h2>
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">Cookie tecnici</h3>
              <p className="mt-1">
                Necessari al funzionamento del sito e per permettere la navigazione. Sono installati in modo automatico al momento dell’accesso e non richiedono consenso.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">Cookie di analisi e statistica</h3>
              <p className="mt-1">
                Utilizzati per raccogliere informazioni statistiche anonime sull’uso del sito, per migliorarne prestazioni e contenuti. Vengono installati solo con il tuo consenso.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">Cookie di profilazione</h3>
              <p className="mt-1">
                Utilizzati per inviare messaggi pubblicitari in linea con le preferenze manifestate dall’utente durante la navigazione. Richiedono consenso esplicito.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">Servizi di terze parti</h3>
              <p className="mt-1">
                Il sito utilizza Google Fonts per il caricamento dei caratteri. Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Google Privacy Policy</a>. Il sito può inoltre utilizzare pulsanti o widget di social media (es. Facebook, WhatsApp); per le policy di tali servizi si rimanda ai rispettivi siti.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Gestione dei cookie</h2>
          <p>
            All’accesso al sito viene mostrato un banner informativo che consente di gestire le preferenze sui cookie. È possibile in qualsiasi momento modificare le proprie preferenze attraverso il browser, cancellando i cookie già presenti e impostando il browser per rifiutarne l’installazione. Si segnala che la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Come disabilitare i cookie dal browser</h2>
          <p className="mb-2">
            Ciascun browser gestisce i cookie in modo diverso. Di seguito i link alle istruzioni dei browser più comuni:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Microsoft Edge</a></li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-bold text-foreground">Contatti</h2>
          <p>
            Per qualsiasi domanda relativa ai cookie o alla presente informativa, scrivi a: <a href="mailto:amazzarotto@luxurent.it" className="underline hover:text-foreground">amazzarotto@luxurent.it</a>.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Riferimento legale: <a href="https://www.iusprivacy.eu/informativa-privacy-info-1007690271" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">iusprivacy.eu/informativa-privacy-info-1007690271</a>.
        </p>
      </div>
    </main>
  </div>
);

export default Cookies;
