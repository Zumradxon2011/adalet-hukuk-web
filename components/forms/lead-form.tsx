"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas } from "@/lib/content/practice-areas";
import { siteConfig } from "@/lib/content/site-config";

/**
 * No backend exists yet. Submitting composes an email via the visitor's
 * own mail client — this is honest about what actually happens, unlike a
 * fake "submitted" success state. See README for wiring a real endpoint.
 */
export function LeadForm() {
  const [consent, setConsent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const area = formData.get("area");
    const summary = formData.get("summary");

    const subject = `Danışmanlık Talebi — ${name ?? ""}`;
    const body = [
      `Ad Soyad: ${name ?? ""}`,
      `Telefon: ${phone ?? ""}`,
      `İlgili Hukuk Alanı: ${area ?? ""}`,
      "",
      "Konu Özeti:",
      String(summary ?? ""),
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="lead-name" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          Adınız Soyadınız
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          placeholder="Tam adınız"
          className="mt-1.5 w-full rounded-sm bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        />
      </div>

      <div>
        <label htmlFor="lead-phone" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          İletişim Numarası
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          required
          placeholder="+90 5XX XXX XX XX"
          className="mt-1.5 w-full rounded-sm bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        />
      </div>

      <div>
        <label htmlFor="lead-area" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          Hukuki Konu / Departman
        </label>
        <select
          id="lead-area"
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

      <div>
        <label htmlFor="lead-summary" className="text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          Kısa Dosya Özeti
        </label>
        <textarea
          id="lead-summary"
          name="summary"
          required
          rows={3}
          placeholder="Uyuşmazlığın taraflarını ve danışmanlık talep edilen ana konuyu belirtiniz..."
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
        Kişisel verilerimin{" "}
        <a href="/kvkk" className="font-medium text-ink underline hover:text-burgundy">
          KVKK Aydınlatma Metni
        </a>{" "}
        kapsamında danışmanlık talebimin değerlendirilmesi amacıyla işlenmesini onaylıyorum.
      </label>

      <button
        type="submit"
        className="btn-label w-full rounded-sm bg-navy px-6 py-4 text-ivory transition-colors hover:bg-ink"
      >
        Danışmanlık Talebini İlet
      </button>

      <p className="text-center text-[11px] leading-relaxed text-label">
        Gönder&apos;e bastığınızda varsayılan e-posta uygulamanız açılır ve mesajınız doğrudan
        büromuza iletilir.
      </p>
    </form>
  );
}
