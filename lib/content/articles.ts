/**
 * Articles are a supporting SEO/topical-relevance layer, not the core
 * product. Each is tied to a real practice area and written responsibly —
 * no fabricated legal outcomes or invented statistics.
 */

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  practiceAreaSlug: string;
  publishedAt: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "istanbulda-ceza-avukati-secerken-nelere-dikkat-edilmeli",
    title: "İstanbul'da Ceza Avukatı Seçerken Nelere Dikkat Edilmeli?",
    dek: "Ceza yargılamasında doğru zamanda doğru hukuki desteği almak, sürecin seyrini doğrudan etkiler.",
    practiceAreaSlug: "ceza-hukuku",
    publishedAt: "2025-03-10",
    sections: [
      {
        paragraphs: [
          "Ceza yargılaması, kişinin temel hak ve özgürlüklerini yakından ilgilendiren bir süreçtir. Bu nedenle sürecin başından itibaren doğru hukuki desteği almak büyük önem taşır.",
        ],
      },
      {
        heading: "Sürecin zamanlaması önemlidir",
        paragraphs: [
          "Soruşturma aşamasında, ifade vermeden önce bir avukatla görüşülmesi, kişinin haklarını daha iyi anlayabilmesi açısından faydalıdır.",
          "Kovuşturma aşamasına geçildiğinde ise dosyanın detaylı biçimde incelenmiş olması, savunmanın sağlıklı şekilde hazırlanabilmesi için gereklidir.",
        ],
      },
      {
        heading: "Şeffaf iletişim",
        paragraphs: [
          "Sürecin her aşamasında müvekkilin bilgilendirilmesi ve atılacak adımların açıkça anlatılması, güven ilişkisinin temelini oluşturur.",
        ],
      },
    ],
  },
  {
    slug: "ceza-sorusturmasi-surecinde-avukatin-rolu",
    title: "Ceza Soruşturması Sürecinde Avukatın Rolü",
    dek: "Soruşturma aşaması, ceza yargılamasının en kritik evrelerinden biridir.",
    practiceAreaSlug: "ceza-hukuku",
    publishedAt: "2025-04-02",
    sections: [
      {
        paragraphs: [
          "Ceza Muhakemesi Kanunu uyarınca şüpheli, soruşturma aşamasında avukat yardımından faydalanma hakkına sahiptir.",
        ],
      },
      {
        heading: "İfade aşamasında hukuki destek",
        paragraphs: [
          "Avukat, ifade sırasında şüphelinin haklarının korunmasını gözetir ve sürecin usule uygun yürütülmesini takip eder.",
        ],
      },
      {
        heading: "Delillerin değerlendirilmesi",
        paragraphs: [
          "Soruşturma dosyasındaki delillerin hukuka uygunluğunun incelenmesi, savunmanın sağlıklı kurgulanabilmesi için önemlidir.",
        ],
      },
    ],
  },
  {
    slug: "is-hukukunda-isci-ve-isveren-arasindaki-uyusmazliklar",
    title: "İş Hukukunda İşçi ve İşveren Arasındaki Uyuşmazlıklar",
    dek: "İş ilişkisinden doğan uyuşmazlıklarda her iki taraf için de bilinmesi gereken temel noktalar.",
    practiceAreaSlug: "is-hukuku",
    publishedAt: "2025-02-18",
    sections: [
      {
        paragraphs: [
          "İş Kanunu, işçi ve işveren arasındaki ilişkiyi düzenlerken her iki tarafın da hak ve yükümlülüklerini belirler.",
        ],
      },
      {
        heading: "Sık karşılaşılan uyuşmazlık konuları",
        paragraphs: [
          "İşe iade, kıdem ve ihbar tazminatı, fazla mesai alacakları ile hizmet tespiti, iş hukuku uyuşmazlıklarında sıkça karşılaşılan konular arasındadır.",
        ],
      },
      {
        heading: "Arabuluculuk dava şartı",
        paragraphs: [
          "Birçok iş hukuku uyuşmazlığında dava açmadan önce arabuluculuğa başvurulması yasal bir zorunluluktur.",
        ],
      },
    ],
  },
  {
    slug: "ticari-uyusmazliklarda-hukuki-surec",
    title: "Ticari Uyuşmazlıklarda Hukuki Süreç",
    dek: "Şirketler arası uyuşmazlıklarda izlenmesi gereken temel adımlar.",
    practiceAreaSlug: "ticaret-hukuku",
    publishedAt: "2025-05-12",
    sections: [
      {
        paragraphs: [
          "Ticari ilişkiler, sözleşmelere dayalı olarak yürür ve uyuşmazlık halinde bu sözleşmelerin doğru yorumlanması belirleyici olur.",
        ],
      },
      {
        heading: "Sözleşmenin incelenmesi",
        paragraphs: [
          "Uyuşmazlığın çözümüne yönelik ilk adım, taraflar arasındaki sözleşme ve ticari yazışmaların detaylı biçimde incelenmesidir.",
        ],
      },
      {
        heading: "Çözüm yollarının değerlendirilmesi",
        paragraphs: [
          "Dava süreci başlatılmadan önce, uyuşmazlığın niteliğine göre alternatif çözüm yollarının değerlendirilmesi zaman ve maliyet açısından fayda sağlayabilir.",
        ],
      },
    ],
  },
  {
    slug: "icra-takibine-itiraz-sureci",
    title: "İcra Takibine İtiraz Süreci",
    dek: "Haksız bir icra takibiyle karşılaşan borçlunun izleyebileceği hukuki yol.",
    practiceAreaSlug: "icra-iflas-hukuku",
    publishedAt: "2025-06-20",
    sections: [
      {
        paragraphs: [
          "İcra takibine muhatap olan borçlunun, takibe karşı yasal süreler içinde itiraz etme hakkı bulunmaktadır.",
        ],
      },
      {
        heading: "İtiraz süresi",
        paragraphs: [
          "Ödeme emrinin tebliğinden itibaren işlemeye başlayan itiraz süresine dikkat edilmesi, hak kaybı yaşanmaması açısından önemlidir.",
        ],
      },
      {
        heading: "İtirazın sonuçları",
        paragraphs: [
          "Süresinde yapılan itiraz, takibi durdurur; alacaklının takibe devam edebilmesi için itirazın iptali veya kaldırılması yoluna başvurması gerekir.",
        ],
      },
    ],
  },
  {
    slug: "bosanma-surecinde-velayet-ve-nafaka",
    title: "Boşanma Sürecinde Velayet ve Nafaka Konuları",
    dek: "Boşanma davalarında çocuğun velayeti ve nafaka talepleri en çok merak edilen konular arasındadır.",
    practiceAreaSlug: "aile-hukuku",
    publishedAt: "2025-07-05",
    sections: [
      {
        paragraphs: [
          "Boşanma sürecinde, varsa müşterek çocuğun velayeti ve nafaka talepleri, sürecin en hassas konularından biridir.",
        ],
      },
      {
        heading: "Velayette gözetilen ölçüt",
        paragraphs: [
          "Velayet düzenlemesinde temel ölçüt, çocuğun üstün yararının korunmasıdır.",
        ],
      },
      {
        heading: "Nafaka türleri",
        paragraphs: [
          "Boşanma sürecinde tedbir nafakası, yoksulluk nafakası ve iştirak nafakası gibi farklı nafaka türleri gündeme gelebilir.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByPracticeArea(practiceAreaSlug: string): Article[] {
  return articles.filter((article) => article.practiceAreaSlug === practiceAreaSlug);
}
