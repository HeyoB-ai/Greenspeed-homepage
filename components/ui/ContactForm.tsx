"use client";

import { useState } from "react";
import Button from "./Button";

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    naam: "",
    organisatie: "",
    email: "",
    telefoon: "",
    type: "",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    setSubmitted(true);
  };

  const labelClass = dark
    ? "block text-sm font-medium mb-1 text-green-100"
    : "block text-sm font-medium mb-1 text-gray-700";

  const inputClass = `w-full rounded-lg border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
    dark
      ? "border-green-600 bg-white/10 text-white placeholder-green-200 focus:border-green-400"
      : "border-gray-300 bg-white focus:border-green-500"
  }`;

  if (submitted) {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          dark ? "bg-white/10 text-white" : "bg-green-50 text-green-800"
        }`}
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-syne font-bold text-2xl mb-2">Bericht ontvangen!</h3>
        <p className="text-lg">
          Bedankt voor uw bericht. We nemen binnen 1 werkdag contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="naam" className={labelClass}>
            Naam *
          </label>
          <input
            type="text"
            id="naam"
            name="naam"
            required
            value={formData.naam}
            onChange={handleChange}
            placeholder="Jan de Vries"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="organisatie" className={labelClass}>
            Apotheek / Organisatie
          </label>
          <input
            type="text"
            id="organisatie"
            name="organisatie"
            value={formData.organisatie}
            onChange={handleChange}
            placeholder="Apotheek De Linde"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jan@apotheek.nl"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telefoon" className={labelClass}>
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="telefoon"
            name="telefoon"
            value={formData.telefoon}
            onChange={handleChange}
            placeholder="+31 6 12345678"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="type" className={labelClass}>
          Ik ben: *
        </label>
        <select
          id="type"
          name="type"
          required
          value={formData.type}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Selecteer een optie</option>
          <option value="Apotheker">Apotheker</option>
          <option value="Koerier">Koerier (sollicitatie)</option>
          <option value="Anders">Anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="bericht" className={labelClass}>
          Bericht *
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          value={formData.bericht}
          onChange={handleChange}
          placeholder="Vertel ons hoe we u kunnen helpen..."
          className={inputClass}
        />
      </div>

      <Button type="submit" variant={dark ? "white" : "primary"} size="lg" className="w-full">
        Verstuur bericht
      </Button>
    </form>
  );
}
