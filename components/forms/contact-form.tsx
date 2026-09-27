"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas } from "@/lib/content/practice-areas";
import { siteConfig } from "@/lib/content/site-config";

const meetingTypes = [
  { value: "Ofiste Yüz Yüze", label: "Ofiste Yüz Yüze", hint: "Çağlayan Ofisi" },
  { value: "Online Danışmanlık", label: "Online Danışmanlık", hint: "Görüntülü Görüşme" },
  { value: "Telefonla Ön Değerlendirme", label: "Telefonla Ön Değerlendirme", hint: "Kısa Görüşme" },
];

/**
 * No backend exists yet. Submitting composes an email via the visitor's
 * own mail client — honest about the actual mechanism. See README for
 * wiring a real endpoint.
 */
export function ContactForm() {
  const [meetingType, setMeetingType] = useState(meetingTypes[0].value);
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const area = formData.get("area");
    const summary = formData.get("summary");

    const subject = `Danışmanlık Talep Formu — ${name ?? ""}`;
    const body = [
      `Ad Soyad: ${name ?? ""}`,
      `Telefon: ${phone ?? ""}`,
      `E-posta: ${email ?? ""}`,
      `İlgili Hukuk Alanı: ${area ?? ""}`,
      `Tercih Edilen Görüşme Türü: ${meetingType}`,
      "",
      "Konu Özeti:",
      String(summary ?? ""),
    ].join("\n");

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
            Ad Soyad
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Örn: Ahmet Yılmaz"
            className="mt-1.5 w-full rounded-sm bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
            Telefon Numarası
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="+90 (5XX) XXX XX XX"
            className="mt-1.5 w-full rounded-sm bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
            E-posta Adresi
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="ornek@alanadi.com"
            className="mt-1.5 w-full rounded-sm bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          />
        </div>
        <div>
          <label htmlFor="contact-area" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
            İlgili Hukuk Alanı
          </label>
          <select
            id="contact-area"
            name="area"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-sm bg-card px-4 py-3 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            <option value="" disabled>
              Alan Seçiniz...
            </option>
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.title}>
                {area.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset>
        <legend className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          Tercih Edilen Görüşme Türü
        </legend>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {meetingTypes.map((type) => (
            <label
              key={type.value}
              className="flex cursor-pointer items-start gap-2.5 rounded-sm bg-card p-4 text-sm has-[:checked]:ring-2 has-[:checked]:ring-burgundy"
            >
              <input
                type="radio"
                name="meetingType"
                value={type.value}
                checked={meetingType === type.value}
                onChange={() => setMeetingType(type.value)}
                className="mt-1 h-4 w-4 shrink-0"
              />
              <span>
                <span className="block font-medium text-ink">{type.label}</span>
                <span className="text-xs text-ink-soft">{type.hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="contact-summary" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          Konu Özeti
        </label>
        <textarea
          id="contact-summary"
          name="summary"
          required
          rows={4}
          placeholder="Uyuşmazlığın tarafları, varsa dosya/esas numarası ve danışmanlık talep edilen ana konuyu belirtiniz..."
          className="mt-1.5 w-full resize-none rounded-sm bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-stone"
        />
        Paylaştığım kişisel verilerimin{" "}
        <a href="/kvkk" className="font-medium text-ink underline hover:text-burgundy">
          KVKK Aydınlatma Metni
        </a>{" "}
        kapsamında hukuki danışmanlık randevusu amacıyla işlenmesini onaylıyorum.
      </label>

      <button
        type="submit"
        className="btn-label w-full rounded-sm bg-navy px-6 py-4 text-ivory transition-colors hover:bg-ink"
      >
        Danışmanlık Talebini İlet
      </button>

      <p className="text-center text-[11px] leading-relaxed text-label">
        Gönder&apos;e bastığınızda varsayılan e-posta uygulamanız açılır ve mesajınız doğrudan
        büromuza iletilir. Bilgileriniz avukatlık meslek sırrı ve KVKK ilkeleri uyarınca üçüncü
        kişilerle paylaşılmaz.
      </p>
    </form>
  );
}
