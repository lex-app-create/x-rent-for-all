

## NoleggioXTutti.it — Piano di implementazione completo

### Panoramica

Sito single-page ad alta conversione per noleggio lungo termine aziendale, basato sui modelli comportamentali indicati (BJ Fogg, Hick, scarcity etica, reciprocità). Tutto spinge verso un unico CTA: WhatsApp (393358542051). Backend con Lovable Cloud per gestione offerte dinamiche + pannello admin.

---

### Architettura frontend

**File principali da creare:**

| File | Contenuto |
|------|-----------|
| `src/pages/Index.tsx` | Pagina principale con tutte le sezioni |
| `src/pages/Admin.tsx` | Pannello admin CRUD offerte (protetto) |
| `src/pages/Auth.tsx` | Login admin |
| `src/components/Hero.tsx` | Hero + mini-form WhatsApp |
| `src/components/TrustReasons.tsx` | 3 motivi + Best Price garanzia |
| `src/components/OffersGrid.tsx` | Griglia offerte (max 6) da DB |
| `src/components/OfferCard.tsx` | Card singola offerta |
| `src/components/HowItWorks.tsx` | 3 step |
| `src/components/FAQ.tsx` | Accordion FAQ anti-diffidenza |
| `src/components/AboutUs.tsx` | Chi siamo + dati aziendali |
| `src/components/StickyWhatsApp.tsx` | Barra fissa in basso |
| `src/components/Header.tsx` | Header sticky con nav + CTA |
| `src/components/Footer.tsx` | Footer con note legali/privacy |
| `src/lib/whatsapp.ts` | Helper per generare link WhatsApp con messaggi precompilati |
| `src/hooks/useOffers.ts` | Hook TanStack Query per fetch offerte |

---

### Sezioni della pagina (in ordine)

1. **Header sticky** — Logo placeholder "NoleggioXTutti.it", nav (Offerte, Come funziona, FAQ, Chi siamo), bottone WhatsApp verde
2. **Hero** — Titolo/sottotitolo dal brief, chip micro-trust (trasparenza, consegna Italia, P.IVA), mini-form a destra (Città, Budget select, Km select, Tipo esigenza) che apre WhatsApp con messaggio precompilato
3. **Best Price + 3 motivi** — Card con garanzia soft ("eguagliamo entro 24h"), risposta rapida, copertura nazionale
4. **Offerte del giorno** — Max 6 card da database. Ogni card: badge tipo (Azienda/Van/Flotte), modello + alimentazione, canone/mese, durata, km, anticipo, servizi inclusi, scadenza con urgenza, CTA "Blocca su WhatsApp"
5. **Come funziona** — 3 step illustrati (scrivi 30sec → 2-3 opzioni → blocca e finalizza)
6. **FAQ** — Accordion con le 6 domande del brief (costi nascosti, fornitore, durata promo, scarico IVA, offerta scaduta, Best Price)
7. **Chi siamo** — Testo + placeholder email/telefono/P.IVA/sede
8. **Footer** — Note legali, privacy, copyright
9. **Barra sticky WhatsApp** — Fissa in basso: "Preventivo in 2 ore. Budget tipico: €399–599" + bottone verde

---

### Palette e design

- Verde brand: `#0c8f3f` (WhatsApp/CTA)
- Blu scuro: `#1a2b4a` (testi/header)
- Arancione warning: `#d46a00` (scadenze/urgenza)
- Sfondo: `#f6f8ff` con sfumature sottili
- Card bianche con ombre leggere, bordi arrotondati
- Font system (Inter o simile via Tailwind)

CSS variables personalizzate in `index.css` per i colori brand.

---

### Backend — Lovable Cloud (Supabase)

**Tabella `offers`:**

| Colonna | Tipo | Note |
|---------|------|------|
| id | uuid PK | |
| model_name | text | Es. "SUV compatto" |
| fuel_type | text | Benzina/Hybrid/Diesel/Elettrica |
| price_monthly | integer | Canone in € |
| duration_months | integer | |
| km_annual | integer | |
| deposit | integer | Anticipo (0 se zero) |
| delivery | text | Es. "Italia" |
| services_included | text | Descrizione servizi |
| badge_type | text | "AZIENDA", "VAN", "FLOTTE", "FLOTTE 6+" |
| expires_at | timestamptz | Scadenza offerta |
| is_active | boolean | Default true |
| created_at | timestamptz | |

**RLS:** Lettura pubblica per offerte attive. Scrittura solo admin (via `has_role`).

**Auth:** Supabase Auth email/password per admin. Tabella `user_roles` con ruolo `admin` come da istruzioni sicurezza.

---

### Pannello Admin (`/admin`)

- Login con email/password Supabase
- Dashboard con lista offerte (tabella)
- Form modale per aggiungere/modificare offerta (tutti i campi)
- Toggle attiva/disattiva, eliminazione con conferma
- Protetto da ruolo admin verificato server-side

---

### WhatsApp Integration

Helper `whatsapp.ts`:
- Funzione `buildWhatsAppUrl(message: string)` → `https://wa.me/393358542051?text=...`
- Messaggi precompilati per:
  - **Form Hero**: include città, budget, km, tipo esigenza
  - **Card offerta**: "Vorrei bloccare l'offerta [modello] a €[prezzo]/mese"
  - **CTA generico**: "Ciao, vorrei un preventivo per noleggio lungo termine aziendale"
- Validazione input con `encodeURIComponent`

---

### Step di implementazione

1. Setup tema (colori, CSS variables) e componenti layout (Header, Footer, StickyWhatsApp)
2. Sezioni statiche: Hero con form, TrustReasons/BestPrice, HowItWorks, FAQ, AboutUs
3. Database: creare tabella `offers`, RLS, auth, ruoli admin
4. Sezioni dinamiche: OffersGrid che carica da DB, OfferCard con scadenza
5. Pannello Admin: login, CRUD offerte
6. Inserire offerte di esempio nel database

