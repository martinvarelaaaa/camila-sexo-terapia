"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="p-8 rounded-2xl text-center"
        style={{ backgroundColor: "var(--sage-light)" }}
      >
        <div className="text-4xl mb-4">✉️</div>
        <h3
          className="text-xl font-bold mb-2"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: "var(--charcoal)",
          }}
        >
          ¡Mensaje enviado!
        </h3>
        <p className="text-base" style={{ color: "var(--warm-gray)" }}>
          Gracias por escribirme. Te respondo a la brevedad, normalmente en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--charcoal)" }}
          >
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 text-sm"
            style={{
              borderColor: "var(--lavender-light)",
              backgroundColor: "white",
              color: "var(--charcoal)",
            }}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--charcoal)" }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 text-sm"
            style={{
              borderColor: "var(--lavender-light)",
              backgroundColor: "white",
              color: "var(--charcoal)",
            }}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--charcoal)" }}
        >
          WhatsApp / Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 text-sm"
          style={{
            borderColor: "var(--lavender-light)",
            backgroundColor: "white",
            color: "var(--charcoal)",
          }}
          placeholder="+598 99 000 000"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--charcoal)" }}
        >
          ¿Qué tipo de consulta buscás?
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 text-sm"
          style={{
            borderColor: "var(--lavender-light)",
            backgroundColor: "white",
            color: "var(--charcoal)",
          }}
        >
          <option value="">No sé todavía</option>
          <option value="individual">Psicoterapia Individual</option>
          <option value="pareja">Terapia de Pareja</option>
          <option value="sexual">Terapia Sexual</option>
          <option value="perinatal">Terapia Perinatal</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--charcoal)" }}
        >
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 text-sm resize-none"
          style={{
            borderColor: "var(--lavender-light)",
            backgroundColor: "white",
            color: "var(--charcoal)",
          }}
          placeholder="Contame brevemente lo que te trae, sin necesidad de entrar en detalles si no querés..."
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          Hubo un error al enviar el mensaje. Por favor intentá de nuevo o escribime por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 px-6 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:shadow-md disabled:opacity-60"
        style={{ backgroundColor: "var(--lavender-dark)" }}
      >
        {state === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--warm-gray)" }}>
        Tu información es confidencial y no será compartida con terceros.
      </p>
    </form>
  );
}
