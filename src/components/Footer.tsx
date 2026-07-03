import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t py-8">
    <div className="container text-center text-xs text-muted-foreground">
      <p className="mb-1">
        © 2026 NoleggioXTutti.it — Tutti i diritti riservati.
      </p>
      <p>
        NoleggioXTutti.it è un marchio di luxurent.it — Luxurent Srl – P.I. 08763480962 – Sede: Via Emilia Km 312, Vizzolo Predabissi (MI).
      </p>
      <p className="mt-2 inline-flex items-center justify-center gap-1">
        <Phone className="h-3 w-3" />
        <a href="tel:+393408218788" className="underline hover:text-foreground">+39 340 821 8788</a>
        <span className="mx-1">|</span>
        <Mail className="h-3 w-3" />
        <a href="mailto:gzucchelli@luxurent.it" className="underline hover:text-foreground">gzucchelli@luxurent.it</a>
      </p>
      <p className="mt-2">
        Le offerte pubblicate sono soggette a disponibilità e possono variare
        senza preavviso. I prezzi sono da intendersi + IVA.
      </p>
      <nav className="mt-3 flex justify-center gap-3 text-xs">
        <a href="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</a>
        <span>•</span>
        <a href="/cookie-policy" className="underline hover:text-foreground">Cookie Policy</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
