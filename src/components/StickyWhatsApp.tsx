import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, buildGenericMessage } from "@/lib/whatsapp";

const StickyWhatsApp = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
    <div className="container flex items-center justify-between gap-4 py-3">
      <p className="hidden text-sm text-muted-foreground sm:block">
        <span className="font-semibold text-foreground">Preventivo in 2 ore.</span>{" "}
        Budget tipico: €399–599/mese + IVA
      </p>
      <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
        <a
          href={buildWhatsAppUrl(buildGenericMessage())}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          Scrivici su WhatsApp
        </a>
      </Button>
    </div>
  </div>
);

export default StickyWhatsApp;
