import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, buildGenericMessage } from "@/lib/whatsapp";

const navItems = [
  { label: "Offerte", href: "#offerte" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "FAQ", href: "#faq" },
  { label: "Chi siamo", href: "#chi-siamo" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Noleggio<span className="text-primary">X</span>Tutti
            <span className="text-xs font-normal text-muted-foreground">.it</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="gap-2">
            <a
              href={buildWhatsAppUrl(buildGenericMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Scrivici su WhatsApp
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-card p-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="gap-2">
              <a
                href={buildWhatsAppUrl(buildGenericMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Scrivici su WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
