import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, LogOut } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Offer = Database["public"]["Tables"]["offers"]["Row"];
type OfferInsert = Database["public"]["Tables"]["offers"]["Insert"];

const emptyOffer: OfferInsert = {
  model_name: "",
  fuel_type: "Benzina",
  price_monthly: 0,
  duration_months: 36,
  km_annual: 15000,
  deposit: 0,
  delivery: "Italia",
  services_included: "RCA, Kasko, Manutenzione, Assistenza stradale",
  badge_type: "AZIENDA",
  expires_at: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 16),
  is_active: true,
};

const Admin = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Offer | null>(null);
  const [form, setForm] = useState<OfferInsert>(emptyOffer);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchOffers();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin");
    if (!data || data.length === 0) {
      toast({ title: "Accesso negato", description: "Non hai i permessi di admin.", variant: "destructive" });
      navigate("/");
    }
  };

  const fetchOffers = async () => {
    // Admin needs to see all offers including inactive - use service role or just get all
    const { data, error } = await supabase.from("offers").select("*").order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Errore", description: error.message, variant: "destructive" });
    }
    setOffers(data ?? []);
    setLoading(false);
  };

  const openNew = () => {
    setEditing(null);
    setForm(emptyOffer);
    setDialogOpen(true);
  };

  const openEdit = (offer: Offer) => {
    setEditing(offer);
    setForm({
      model_name: offer.model_name,
      fuel_type: offer.fuel_type,
      price_monthly: offer.price_monthly,
      duration_months: offer.duration_months,
      km_annual: offer.km_annual,
      deposit: offer.deposit,
      delivery: offer.delivery,
      services_included: offer.services_included,
      badge_type: offer.badge_type,
      expires_at: offer.expires_at.slice(0, 16),
      is_active: offer.is_active,
    });
    setDialogOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, expires_at: new Date(form.expires_at!).toISOString() };
    let error;
    if (editing) {
      ({ error } = await supabase.from("offers").update(payload).eq("id", editing.id));
    } else {
      ({ error } = await supabase.from("offers").insert(payload));
    }
    setSaving(false);
    if (error) {
      toast({ title: "Errore", description: error.message, variant: "destructive" });
    } else {
      setDialogOpen(false);
      fetchOffers();
      toast({ title: editing ? "Offerta aggiornata" : "Offerta creata" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Eliminare questa offerta?")) return;
    const { error } = await supabase.from("offers").delete().eq("id", id);
    if (error) toast({ title: "Errore", description: error.message, variant: "destructive" });
    else fetchOffers();
  };

  const toggleActive = async (offer: Offer) => {
    const { error } = await supabase.from("offers").update({ is_active: !offer.is_active }).eq("id", offer.id);
    if (error) toast({ title: "Errore", description: error.message, variant: "destructive" });
    else fetchOffers();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const updateField = (key: keyof OfferInsert, value: string | number | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Gestione Offerte</h1>
          <div className="flex gap-2">
            <Button onClick={openNew} size="sm" className="gap-1">
              <Plus className="h-4 w-4" /> Nuova
            </Button>
            <Button onClick={handleLogout} variant="ghost" size="sm" className="gap-1">
              <LogOut className="h-4 w-4" /> Esci
            </Button>
          </div>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Caricamento...</p>
        ) : (
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Modello</TableHead>
                    <TableHead>€/mese</TableHead>
                    <TableHead className="hidden md:table-cell">Durata</TableHead>
                    <TableHead className="hidden md:table-cell">Badge</TableHead>
                    <TableHead>Attiva</TableHead>
                    <TableHead>Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {offers.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-medium">{o.model_name}</TableCell>
                      <TableCell>€{o.price_monthly}</TableCell>
                      <TableCell className="hidden md:table-cell">{o.duration_months}m</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="secondary" className="text-xs">{o.badge_type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Switch checked={o.is_active} onCheckedChange={() => toggleActive(o)} />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" onClick={() => openEdit(o)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(o.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{editing ? "Modifica offerta" : "Nuova offerta"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="flex flex-col gap-3">
              <label className="text-sm font-medium text-foreground">Modello auto</label>
              <Input value={form.model_name} onChange={(e) => updateField("model_name", e.target.value)} required />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground">Alimentazione</label>
                  <select value={form.fuel_type} onChange={(e) => updateField("fuel_type", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Benzina</option><option>Diesel</option><option>Hybrid</option><option>Elettrica</option><option>GPL</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Badge</label>
                  <select value={form.badge_type} onChange={(e) => updateField("badge_type", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>AZIENDA</option><option>VAN</option><option>FLOTTE</option><option>FLOTTE 6+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground">€/mese</label>
                  <Input type="number" value={form.price_monthly} onChange={(e) => updateField("price_monthly", +e.target.value)} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Durata (mesi)</label>
                  <Input type="number" value={form.duration_months} onChange={(e) => updateField("duration_months", +e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground">Km annui</label>
                  <Input type="number" value={form.km_annual} onChange={(e) => updateField("km_annual", +e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Anticipo €</label>
                  <Input type="number" value={form.deposit} onChange={(e) => updateField("deposit", +e.target.value)} />
                </div>
              </div>

              <label className="text-sm font-medium text-foreground">Consegna</label>
              <Input value={form.delivery} onChange={(e) => updateField("delivery", e.target.value)} />

              <label className="text-sm font-medium text-foreground">Servizi inclusi</label>
              <Input value={form.services_included} onChange={(e) => updateField("services_included", e.target.value)} />

              <label className="text-sm font-medium text-foreground">Scadenza</label>
              <Input type="datetime-local" value={form.expires_at} onChange={(e) => updateField("expires_at", e.target.value)} />

              <Button type="submit" disabled={saving}>
                {saving ? "Salvataggio..." : editing ? "Aggiorna" : "Crea offerta"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;
