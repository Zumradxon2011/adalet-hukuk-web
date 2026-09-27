const steps = [
  {
    number: "01",
    title: "Başlangıç Değerlendirmesi",
    caption: "Dosya ve bilgi incelemesi ile hukuki durumun netleştirilmesi.",
  },
  {
    number: "02",
    title: "Strateji ve Hazırlık",
    caption: "Somut duruma uygun hukuki strateji ve savunma/talep planının oluşturulması.",
  },
  {
    number: "03",
    title: "Süreç Takibi ve Temsil",
    caption: "Duruşma, müzakere veya idari süreçlerde aktif temsil.",
  },
  {
    number: "04",
    title: "Sonuç ve Sonraki Adımlar",
    caption: "Kararın değerlendirilmesi ve gerekirse kanun yolu adımlarının planlanması.",
  },
];

export function MethodologySection() {
  return (
    <section className="bg-surface-alt py-16 md:py-20">
      <div className="container-page">
        <p className="eyebrow">Metodoloji &amp; Disiplin</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-4xl">
          Hukuki ve Stratejik Sürecimiz
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-heading text-3xl font-semibold text-stone">{step.number}</p>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
