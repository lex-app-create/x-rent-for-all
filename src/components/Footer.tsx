const Footer = () => (
  <footer className="border-t py-8">
    <div className="container text-center text-xs text-muted-foreground">
      <p className="mb-1">
        © {new Date().getFullYear()} NoleggioXTutti.it — Tutti i diritti riservati.
      </p>
      <p>
        Le offerte pubblicate sono soggette a disponibilità e possono variare
        senza preavviso. I prezzi sono da intendersi + IVA.
      </p>
    </div>
  </footer>
);

export default Footer;
