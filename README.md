# Adalet Hukuk — Web Sitesi

Adalet Hukuk için üretilmiş, Next.js (App Router) tabanlı, SEO/yerel arama/AI keşfi odaklı kurumsal hukuk bürosu web sitesi.

Bu belge, projeyi teslim alan geliştirici/ekip için kurulum, geliştirme, derleme, dağıtım, mimari ve bakım bilgilerini içerir.

---

## 1. Teknoloji Yığını

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Dil:** TypeScript (strict mode)
- **Stil:** Tailwind CSS v4 (CSS-tabanlı `@theme` token sistemi, bkz. `app/globals.css`)
- **Fontlar:** `next/font/google` ile Playfair Display (başlık) + Plus Jakarta Sans (gövde)
- **Render stratejisi:** Neredeyse tüm sayfalar derleme zamanında statik olarak üretilir (SSG) — `npm run build` çıktısında her rota için `●`/`○` işaretine bakınız
- **Harici servis bağımlılığı:** Yok. Form gönderimi dahil hiçbir üçüncü taraf API/analitik entegre edilmemiştir (bkz. bölüm 8 — Bilinen Sınırlamalar)

---

## 2. Gereksinimler

- Node.js 20 veya üzeri
- npm (proje `package-lock.json` ile birlikte gelir; başka bir paket yöneticisine geçerken lock dosyasını güncelleyin)

---

## 3. Ortam Değişkenleri

Proje kökünde bir `.env.local` dosyası oluşturun (repo'ya dahil değildir):

```bash
# Sitenin canlı/production URL'si. metadata canonical/OG URL'leri ve
# sitemap.xml için kullanılır. Prodüksiyonda GERÇEK domain ile ayarlanmalıdır.
NEXT_PUBLIC_SITE_URL=https://www.adalethukuk.com
```

Bu değişken tanımlanmazsa `lib/content/site-config.ts` içindeki varsayılan değer kullanılır. **Prodüksiyon dağıtımında mutlaka gerçek domain ile ayarlayın**, aksi halde sitemap ve canonical URL'ler yanlış adresi işaret eder.

Başka bir ortam değişkeni gerekmez — proje şu an bir veritabanına, API anahtarına veya harici servise bağlı değildir.

---

## 4. Yerel Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır. Dosya değişiklikleri anında yansır (Turbopack).

---

## 5. Prodüksiyon Derlemesi

```bash
npm run build
npm run start
```

`npm run build` tüm sayfaları statik olarak üretir (dinamik `[slug]` rotaları dahil, `generateStaticParams` ile derleme zamanında). Derleme sonunda konsolda her rotanın statik (`○`) veya statik parametreli (`●`) olduğunu gösteren bir tablo görürsünüz.

Kod kalitesi kontrolleri:

```bash
npm run lint        # ESLint
npx tsc --noEmit    # TypeScript tip kontrolü
```

---

## 6. Dağıtım (Deployment)

Proje herhangi bir Next.js uyumlu barındırma ortamında çalışır:

- **Vercel (önerilen):** Repo'yu bağlayın, `NEXT_PUBLIC_SITE_URL` ortam değişkenini ayarlayın, otomatik dağıtım yapılır. Ekstra yapılandırma gerekmez.
- **Node.js sunucusu / Docker:** `npm run build` sonrası `npm run start` ile `next start` sunucusu ayağa kalkar (varsayılan port 3000). Bir reverse proxy (Nginx vb.) arkasına alınması önerilir.
- **Statik dışa aktarım gerekmiyor:** Site App Router + SSG kullanır; `output: "export"` yapılandırması eklenmemiştir çünkü OG görseli (`app/opengraph-image.tsx`, `next/og` ile üretilir) ve gelecekte eklenebilecek dinamik rotalar için standart Next.js sunucu modeli tercih edilmiştir.

**Dağıtımdan önce mutlaka yapılması gerekenler:**

1. `NEXT_PUBLIC_SITE_URL` ortam değişkenini gerçek domain ile ayarlayın.
2. `lib/content/site-config.ts` içindeki iletişim/adres/saat bilgilerinin güncel olduğunu doğrulayın.
3. Bölüm 9'daki "Yayın Sonrası Yapılacaklar" listesini uygulayın (Google Business Profile, Search Console vb.) — bunlar kod ile yapılamaz.

---

## 7. Proje Mimarisi

```
app/                          → Next.js App Router sayfaları (her klasör bir route)
  layout.tsx                  → Kök layout: fontlar, Navbar/Footer, global metadata, Organization JSON-LD
  page.tsx                    → Ana sayfa
  sitemap.ts                  → /sitemap.xml (dinamik, içerik verisinden üretilir)
  robots.ts                   → /robots.txt
  icon.svg                    → Favicon (marka amblemi)
  opengraph-image.tsx         → Sosyal paylaşım görseli (next/og ile kod üzerinden üretilir)
  not-found.tsx                → Özel 404 sayfası
  hakkimizda/                 → /hakkimizda
  hukuk-alanlari/
    page.tsx                  → /hukuk-alanlari (12 alan, filtrelenebilir grid)
    [slug]/page.tsx           → /hukuk-alanlari/{slug} (dinamik detay şablonu, 12 alan için ortak)
  avukatlar/
    page.tsx                  → /avukatlar (kurucu + 32 kişilik ekip)
    [slug]/page.tsx           → /avukatlar/{slug}
  makaleler/
    page.tsx                  → /makaleler
    [slug]/page.tsx           → /makaleler/{slug}
  iletisim/                  → /iletisim (form + harita + ofis bilgisi)
  kvkk/, gizlilik-politikasi/, cerez-politikasi/ → Yasal sayfalar

components/
  layout/                    → Navbar, Footer (site geneli)
  ui/                        → Yeniden kullanılabilir küçük bileşenler (Cta, Breadcrumbs, Stats, SectionHeading, LogoMark)
  sections/                  → Sayfa bölümleri (Hero, PrinciplesSection, FounderSection, LocationSection, FinalCta)
  practice-areas/            → Hukuk alanı kartları, filtre, metodoloji, SSS bileşenleri
  lawyers/                   → Ekip kartı/grid bileşenleri
  articles/                  → Makale kartı/grid bileşenleri
  forms/                     → LeadForm (ana sayfa), ContactForm (iletişim sayfası) — istemci bileşenleri
  legal/                     → Yasal sayfa ortak şablonu

lib/
  content/                   → TÜM METİN İÇERİĞİ burada (bkz. bölüm 8)
    site-config.ts           → Firma kimliği, adres, telefon, saatler, koordinatlar, metrikler
    practice-areas.ts        → 12 hukuk alanının tüm içeriği
    practice-area-groups.ts  → Hukuk alanları sayfasındaki filtre grupları
    lawyers.ts                → Kurucu + 32 ekip üyesi
    articles.ts                → Makaleler
    navigation.ts             → Menü/footer linkleri
  seo.ts                      → Metadata builder + JSON-LD üreticileri (Organization, Person, Article, BreadcrumbList, FAQPage)
  utils.ts                    → slugify, okuma süresi hesaplama, tarih formatlama, cn()
```

---

## 8. İçerik Güncelleme Rehberi (Bakım)

**Kural: Tüm metin içerik `lib/content/` altındadır. Sayfa bileşenlerinde metin hardcode etmeyin.**

| Ne değişecek? | Nerede? |
|---|---|
| Telefon, e-posta, adres, çalışma saatleri | `lib/content/site-config.ts` |
| Yeni hukuk alanı ekleme/düzenleme | `lib/content/practice-areas.ts` (bkz. `PracticeArea` tipi) |
| Ekip üyesi ekleme/çıkarma | `lib/content/lawyers.ts` |
| Yeni makale ekleme | `lib/content/articles.ts` |
| Menü linkleri | `lib/content/navigation.ts` |

Yeni bir hukuk alanı veya makale eklediğinizde **hiçbir route dosyasını değiştirmeniz gerekmez** — dinamik `[slug]` sayfaları ve `sitemap.ts` otomatik olarak yeni içeriği alır (bir sonraki `npm run build` ile).

### Avukat profilleri hakkında önemli not

`lawyers.ts` içinde her kayıtta bir `hasFullProfile` alanı vardır:

- `true` (şu an yalnızca kurucu için): Tam biyografi, `/avukatlar/{slug}` sayfası **indexlenir**.
- `false` (32 ekip üyesi için): Doğrulanmamış özel bilgi (uzmanlık alanı, unvan, baro sicili vb.) **eklenmemiştir** — sayfa `noindex` olarak işaretlenmiştir (bkz. `app/avukatlar/[slug]/page.tsx`, `metadata.robots`).

Bir ekip üyesi için doğrulanmış, yayınlanabilir bilgi (biyografi, uzmanlık alanı, baro sicil no vb.) elinize geçtiğinde: `lawyers.ts`'de ilgili kayda `bio` ekleyin ve `hasFullProfile: true` yapın; sayfa otomatik olarak indexlenir hale gelir.

**Bu kural bilinçli olarak konmuştur — bkz. bölüm 8.1.**

### 8.1 İçerik Doğruluğu Kuralı

Bu site, gerçek olmayan/doğrulanmamış hiçbir bilgi içermeyecek şekilde tasarlanmıştır:

- Baro sicil numarası, unvan, uzmanlık alanı gibi **doğrulanmamış hiçbir kişisel veri eklenmemiştir**.
- "865+" ve "76+" metrikleri (`site-config.ts` → `metrics`) onaylı tasarım dosyasındaki etiketlerle ("Dosya & Müvekkil", "Kurumsal Süreç") kullanılmıştır — **yayın öncesi firma ile bu anlamı teyit edin**.
- Sahte müşteri yorumu, ödül, "en iyi" iddiası veya uydurma istatistik eklenmemiştir ve **eklenmemelidir**.

Yeni içerik eklerken bu prensibi koruyun: doğrulanmamış bir bilgiyi asla sessizce uydurmayın; ya açıkça işaretlenmiş bir yer tutucu kullanın ya da bilgiyi tamamen çıkarın.

---

## 9. SEO / Yerel Arama / AI Keşfi Yapılandırması

**Kod ile yapılmış olanlar (bu teslimatta mevcut):**

- Her sayfada benzersiz `title`, `description`, `canonical` (`lib/seo.ts` → `buildMetadata`)
- Yapılandırılmış veri (JSON-LD): `LegalService` (Organization), `Person` (kurucu), `Article`, `BreadcrumbList`, `FAQPage`
- Dinamik `sitemap.xml` ve `robots.txt` (`app/sitemap.ts`, `app/robots.ts`)
- Kod üzerinden üretilen Open Graph görseli (`app/opengraph-image.tsx`) — sahte/stok fotoğraf kullanılmamıştır
- Tutarlı NAP (isim/adres/telefon) her sayfada aynı `site-config.ts` kaynağından
- Anlamlı, Türkçe SEO dostu URL yapısı (`/hukuk-alanlari/ceza-hukuku` gibi)
- Semantik HTML, breadcrumb, başlık hiyerarşisi (`h1` → `h2` → `h3`)

**Kod ile YAPILAMAYAN, yayın sonrası firma tarafından yapılması gereken adımlar:**

1. **Google Business Profile** oluşturulup doğrulanmalı (aynı NAP bilgileriyle) — yerel arama/Harita görünürlüğü için en kritik adım.
2. **Google Search Console** ve **Bing Webmaster Tools**'a site eklenip `sitemap.xml` gönderilmeli.
3. **Gerçek fotoğraflar** eklenmeli — bu teslimatta bilinçli olarak sahte stok fotoğraf veya kurucunun uydurma bir görseli kullanılmamış, yerine tipografik/geometrik panel tasarımı tercih edilmiştir.
4. **Baro/dizin kayıtları ve geri bağlantılar (backlink)** — bu, arama sıralamasının "site dışı" yarısıdır ve kod ile üretilemez.
5. **Gerçek müvekkil yorumları** (Google Business Profile üzerinden) — asla uydurulmamalıdır.
6. `NEXT_PUBLIC_SITE_URL` prodüksiyon domaini ile ayarlanmalı (bkz. bölüm 3).

---

## 10. Bilinen Sınırlamalar

- **İletişim formu bir backend'e bağlı değildir.** `components/forms/lead-form.tsx` ve `contact-form.tsx`, gönderildiğinde ziyaretçinin kendi e-posta istemcisini `mailto:` bağlantısıyla açar. Gerçek bir form işleme akışı (ör. e-posta gönderim servisi, CRM entegrasyonu) isteniyorsa bu iki bileşendeki `handleSubmit` fonksiyonu bir API rotasına (`app/api/.../route.ts`) veya üçüncü taraf forma (Resend, Formspree vb.) yönlendirilmelidir.
- **Analitik veya çerez izleme aracı entegre edilmemiştir.** `cerez-politikasi` sayfası bu doğrultuda yazılmıştır. Google Analytics vb. eklenirse çerez politikası metninin güncellenmesi gerekir.
- **32 ekip üyesi için detaylı biyografi/uzmanlık bilgisi yoktur** (bkz. bölüm 8) — bu kasıtlıdır, uydurma bilgiyle doldurulmamıştır.

---

## 11. Tasarım Sistemi Özeti

Renk paleti ve fontlar `app/globals.css` içinde `@theme` bloğunda tanımlıdır; onaylanmış tasarımdan (Figma) birebir alınmıştır:

- **Ink (`--color-ink`):** `#1c1c18` — başlık/birincil metin
- **Navy (`--color-navy`):** `#131c26` — koyu yüzeyler (butonlar, koyu bölümler)
- **Ivory (`--color-ivory`):** `#fcf9f3` — sayfa arkaplanı
- **Card/Surface/Stone/Muted:** açık nötr yüzey tonları
- **Burgundy (`--color-burgundy`):** `#641f2a` — vurgu
- **Gold:** yalnızca logo amblemindeki tek bir noktada kullanılır (`#B39A67`), abartılmamıştır

Başlıklar için **Playfair Display**, gövde/arayüz metni için **Plus Jakarta Sans** kullanılır (`next/font/google`, `latin` + `latin-ext` alt kümesiyle Türkçe karakter desteği sağlanır).
