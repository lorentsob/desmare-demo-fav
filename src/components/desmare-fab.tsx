"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { MessageSquare, CheckCircle } from "lucide-react";

// Definizione dell'interfaccia per i dati del form
interface FormData {
  nome: string;
  email: string;
  telefono: string;
  servizio: string;
  messaggio: string;
}

const DesmareFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefono: "",
    servizio: "",
    messaggio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      servizio: value,
    }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    console.log("Form data:", formData);
    setSubmitted(true);

    // Reset dopo 3 secondi
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({
        nome: "",
        email: "",
        telefono: "",
        servizio: "",
        messaggio: "",
      });
    }, 3000);
  };

  return (
    <div className="relative h-screen w-full bg-gray-100 p-8">
      {/* Contenuto pagina di esempio */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Demo Desmare</h2>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h1 className="font-semibold text-gray-800 mb-2">
              Descrizione del progetto
            </h1>
            <p className="text-gray-600">
              Desmare è specializzata in demolizioni, smantellamento e recupero
              rifiuti con focus sulla soluzione chiavi in mano. Il sito sarà
              sviluppato con Next.js e avrà come obiettivo principale la
              generazione di richieste di preventivo.
            </p>
          </div>
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <h3 className="font-semibold text-teal-800 mb-2">
              Sistema di colori Desmare
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-md bg-[#0B6E4F]"></div>
                <span className="text-xs mt-1 text-gray-600">#0B6E4F</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-md bg-[#08A045]"></div>
                <span className="text-xs mt-1 text-gray-600">#08A045</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-md bg-[#FF9505]"></div>
                <span className="text-xs mt-1 text-gray-600">#FF9505</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-md bg-[#212529]"></div>
                <span className="text-xs mt-1 text-gray-600">#212529</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-md bg-[#6C757D]"></div>
                <span className="text-xs mt-1 text-gray-600">#6C757D</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#FF9505] hover:bg-[#e88700] text-white p-0 flex items-center justify-center shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Dialog di richiesta preventivo */}
      {typeof window !== "undefined" && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-left text-gray-800 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-[#0B6E4F]" />
                Richiedi un preventivo gratuito
              </DialogTitle>
            </DialogHeader>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-[#0B6E4F]">
                  Grazie per la tua richiesta!
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Ti contatteremo al più presto per fornirti il preventivo
                  richiesto.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="telefono">Numero di telefono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="servizio">Servizio necessario</Label>
                    <Select
                      value={formData.servizio}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demolizioni">Demolizioni</SelectItem>
                        <SelectItem value="smantellamenti">
                          Smantellamenti
                        </SelectItem>
                        <SelectItem value="recupero">
                          Recupero rifiuti
                        </SelectItem>
                        <SelectItem value="bonifica">
                          Bonifica ambientale
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="messaggio">Messaggio</Label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      rows={3}
                      value={formData.messaggio}
                      onChange={handleChange}
                      placeholder="Descrivi il tuo progetto..."
                      className="resize-none"
                    />
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-[#FF9505] hover:bg-[#e88700] text-white"
                  >
                    Invia richiesta
                  </Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default DesmareFloatingButton;
