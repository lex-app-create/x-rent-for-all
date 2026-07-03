const WHATSAPP_NUMBER = "393408218788";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildHeroFormMessage(data: {
  citta: string;
  budget: string;
  km: string;
  tipo: string;
}): string {
  return `Ciao! Vorrei un preventivo per noleggio lungo termine aziendale.\n\n📍 Città: ${data.citta || "Non specificata"}\n💰 Budget: ${data.budget || "Non specificato"}\n🛣️ Km annui: ${data.km || "Non specificati"}\n🚗 Tipo: ${data.tipo || "Non specificato"}\n\nGrazie!`;
}

export function buildOfferMessage(modelName: string, priceMonthly: number): string {
  return `Ciao! Vorrei bloccare l'offerta:\n\n🚗 ${modelName}\n💰 €${priceMonthly}/mese\n\nÈ ancora disponibile?`;
}

export function buildGenericMessage(): string {
  return "Ciao! Vorrei un preventivo per noleggio lungo termine aziendale. Potete aiutarmi?";
}
