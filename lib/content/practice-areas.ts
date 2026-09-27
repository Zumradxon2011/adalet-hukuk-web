/**
 * Practice areas mirror the approved design (12 departments, each grounded
 * in one of the firm's 12 referenced statutes) and genuine client search
 * intent — see project instructions section 5 and 9. Card copy describes
 * service SCOPE only; it must never assert specific unverified outcomes,
 * credentials, or statistics about the firm.
 */

export type Legislation = {
  name: string;
  number: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SubService = {
  title: string;
  description: string;
};

export type PracticeArea = {
  slug: string;
  categoryNumber: string;
  categoryLabel: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  focusTags: string[];
  intro: string[];
  subServices: SubService[];
  relatedLegislation: Legislation[];
  faq: FaqItem[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "medeni-hukuk",
    categoryNumber: "01",
    categoryLabel: "ÖZEL HUKUK",
    title: "Medeni Hukuk",
    shortTitle: "Medeni Hukuk",
    metaTitle: "Medeni Hukuk | Adalet Hukuk İstanbul",
    metaDescription:
      "Boşanma, velayet, miras paylaşımı ve kişiler hukuku süreçlerinde İstanbul'da hukuki danışmanlık ve dava takibi.",
    shortDescription:
      "Aile birliği, boşanma, miras paylaşımı ve kişiler hukuku süreçlerinde hukuki temsil.",
    focusTags: ["Boşanma & Aile", "Miras Paylaşımı", "Vasiyetname", "Kişiler Hukuku"],
    intro: [
      "Medeni hukuk, bireylerin aile, miras ve kişilik haklarına ilişkin en temel ilişkilerini düzenler. Adalet Hukuk, bu alandaki uyuşmazlıklarda müvekkillerine anlayışlı ve kararlı bir hukuki temsil sunar.",
    ],
    subServices: [
      {
        title: "Boşanma ve Aile Uyuşmazlıkları",
        description: "Anlaşmalı ve çekişmeli boşanma, velayet ve nafaka süreçlerinde temsil.",
      },
      {
        title: "Miras Paylaşımı",
        description: "Miras taksimi, tenkis ve vasiyetname ihtilaflarında danışmanlık.",
      },
      {
        title: "Kişiler Hukuku",
        description: "Vesayet, kısıtlılık ve kişilik haklarına ilişkin süreçlerde destek.",
      },
      {
        title: "Mal Rejimi Uyuşmazlıkları",
        description: "Evlilik birliği içinde edinilen malların paylaşımına ilişkin danışmanlık.",
      },
    ],
    relatedLegislation: [{ name: "Türk Medeni Kanunu", number: "4721" }],
    faq: [
      {
        question: "Anlaşmalı boşanma için hangi şartlar aranır?",
        answer:
          "Anlaşmalı boşanmada tarafların evliliğin en az bir yıl sürmüş olması ve boşanmanın mali sonuçları ile varsa çocukların durumu konusunda anlaşmış olmaları gerekir.",
      },
    ],
  },
  {
    slug: "borclar-hukuku",
    categoryNumber: "02",
    categoryLabel: "AKİTLER",
    title: "Borçlar Hukuku",
    shortTitle: "Borçlar Hukuku",
    metaTitle: "Borçlar Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Sözleşme müzakereleri, tazminat talepleri ve alacak davalarında İstanbul'da hukuki danışmanlık.",
    shortDescription:
      "Sözleşme müzakereleri, haksız fiil sorumluluğu ve tazminat ile alacak davalarının takibi.",
    focusTags: ["Sözleşmelerin Hazırlanması", "Tazminat Davaları", "Alacak Takibi"],
    intro: [
      "Bireyler ve şirketler arasındaki ilişkilerin büyük bölümü bir sözleşme veya borç ilişkisine dayanır. Adalet Hukuk, bu ilişkilerin sağlıklı kurulması ve doğabilecek uyuşmazlıkların çözümü konusunda destek verir.",
    ],
    subServices: [
      {
        title: "Sözleşme Müzakeresi ve Hazırlığı",
        description: "Tarafların menfaatini koruyacak şekilde sözleşme metinlerinin hazırlanması.",
      },
      {
        title: "Haksız Fiil ve Tazminat",
        description: "Kusura dayalı sorumluluk ve maddi-manevi tazminat taleplerinin takibi.",
      },
      {
        title: "Alacak Davaları",
        description: "Borcun ifa edilmemesinden doğan alacakların dava veya takip yoluyla tahsili.",
      },
      {
        title: "Kira Uyuşmazlıkları",
        description: "Kira sözleşmelerinden doğan tahliye ve alacak uyuşmazlıklarında destek.",
      },
    ],
    relatedLegislation: [
      { name: "Türk Borçlar Kanunu", number: "6098" },
      { name: "Türk Medeni Kanunu", number: "4721" },
    ],
    faq: [],
  },
  {
    slug: "ticaret-hukuku",
    categoryNumber: "03",
    categoryLabel: "KORPORATİF",
    title: "Ticaret Hukuku",
    shortTitle: "Ticaret Hukuku",
    metaTitle: "Ticaret Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Şirketler hukuku, ortaklık sözleşmeleri ve ticari uyuşmazlıklarda İstanbul'da kurumsal hukuki danışmanlık.",
    shortDescription:
      "Şirket kuruluşları, ortaklık sözleşmeleri, genel kurul süreçleri ve ticari ortaklık uyuşmazlıkları.",
    focusTags: ["Şirketler Hukuku", "Ortaklık Sözleşmeleri", "Genel Kurul Yönetimi", "Haksız Rekabet"],
    intro: [
      "Ticari hayatın gerektirdiği hız ve güvenlik, sağlam bir hukuki altyapı ile mümkündür. Adalet Hukuk, şirketlere ve girişimcilere ticaret hukuku alanında danışmanlık ve dava takibi hizmeti sunar.",
    ],
    subServices: [
      {
        title: "Şirket Kuruluşu ve Ortaklık Yapıları",
        description: "Şirket kuruluşu, pay devri ve ortaklar arası sözleşmelerde danışmanlık.",
      },
      {
        title: "Genel Kurul ve Yönetim Uyuşmazlıkları",
        description: "Genel kurul kararlarının iptali ve yönetim organı uyuşmazlıklarında temsil.",
      },
      {
        title: "Ticari Alacak ve Sözleşme Uyuşmazlıkları",
        description: "Ticari sözleşmelerden doğan alacak ve tazminat taleplerinin takibi.",
      },
      {
        title: "Haksız Rekabet",
        description: "Haksız rekabet iddialarına karşı savunma ve dava süreçlerinin yürütülmesi.",
      },
    ],
    relatedLegislation: [
      { name: "Türk Ticaret Kanunu", number: "6102" },
      { name: "Türk Borçlar Kanunu", number: "6098" },
    ],
    faq: [],
  },
  {
    slug: "ceza-hukuku",
    categoryNumber: "04",
    categoryLabel: "KAMUSAL MÜDAFAA",
    title: "Ceza Hukuku",
    shortTitle: "Ceza Hukuku",
    metaTitle: "Ceza Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Adalet Hukuk, İstanbul'da soruşturma ve kovuşturma aşamalarında ceza hukuku danışmanlığı ve savunma temsili sunar.",
    shortDescription:
      "Ağır ceza yargılamaları, ekonomik suçlar ve soruşturma safhasında hukuki temsil.",
    focusTags: ["Soruşturma & İfade", "Ağır Ceza Savunması", "Savunma Stratejisi", "Tutukluluğa İtiraz"],
    intro: [
      "Ceza yargılaması, bireylerin temel hak ve özgürlüklerini doğrudan etkileyen bir süreçtir. Adalet Hukuk, İstanbul'da soruşturma aşamasından yargılamanın sonuna kadar şüpheli, sanık veya mağdur sıfatıyla taraflara hukuki destek sağlar.",
      "Sürecin her aşamasında zamanında ve doğru hukuki adımların atılması, tarafların haklarının korunması açısından belirleyicidir.",
    ],
    subServices: [
      {
        title: "Ağır Ceza Davaları",
        description: "Ağır Ceza Mahkemeleri nezdinde soruşturma ve kovuşturma safhasında savunma.",
      },
      {
        title: "Asliye Ceza Davaları",
        description: "Asliye Ceza Mahkemeleri nezdinde sanık veya mağdur vekilliği.",
      },
      {
        title: "Soruşturma ve İfade Süreçleri",
        description: "Kolluk ve savcılık ifade işlemlerinde şüpheli müdafiliği.",
      },
      {
        title: "Tutukluluğa ve Adli Kontrole İtiraz",
        description: "Gözaltı, tutukluluk ve adli kontrol kararlarına karşı itiraz süreçleri.",
      },
    ],
    relatedLegislation: [
      { name: "Türk Ceza Kanunu", number: "5237" },
      { name: "Ceza Muhakemesi Kanunu", number: "5271" },
    ],
    faq: [
      {
        question: "Soruşturma aşamasında avukat ne zaman devreye girmeli?",
        answer:
          "Şüpheli sıfatının ortaya çıktığı ilk andan itibaren, ifade öncesinde bir avukatla iletişime geçilmesi haklarınızın korunması açısından önemlidir.",
      },
      {
        question: "Mağdur olarak da hukuki destek alınabilir mi?",
        answer:
          "Evet. Adalet Hukuk, şikayetçi veya mağdur sıfatıyla sürece dahil olan taraflara da vekillik hizmeti sunar.",
      },
    ],
  },
  {
    slug: "ceza-muhakemesi-hukuku",
    categoryNumber: "05",
    categoryLabel: "USUL & KORUMA",
    title: "Ceza Muhakemesi",
    shortTitle: "Ceza Muhakemesi",
    metaTitle: "Ceza Muhakemesi Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Gözaltı, tutukluluk, adli kontrol ve kanun yolu başvurularında ceza usul hukuku danışmanlığı.",
    shortDescription:
      "Gözaltı, adli kontrol süreçleri ile istinaf ve temyiz başvurularında usul hukuku desteği.",
    focusTags: ["Gözaltı & İfade", "Adli Kontrol", "İstinaf-Temyiz"],
    intro: [
      "Ceza yargılamasının usule uygun yürütülmesi, sonucun adilliği kadar önemlidir. Adalet Hukuk, soruşturma ve kovuşturmanın her usul aşamasında sürecin doğru işlemesini takip eder.",
    ],
    subServices: [
      {
        title: "Gözaltı ve İfade İşlemleri",
        description: "Kolluk ve savcılık ifade süreçlerinde usule uygunluğun takibi.",
      },
      {
        title: "Adli Kontrol Süreçleri",
        description: "Adli kontrol tedbirlerine itiraz ve kaldırılması taleplerinin takibi.",
      },
      {
        title: "İstinaf ve Temyiz Başvuruları",
        description: "Bölge Adliye Mahkemesi ve Yargıtay nezdinde kanun yolu başvuruları.",
      },
    ],
    relatedLegislation: [
      { name: "Ceza Muhakemesi Kanunu", number: "5271" },
      { name: "Türk Ceza Kanunu", number: "5237" },
    ],
    faq: [
      {
        question: "Gözaltı süresi ne kadardır?",
        answer:
          "Ceza Muhakemesi Kanunu'na göre gözaltı süresi kural olarak 24 saati geçemez. Toplu olarak işlenen suçlarda bu süre, cumhuriyet savcısının yazılı emriyle her defasında bir günü geçmemek üzere uzatılabilir; somut duruma göre değerlendirme yapılması önemlidir.",
      },
    ],
  },
  {
    slug: "hukuk-muhakemeleri",
    categoryNumber: "06",
    categoryLabel: "YARGI PRATİĞİ",
    title: "Hukuk Muhakemeleri",
    shortTitle: "Hukuk Muhakemeleri",
    metaTitle: "Hukuk Muhakemeleri | Adalet Hukuk İstanbul",
    metaDescription:
      "Asliye ve Sulh Hukuk uyuşmazlıklarında dava usulü, ihtiyati tedbir ve delil tespiti süreçlerinde destek.",
    shortDescription:
      "Asliye ve Sulh Hukuk uyuşmazlıkları, ihtiyati tedbir ve delil tespiti süreçlerinin yönetimi.",
    focusTags: ["Dava Usulü", "İhtiyati Tedbir", "Delil Tespiti"],
    intro: [
      "Bir uyuşmazlığın mahkeme önünde doğru şekilde yönetilmesi, usul hukukuna hakimiyet gerektirir. Adalet Hukuk, dava sürecinin her aşamasında usule uygun ve stratejik bir yaklaşım benimser.",
    ],
    subServices: [
      {
        title: "Dava Sürecinin Yönetimi",
        description: "Asliye ve Sulh Hukuk Mahkemeleri nezdinde dava takibi.",
      },
      {
        title: "İhtiyati Tedbir Talepleri",
        description: "Hak kaybının önlenmesi için ihtiyati tedbir başvurularının hazırlanması.",
      },
      {
        title: "Delil Tespiti",
        description: "Delillerin ileride kaybolma ihtimaline karşı tespiti işlemleri.",
      },
    ],
    relatedLegislation: [{ name: "Hukuk Muhakemeleri Kanunu", number: "6100" }],
    faq: [],
  },
  {
    slug: "icra-iflas-hukuku",
    categoryNumber: "07",
    categoryLabel: "TAHSİLAT & LİKİDİTE",
    title: "İcra ve İflas Hukuku",
    shortTitle: "İcra ve İflas Hukuku",
    metaTitle: "İcra ve İflas Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Alacakların takibi, icra takibine itiraz ve iflas süreçlerinde İstanbul'da hukuki temsil.",
    shortDescription: "Alacak takibi, icra takibine itiraz, konkordato ve iflas süreçlerinde temsil.",
    focusTags: ["Alacak Takibi", "İtirazın İptali", "Konkordato"],
    intro: [
      "Alacağın tahsili veya haksız bir icra takibine karşı savunma, doğru ve zamanında atılan hukuki adımlar gerektirir. Adalet Hukuk, alacaklı ve borçlu taraflara icra ve iflas hukuku alanında destek verir.",
    ],
    subServices: [
      {
        title: "İlamlı ve İlamsız İcra Takipleri",
        description: "Alacağın niteliğine uygun icra takibinin başlatılması ve yürütülmesi.",
      },
      {
        title: "İcra Takibine İtiraz",
        description: "Haksız takiplere karşı itiraz ve itirazın iptali süreçlerinde temsil.",
      },
      {
        title: "Konkordato ve Yeniden Yapılandırma",
        description: "Mali sıkıntı içindeki şirketler için konkordato sürecinde danışmanlık.",
      },
    ],
    relatedLegislation: [
      { name: "İcra ve İflas Kanunu", number: "2004" },
      { name: "Hukuk Muhakemeleri Kanunu", number: "6100" },
    ],
    faq: [
      {
        question: "İcra takibine itiraz için süre ne kadar?",
        answer:
          "İtiraz süreleri takibin türüne göre değişiklik gösterir; ödeme emrinin tebliğinden itibaren yasal süre içinde itiraz edilmesi gerekir. Somut duruma göre değerlendirme yapılması önemlidir.",
      },
    ],
  },
  {
    slug: "idare-hukuku",
    categoryNumber: "08",
    categoryLabel: "KAMU DENETİMİ",
    title: "İdare Hukuku",
    shortTitle: "İdare Hukuku",
    metaTitle: "İdare Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "İdari işlemlere karşı iptal davaları ve idare ile olan uyuşmazlıklarda İstanbul'da hukuki temsil.",
    shortDescription: "İdari işlemlere karşı iptal ve tam yargı davaları, imar mevzuatı uyuşmazlıkları.",
    focusTags: ["İptal Davaları", "Tam Yargı Davaları", "İmar Uyuşmazlıkları"],
    intro: [
      "Kamu kurumlarının işlem ve eylemlerinden etkilenen bireyler ve şirketler, idare hukuku çerçevesinde haklarını arayabilir. Adalet Hukuk bu süreçlerde idari yargı önünde temsil sağlar.",
    ],
    subServices: [
      {
        title: "İptal Davaları",
        description: "Hukuka aykırı idari işlemlerin iptali için dava açılması ve takibi.",
      },
      {
        title: "Tam Yargı Davaları",
        description: "İdarenin işlem veya eyleminden doğan zararların tazmini talepleri.",
      },
      {
        title: "İmar ve Ruhsat Uyuşmazlıkları",
        description: "İmar planları ve ruhsat işlemlerinden doğan uyuşmazlıklarda danışmanlık.",
      },
    ],
    relatedLegislation: [{ name: "İdari Yargılama Usulü Kanunu", number: "2577" }],
    faq: [],
  },
  {
    slug: "is-hukuku",
    categoryNumber: "09",
    categoryLabel: "ÇALIŞMA YAŞAMI",
    title: "İş Hukuku",
    shortTitle: "İş Hukuku",
    metaTitle: "İş Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "İşçi ve işveren uyuşmazlıklarında, iş sözleşmelerinde ve kıdem/ihbar tazminatı süreçlerinde İstanbul'da hukuki destek.",
    shortDescription: "İşe iade, kıdem-ihbar tazminatı, hizmet tespiti ve iş sözleşmesi uyuşmazlıkları.",
    focusTags: ["İşe İade", "Tazminat Davaları", "Hizmet Tespiti"],
    intro: [
      "İş ilişkisinden doğan uyuşmazlıklar hem çalışanlar hem de işverenler için önemli sonuçlar doğurabilir. Adalet Hukuk, İstanbul'da her iki tarafa da danışmanlık ve dava takibi hizmeti sunar.",
    ],
    subServices: [
      {
        title: "İşe İade Davaları",
        description: "Haksız fesih iddialarında işe iade sürecinin yürütülmesi.",
      },
      {
        title: "Kıdem ve İhbar Tazminatı",
        description: "Tazminat alacaklarının hesaplanması ve tahsili sürecinde temsil.",
      },
      {
        title: "Hizmet Tespiti ve Fazla Mesai",
        description: "Sigortasız çalışma ve fazla mesai alacaklarının tespiti davaları.",
      },
      {
        title: "İş Sözleşmelerinin Hazırlanması",
        description: "İşveren tarafı için iş sözleşmesi ve şirket içi politikaların hazırlanması.",
      },
    ],
    relatedLegislation: [
      { name: "İş Kanunu", number: "4857" },
      { name: "Türk Borçlar Kanunu", number: "6098" },
    ],
    faq: [
      {
        question: "İşe iade davası açmadan önce arabuluculuğa başvurmak zorunlu mu?",
        answer:
          "Evet, iş hukukundan doğan birçok uyuşmazlıkta dava şartı olarak önce arabuluculuğa başvurulması gerekmektedir.",
      },
    ],
  },
  {
    slug: "vergi-hukuku",
    categoryNumber: "10",
    categoryLabel: "MALİ DAVA",
    title: "Vergi Hukuku",
    shortTitle: "Vergi Hukuku",
    metaTitle: "Vergi Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Vergi cezalarına itiraz, vergi uyuşmazlıkları ve vergi incelemesi süreçlerinde İstanbul'da hukuki danışmanlık.",
    shortDescription: "Vergi inceleme raporlarına itiraz, uzlaşma süreçleri ve Vergi Mahkemesi'nde savunma.",
    focusTags: ["Tarhiyata İtiraz", "Uzlaşma Süreci", "Vergi Davaları"],
    intro: [
      "Vergi mevzuatından doğan uyuşmazlıklar, hem bireyler hem de şirketler için önemli mali sonuçlar doğurabilir. Adalet Hukuk, vergi incelemesi ve tarhiyat süreçlerinde hukuki destek sunar.",
    ],
    subServices: [
      {
        title: "Vergi Cezalarına İtiraz",
        description: "Vergi inceleme raporları ve ceza ihbarnamelerine karşı itiraz süreçleri.",
      },
      {
        title: "Uzlaşma Başvuruları",
        description: "Uzlaşma komisyonu süreçlerinde müvekkil temsili.",
      },
      {
        title: "Vergi Mahkemesinde Dava Takibi",
        description: "Vergi ve ceza tarhiyatlarına karşı dava açılması ve takibi.",
      },
    ],
    relatedLegislation: [
      { name: "Vergi Usul Kanunu", number: "213" },
      { name: "İdari Yargılama Usulü Kanunu", number: "2577" },
    ],
    faq: [],
  },
  {
    slug: "gumruk-hukuku",
    categoryNumber: "11",
    categoryLabel: "DIŞ TİCARET & REGÜLASYON",
    title: "Gümrük Hukuku",
    shortTitle: "Gümrük Hukuku",
    metaTitle: "Gümrük Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "İthalat-ihracat işlemleri ve gümrük uyuşmazlıklarında İstanbul'da hukuki danışmanlık ve temsil.",
    shortDescription: "Gümrük vergisi, ek tahakkuk itirazları ve ithalat-ihracat mevzuatı danışmanlığı.",
    focusTags: ["Gümrük Cezalarına İtiraz", "İthalat-İhracat Danışmanlığı"],
    intro: [
      "Dış ticaretle uğraşan şirketler, gümrük mevzuatından kaynaklanan çeşitli hukuki risklerle karşılaşabilir. Adalet Hukuk, gümrük idareleriyle yaşanan uyuşmazlıklarda danışmanlık ve temsil hizmeti verir.",
    ],
    subServices: [
      {
        title: "Gümrük Cezalarına İtiraz",
        description: "Gümrük vergisi ve ek tahakkuk kararlarına karşı itiraz süreçleri.",
      },
      {
        title: "İthalat-İhracat Danışmanlığı",
        description: "Dış ticaret işlemlerine ilişkin mevzuat uyum danışmanlığı.",
      },
    ],
    relatedLegislation: [{ name: "Gümrük Kanunu", number: "4458" }],
    faq: [],
  },
  {
    slug: "infaz-hukuku",
    categoryNumber: "12",
    categoryLabel: "CEZA VE TEDBİR",
    title: "İnfaz Hukuku",
    shortTitle: "İnfaz Hukuku",
    metaTitle: "İnfaz Hukuku | Adalet Hukuk İstanbul",
    metaDescription:
      "Koşullu salıverilme, denetimli serbestlik ve infaz hesaplamalarına ilişkin başvurularda hukuki destek.",
    shortDescription: "Koşullu salıverilme, denetimli serbestlik ve infaz hesaplamalarına ilişkin başvurular.",
    focusTags: ["Koşullu Salıverilme", "Denetimli Serbestlik", "İnfaz Hakimliği İtirazı"],
    intro: [
      "Kesinleşen mahkumiyet kararlarının infazı sürecinde de hak kayıplarının önlenmesi mümkündür. Adalet Hukuk, infaz hesaplamaları ve ilgili başvuru süreçlerinde destek sunar.",
    ],
    subServices: [
      {
        title: "Koşullu Salıverilme Başvuruları",
        description: "Koşullu salıverilme şartlarının değerlendirilmesi ve başvuru süreci.",
      },
      {
        title: "Denetimli Serbestlik",
        description: "Denetimli serbestlik tedbirine ilişkin süreçlerin takibi.",
      },
      {
        title: "İnfaz Hakimliğine İtiraz",
        description: "İnfazla ilgili kararlara karşı infaz hakimliği nezdinde itiraz.",
      },
    ],
    relatedLegislation: [
      { name: "Ceza ve Güvenlik Tedbirlerinin İnfazı Hakkında Kanun", number: "5275" },
    ],
    faq: [],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
