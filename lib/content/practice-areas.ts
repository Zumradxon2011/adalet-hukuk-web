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
    metaTitle: "Medeni Hukuk Avukatı İstanbul",
    metaDescription:
      "Boşanma, velayet, miras paylaşımı ve kişiler hukuku süreçlerinde İstanbul'da hukuki danışmanlık ve dava takibi.",
    shortDescription:
      "Aile birliği, boşanma, miras paylaşımı ve kişiler hukuku süreçlerinde hukuki temsil.",
    focusTags: ["Boşanma & Aile", "Miras Paylaşımı", "Vasiyetname", "Kişiler Hukuku"],
    intro: [
      "Medeni hukuk, bireylerin aile, miras ve kişilik haklarına ilişkin en temel ilişkilerini düzenler. Adalet Hukuk, bu alandaki uyuşmazlıklarda müvekkillerine anlayışlı ve kararlı bir hukuki temsil sunar.",
      "Alan; kişiye bağlı haklar, aile hukuku, miras hukuku ve eşya hukuku gibi birbirini tamamlayan başlıkları kapsar. Evlilik, velayet, nafaka, miras paylaşımı ve taşınmazla ilgili uyuşmazlıklar, gündelik yaşamın en sık karşılaşılan hukuki başlıklarındandır. Türk Medeni Kanunu bu ilişkilerin temel çerçevesini çizer; somut olayın koşulları ise her dosyada ayrı bir değerlendirme gerektirir.",
      "Aile hukuku kapsamında anlaşmalı ve çekişmeli boşanma süreçleri, velayet düzenlemeleri, kişisel ilişkinin kurulması ve nafaka talepleri ele alınır. Mahkeme, çocukların üstün yararını gözeterek karar verir; tarafların bu süreçte yapıcı tutumu, hem çocukların uyumu hem de kararın uygulanabilirliği açısından belirleyicidir. Nafaka miktarının ve kişisel ilişkinin ayrıntılı biçimde düzenlenmesi, karar sonrası uyuşmazlıkların da azalmasını sağlar.",
      "Miras hukukunda ise mirasın paylaşımı, tenkis davaları ve vasiyetnameye ilişkin itirazlar sıkça gündeme gelir. Miras bırakanın tasarruf yetkisinin sınırları, saklı pay kuralları ve mirasçılık sıfatı gibi konular birlikte değerlendirilir. Yazılı belgelerin ve aile ilişkilerine dair kayıtların zamanında toplanması, uyuşmazlıkların daha sağlıklı sonuçlanmasına katkı sağlar. Paylaşma sürecinin şeffaf yürütülmesi, aile içindeki gerilimi de azaltır.",
      "Kişiler hukuku ve mal rejimi uyuşmazlıklarında da aynı titizlik gerekir. Vesayet, kısıtlılık ve kişilik haklarının korunmasına ilişkin başvurular ile evlilik birliğinde edinilen malların paylaşımı, ayrıntılı bir hukuki değerlendirmeyle yürütülür. Tarafların beklentilerinin baştan netleştirilmesi, sürecin öngörülebilir ilerlemesini ve gereksiz anlaşmazlıkların önlenmesini sağlar.",
      "Süreç boyunca delillerin hazır bulundurulması, usul sürelerinin takibi ve doğru mercie zamanında başvuru yapılması hakların korunması açısından vazgeçilmezdir. Adalet Hukuk, müvekkillerine her aşamada açık bilgilendirme sunar; dosyanın seyri, olası seçenekler ve gündeme gelebilecek maliyetler baştan itibaren şeffaf biçimde paylaşılır.",
      "Aile ve kişisel ilişkilerin hukuki çerçevede çözülmesi, yalnızca bugünkü uyuşmazlığı değil, ileride doğabilecek sorunları da azaltır. Erken aşamada alınacak profesyonel destek, hak kayıplarını önler ve tarafların daha güvenli bir düzene kavuşmasına yardımcı olur.",
      "Medeni hukuk uyuşmazlıklarında tarafların birbirini dinlemesi ve çocukların durumunu öne alması, sürecin daha az yıpratıcı ilerlemesini sağlar. Anlaşmazlığın hukuki çerçevede çözülmesi, aile içi güvenin korunmasına da katkı yapar. Bu nedenle dava, yalnızca son çare olarak değil, hakların net biçimde belirlenmesi için bir araç olarak görülmelidir.",
      "Sürecin her aşamasında müvekkilin ne bekleyebileceği, hangi belgelerin gerektiği ve yaklaşık ne kadar süreceği konusunda açık bilgi verilir. Dosyanın ilerleyişine dair düzenli paylaşım, belirsizliği azaltır ve tarafların karar alma sürecini kolaylaştırır. Adalet Hukuk, medeni hukuk dosyalarında bu şeffaflık ilkesini temel alır.",
      "Somut olayın özelliklerine göre farklı çözüm yolları gündeme gelebilir. Taraflar arası görüşme, yazılı anlaşma veya yargı yolu; hangisinin daha uygun olduğu dosyanın niteliğine göre belirlenir. Erken aşamada yapılan bu değerlendirme, sürenin ve maliyetin öngörülebilir olmasını sağlar.",
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
      {
        question: "Velayet kararı sonradan değiştirilebilir mi?",
        answer:
          "Çocuğun menfaatinde önemli değişiklik olması hâlinde velayetin yeniden düzenlenmesi talep edilebilir. Mahkeme, somut koşulları ve çocuğun üstün yararını değerlendirerek karar verir.",
      },
      {
        question: "Miras paylaşımında anlaşmazlık nasıl çözülür?",
        answer:
          "Mirasçılar anlaşamazsa miras taksimi davası açılabilir. Payların belirlenmesi, gerekli hâllerde malın taksimi veya satış yoluyla paylaşılması mahkeme tarafından değerlendirilir.",
      },
    ],
  },
  {
    slug: "borclar-hukuku",
    categoryNumber: "02",
    categoryLabel: "AKİTLER",
    title: "Borçlar Hukuku",
    shortTitle: "Borçlar Hukuku",
    metaTitle: "Borçlar Hukuku Avukatı İstanbul",
    metaDescription:
      "Sözleşme müzakereleri, tazminat talepleri ve alacak davalarında İstanbul'da hukuki danışmanlık.",
    shortDescription:
      "Sözleşme müzakereleri, haksız fiil sorumluluğu ve tazminat ile alacak davalarının takibi.",
    focusTags: ["Sözleşmelerin Hazırlanması", "Tazminat Davaları", "Alacak Takibi"],
    intro: [
      "Bireyler ve şirketler arasındaki ilişkilerin büyük bölümü bir sözleşme veya borç ilişkisine dayanır. Adalet Hukuk, bu ilişkilerin sağlıklı kurulması ve doğabilecek uyuşmazlıkların çözümü konusunda destek verir.",
      "Türk Borçlar Kanunu, sözleşmelerin kurulmasından sona ermesine kadar tarafların hak ve yükümlülüklerini; haksız fiillerde ise kusura dayalı sorumluluğun ölçütlerini düzenler. Bir borç ilişkisinin sağlam kurulması, uyuşmazlık çıktığında hangi şartların geçerli olacağını baştan belirler. Bu nedenle sözleşme aşamasındaki hukuki destek, dava aşamasındaki destek kadar değerlidir.",
      "Sözleşme müzakerelerinde tarafların menfaatlerinin dengeli biçimde korunması, ödeme, teslim, süre ve sorumluluk gibi temel hususların açıkça düzenlenmesi gerekir. Belirsiz bırakılan hükümler, ileride farklı yorumlara yol açabilir. Cezai şart, fesih koşulları ve uyuşmazlık çözüm yolu gibi başlıkların sözleşmede netleştirilmesi, olası ihtilafları baştan azaltır.",
      "Haksız fiil ve tazminat başlığı altında, kusurlu bir eylemden doğan maddi ve manevi zararların tazmini gündeme gelir. Zararın bağlantısı, miktarı ve ispatı ayrıntılı biçimde ele alınır. Somut olayın delilleri zamanla azalabileceği için olay yerine ilişkin kayıtların ve raporların derhâl toplanması hak kaybını önler.",
      "Alacak davalarında ise borcun ifa edilmemesinden doğan taleplerin süresi içinde ileri sürülmesi önem taşır. Alacağın varlığı, miktarı ve zamanaşımı durumu birlikte değerlendirilir. Erken aşamada yapılan yazılı uyarı ve ihtarname başvuruları, hem görüşmelerin ciddiyetini artırır hem de ileride delil niteliği taşır.",
      "Kira uyuşmazlıkları da borçlar hukukunun günlük yaşamda en sık karşılaşılan başlıklarındandır. Tahliye, kira bedelinin tespiti ve sözleşme koşullarına ilişkin uyuşmazlıklarda, tarafların yasal süreleri ve bildirim şartlarını doğru uygulaması gerekir. Adalet Hukuk, her aşamada müvekkilini bilgilendirir ve süreci usulüne uygun yürütür.",
      "Borçlar hukukunda her dosya, kendi koşulları içinde değerlendirilmelidir. Benzer görünen iki uyuşmazlığın sonuçları, delillerin ve tarafların iradesinin farklı olması nedeniyle ayrı noktalara ulaşabilir. Bu nedenle somut olayın baştan itibaren ayrıntılı incelenmesi, ancak genel hükümlerin somut olaya doğru şekilde yansıtılmasıyla mümkündür.",
      "Tarafların beklentilerinin gerçekçi biçimde belirlenmesi de sürecin verimli ilerlemesini sağlar. Uyuşmazlığın büyümeden, yazılı uyarı ve görüşme yoluyla çözülebildiği durumlar sık görülür. Dava yoluna başvurmadan önce bu seçeneklerin değerlendirilmesi, hem süre hem de maliyet açısından avantaj sağlayabilir.",
      "Adalet Hukuk, sözleşme hazırlığından dava takibine kadar borçlar hukukunun her başlığında müvekkillerine şeffaf ve planlı bir hizmet sunar. Dosyanın mevcut durumu, olası riskler ve sıradaki adımlar düzenli olarak paylaşılır; böylece müvekkil, süreci aktif biçimde takip edebilir.",
      "Borç ilişkilerinde güven, yazılı düzenlemelerle pekişir. Sözlü mutabakatların zamanla farklı yorumlara yol açtığı durumlar sık görülür; bu nedenle önemli hükümlerin yazılı hâle getirilmesi ve taraflarca imzalanması büyük önem taşır. Uyuşmazlık çıktığında ise delillerin bir arada değerlendirilmesi, sonucu büyük ölçüde belirler.",
      "Alacak ve tazminat davalarında, talebin miktarı kadar dayanağının da açık olması gerekir. Hesap yöntemlerinin ve kaynak belgelerin dosyada düzenli tutulması, mahkemenin işini kolaylaştırır. Adalet Hukuk, dosyayı bu titizlikle hazırlar ve müvekkili her aşamada bilgilendirir.",
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
    faq: [
      {
        question: "Sözleşmede yazılı şart yoksa hak talep edilebilir mi?",
        answer:
          "Somut olayın koşullarına göre sözlü mutabakatlar ve teamüller de değerlendirilebilir; ancak yazılı delil, ispat bakımından belirleyici olduğundan sözleşmelerin yazılı yapılması tavsiye edilir.",
      },
      {
        question: "Zamanaşımı süresi neye göre belirlenir?",
        answer:
          "Zamanaşımı süresi alacağın niteliğine ve ilgili mevzuata göre farklılık gösterir. Talebin türüne göre sürenin doğru hesaplanması için erken aşamada hukuki değerlendirme yaptırılması faydalıdır.",
      },
      {
        question: "Tazminat miktarı nasıl belirlenir?",
        answer:
          "Maddi zararda somut hesaplama esas alınır; manevi tazminatta ise olayın niteliği, tarafların durumu ve mahkemenin takdiri birlikte değerlendirilir. Her dosya kendi koşulları içinde incelenir.",
      },
    ],
  },
  {
    slug: "ticaret-hukuku",
    categoryNumber: "03",
    categoryLabel: "KORPORATİF",
    title: "Ticaret Hukuku",
    shortTitle: "Ticaret Hukuku",
    metaTitle: "Ticaret Hukuku Avukatı İstanbul",
    metaDescription:
      "Şirketler hukuku, ortaklık sözleşmeleri ve ticari uyuşmazlıklarda İstanbul'da kurumsal hukuki danışmanlık.",
    shortDescription:
      "Şirket kuruluşları, ortaklık sözleşmeleri, genel kurul süreçleri ve ticari ortaklık uyuşmazlıkları.",
    focusTags: ["Şirketler Hukuku", "Ortaklık Sözleşmeleri", "Genel Kurul Yönetimi", "Haksız Rekabet"],
    intro: [
      "Ticari hayatın gerektirdiği hız ve güvenlik, sağlam bir hukuki altyapı ile mümkündür. Adalet Hukuk, şirketlere ve girişimcilere ticaret hukuku alanında danışmanlık ve dava takibi hizmeti sunar.",
      "Türk Ticaret Kanunu; şirket kuruluşu, ortaklık yapıları, yönetim organları ve ticari işlemlerin çerçevesini çizer. Şirketlerin günlük faaliyetlerinde karşılaştığı hukuki soruların doğru yanıtlanması, yalnızca uyuşmazlıkların çözümünde değil, karar alma süreçlerinde de belirleyicidir. Kurumsal hukuki danışmanlık, riskleri baştan görünür kılar.",
      "Şirket kuruluşu ve pay devri aşamalarında, ortaklar arası ilişkilerin yazılı biçimde düzenlenmesi büyük önem taşır. Pay devri, kâr payı, yönetim ve çekilme gibi konularda açık hükümler, ileride doğabilecek anlaşmazlıkları büyük ölçüde azaltır. Sözleşmelerin yalnızca bugünkü değil, ortaklık yapısının ileride nasıl değişebileceğini öngörecek biçimde hazırlanması faydalıdır.",
      "Genel kurul ve yönetim uyuşmazlıklarında, kararların usulüne uygun alınıp alınmadığı, bilgilendirme yükümlülüklerinin yerine getirilip getirilmediği değerlendirilir. Ortakların bilgi alma hakkı ve kararlara itiraz yolları mevzuatta düzenlidir. Sürelerin kaçırılmadan takip edilmesi, hakların korunması açısından vazgeçilmezdir.",
      "Ticari alacak ve sözleşme uyuşmazlıklarında da yazılı delillerin ve ödeme kayıtlarının önemi büyüktür. Borcun türüne göre farklı takip ve dava yolları öngörülmüş olabilir; doğru yolun baştan belirlenmesi süreci hızlandırır. Gerektiğinde tahkim veya diğer alternatif çözüm yollarının da değerlendirilmesi mümkündür.",
      "Haksız rekabet iddiaları ise ticari hayatın hassas başlıklarındandır. Rekabetin hukuka uygun biçimde sürdürülmesi, hem firmaların itibarı hem de piyasa düzeni açısından önem taşır. İddiaların somut delillerle desteklenmesi ve süresi içinde ileri sürülmesi, değerlendirmenin sağlıklı yürütülmesini sağlar.",
      "Ticaret hukukunda bilgilendirme ve danışmanlık, yalnızca sorun çıktığında değil, karar alınırken de değerlidir. Yeni bir sözleşme imzalamadan önce, ortaklık yapısını değiştirmeden önce veya büyük bir alacak ilişkisine girmeden önce hukuki inceleme yaptırmak, ileride doğabilecek riskleri baştan görünür kılar.",
      "Şirket yönetiminde düzenli hukuki kontroller, mevzuat değişikliklerine uyum açısından da önem taşır. Ticari hayatın hızına ayak uydururken usul kurallarının ve sürelerin ihmal edilmemesi gerekir. Dosya ve sözleşme arşivinin düzenli tutulması, hem ispat hem de iş verimliliği bakımından faydalıdır.",
      "Adalet Hukuk, şirketlere yönelik hizmetlerinde yalnızca dava takibiyle sınırlı kalmaz; günlük karar alma süreçlerine de destek verir. Uyuşmazlık çıktığında ise delil, süre ve strateji ekseninde planlı bir yol haritası uygulanır. Sürecin her aşamasında müvekkil düzenli olarak bilgilendirilir.",
      "Ticari uyuşmazlıklarda tarafların birbirini dinlemesi ve uzlaşmaya açık olması, çoğu zaman daha hızlı bir çözüm sağlar. Mahkeme dışında yürütülen görüşmelerde varılan mutabakatlar yazılı hâle getirildiğinde, uygulanabilirliği de artar. Dava, bu görüşmeler sonuç vermediğinde başvurulan yasal bir güvencedir.",
      "Şirketlerin sözleşme ve ortaklık belgelerini düzenli arşivlemesi, hem günlük işleyişi kolaylaştırır hem de olası uyuşmazlıklarda ispat yükünü hafifletir. Adalet Hukuk, bu düzenin kurulmasına da katkı sağlar ve dosyanın her aşamasında müvekkilini bilgilendirir.",
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
    faq: [
      {
        question: "Ortaklar arası uyuşmazlıklar dava olmadan çözülebilir mi?",
        answer:
          "Ortakların sözleşmede öngördüğü çözüm yolları ve müzakere seçenekleri değerlendirilebilir. Anlaşma sağlanamazsa genel kurul kararlarının iptali veya ortaklık uyuşmazlıklarına ilişkin dava yolları gündeme gelir.",
      },
      {
        question: "Genel kurul kararına itiraz süresi nasıl işler?",
        answer:
          "Kararın öğrenildiği andan itibaren ilgili mevzuatta öngörülen süre içinde iptal davası açılabilir. Sürenin doğru hesaplanması için karar tarihi ve tebliğ bilgilerinin saklanması gerekir.",
      },
      {
        question: "Şirket kuruluşunda nelere dikkat edilmeli?",
        answer:
          "Ortaklık payları, yönetim yetkileri, kâr dağılımı ve çekilme şartlarının sözleşmede açıkça düzenlenmesi ilerideki uyuşmazlıkları azaltır. Kuruluş aşamasında hukuki inceleme yaptırmak uzun vadede sorunları önler.",
      },
    ],
  },
  {
    slug: "ceza-hukuku",
    categoryNumber: "04",
    categoryLabel: "KAMUSAL MÜDAFAA",
    title: "Ceza Hukuku",
    shortTitle: "Ceza Hukuku",
    metaTitle: "Ceza Hukuku Avukatı İstanbul",
    metaDescription:
      "Adalet Hukuk, İstanbul'da soruşturma ve kovuşturma aşamalarında ceza hukuku danışmanlığı ve savunma temsili sunar.",
    shortDescription:
      "Ağır ceza yargılamaları, ekonomik suçlar ve soruşturma safhasında hukuki temsil.",
    focusTags: ["Soruşturma & İfade", "Ağır Ceza Savunması", "Savunma Stratejisi", "Tutukluluğa İtiraz"],
    intro: [
      "Ceza yargılaması, bireylerin temel hak ve özgürlüklerini doğrudan etkileyen bir süreçtir. Adalet Hukuk, İstanbul'da soruşturma aşamasından yargılamanın sonuna kadar şüpheli, sanık veya mağdur sıfatıyla taraflara hukuki destek sağlar.",
      "Sürecin her aşamasında zamanında ve doğru hukuki adımların atılması, tarafların haklarının korunması açısından belirleyicidir. Soruşturma gizlilik içinde yürütüldüğünden, ilk aşamada yapılan itirazların ve sunulan savunmanın önemi büyüktür. Doğru bir başlangıç, dosyanın sonraki aşamalarındaki stratejiyi de şekillendirir.",
      "Soruşturma aşamasında avukat; ifade ve sorgu işlemlerinde müvekkilin yanında yer alır, tutukluluk ve adli kontrol kararlarına karşı itirazları hazırlar, delillerin toplanmasını ve dosyanın doğru sınıflandırılmasını gözetir. Kovuşturma aşamasında ise iddianameye karşı savunma kurulur, tanık ve bilirkişi aşamaları takip edilir, cezalandırıcı etkiyi azaltmaya yönelik hukuki argümanlar sunulur.",
      "Mağdur veya şikayetçi sıfatıyla sürece dahil olan tarafların da ayrı bir temsile ihtiyacı vardır. Suçun bildirilmesi, ifade işlemleri, katılan sıfatının kazanılması ve tazminat talepleri gibi konularda usulün doğru uygulanması, hakların zamanında kullanılmasını sağlar. Her iki taraf için de süreç şeffaf ve öngörülebilir olmalıdır.",
      "Ağır ceza yargılamalarında görev ve yetki kuralları, delil tartışmaları ve usul süreleri ayrı bir hassasiyet gerektirir. Dosyanın niteliğine göre stratejinin baştan belirlenmesi, delillerin zamanında sunulması ve duruşma takibinin aksatılmadan yürütülmesi gerekir. Sürecin her adımında müvekkilin bilgilendirilmesi, güven ilişkisinin temelini oluşturur.",
      "Ceza hukuku, insan hakları perspektifiyle ele alınması gereken bir alandır. Hukuka uygun bir yargılama, savunma hakkının etkili biçimde kullanılmasını ve masumiyet karinesine saygının korunmasını gerektirir. Adalet Hukuk, bu hassasiyet çerçevesinde her dosyayı kendi koşulları içinde değerlendirir.",
      "Soruşturma ve kovuşturma aşamalarında müvekkilin neyle karşılaşabileceğinin baştan anlatılması, sürecin daha sakin ilerlemesini sağlar. Hangi belgelerin gerektiği, duruşmalara nasıl hazırlanılacağı ve olası seçenekler açıkça paylaşılır. Belirsizlik, ceza süreçlerinde en zorlayıcı unsurlardan biridir; şeffaf bilgilendirme bu belirsizliği azaltır.",
      "Müvekkilin dosyayla ilgili olarak bildiği bilgilerin eksiksiz paylaşılması da savunmanın güçlenmesine katkı sağır. Zamanla değişen anılar ve yeni ortaya çıkan deliller, değerlendirmeyi dönüştürebilir. Bu nedenle avukat-müvekkil ilişkisinde düzenli iletişim, sürecin sağlıklı yürümesinin temel şartıdır.",
      "Adalet Hukuk, ceza dosyalarında usul sürelerini yakından takip eder, itiraz ve başvuru gerekçelerini somut delillere dayandırır ve her aşamada müvekkili bilgilendirir. Dosyanın niteliğine göre savunma stratejisi baştan itibaren planlanır ve gelişmelere göre güncellenir.",
      "Ceza süreçlerinde duyarlılık, yalnızca hukuki değil insani bir gerekliliktir. Sürecin yarattığı baskı, müvekkilin karar alma yetisini de etkileyebilir. Açık ve sakin bir iletişim, hem dosyanın sağlıklı yürütülmesi hem de müvekkilin güveninin korunması açısından değerlidir.",
      "Mahkumiyet hâlinde de süreç bitmez; infaz, itiraz ve kanun yolu aşamaları ayrı bir değerlendirmeyi gerektirir. Her aşamada sürenin ve dayanağın doğru belirlenmesi gerekir. Adalet Hukuk, dosyanın hangi aşamasında olursa olsun müvekkilinin yanında durur.",
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
    metaTitle: "Ceza Muhakemesi Hukuku Avukatı İstanbul",
    metaDescription:
      "Gözaltı, tutukluluk, adli kontrol ve kanun yolu başvurularında ceza usul hukuku danışmanlığı.",
    shortDescription:
      "Gözaltı, adli kontrol süreçleri ile istinaf ve temyiz başvurularında usul hukuku desteği.",
    focusTags: ["Gözaltı & İfade", "Adli Kontrol", "İstinaf-Temyiz"],
    intro: [
      "Ceza yargılamasının usule uygun yürütülmesi, sonucun adilliği kadar önemlidir. Adalet Hukuk, soruşturma ve kovuşturmanın her usul aşamasında sürecin doğru işlemesini takip eder.",
      "Ceza Muhakemesi Kanunu; gözaltı, tutuklama, adli kontrol, delil toplama ve kanun yolu başvurularına ilişkin kuralları belirler. Bu kuralların zamanında uygulanması, hem şüphelinin hem de mağdurun haklarının korunması açısından vazgeçilmezdir. Usul hatalarının zamanında ileri sürülmesi, dosyanın seyrini olumlu yönde etkileyebilir.",
      "Gözaltı ve ifade işlemlerinde, kişinin susma hakkı, avukata erişimi ve doğru bilgilendirilmesi temel güvencelerdir. İfade öncesinde hukuki destek alınması, ifadenin serbest iradeyle ve anlaşılarak verilmesini sağlar. Tutukluluk kararının koşulları değiştiğinde kaldırılması veya adli kontrolle değiştirilmesi talep edilebilir.",
      "Adli kontrol tedbirleri, özgürlüğün sınırlı biçimde devamını sağlayan seçeneklerdir. Tedbirin koşullarına uyulup uyulmadığı düzenli olarak kontrol edilir; koşullar değiştiğinde yeniden değerlendirme yapılabilir. Somut durumun ayrıntılı sunumu, mahkemenin doğru karar vermesine katkı sağlar.",
      "İstinaf ve temyiz başvuruları, kararların hukuka uygunluğunun üst mercilerce denetlenmesini sağlar. Kanun yolu sürelerinin kaçırılmadan takibi, kararların kesinleşmeden önce incelenmesi açısından kritiktir. Başvuru gerekçelerinin somut delillere dayandırılması, incelemenin sağlıklı yürütülmesini destekler.",
      "Usul kurallarına uygun bir yargılama, yalnızca şekli bir gereklilik değil, adaletin gerçekleşmesinin de temel şartıdır. Adalet Hukuk, her aşamada müvekkilini bilgilendirir ve gereken usul başvurularını zamanında yapar.",
      "Sürelerin takibi, usul hukukunun en kritik noktasıdır. Cevap, itiraz, delil sunma ve kanun yolu başvuruları için öngörülen sürelerin doğru hesaplanması gerekir. Süre aşımı, hakların ileri sürülmesini ciddi biçimde zorlaştırabilir; bu nedenle dosya takibi disiplinli bir biçimde yürütülür.",
      "Delillerin hukuka uygun biçimde elde edilmesi ve değerlendirilmesi de usulün ayrılmaz parçasıdır. İtiraz edilebilir nitelikteki delillerin zamanında ve gerekçeli biçimde ileri sürülmesi, yargılamanın sağlıklı yürütülmesine katkı sağlar. Her dosyanın delil yapısı ayrı ayrı incelenir.",
      "Adalet Hukuk, usul başvurularını hazırlarken somut olayı ve ilgili mevzuat hükümlerini birlikte değerlendirir. Başvuru metinleri açık, gerekçeli ve dayanaklı biçimde hazırlanır; müvekkil, atılan her adımdan haberdar edilir. Bu yaklaşım, hem hakların korunması hem de güven ilişkisinin sürdürülmesi açısından belirleyicidir.",
      "Usul hukukunda hazırlık, yargılamanın gidişatını belirler. Dilekçelerin süresi içinde ve usulüne uygun biçimde sunulması, delillerin kategoriler hâlinde dosyaya girmesi ve tanık listelerinin zamanında bildirilmesi beklenir. Eksiklerin sonradan tamamlanması her zaman mümkün olmaz.",
      "Adalet Hukuk, her dosyada usul takvimini ayrı ayrı çıkarır. Cevap süreleri, delil dönemleri ve duruşma günleri bu takvimde izlenir. Müvekkil, hangi aşamada olunduğunu ve sıradaki adımı bilir; böylece süreç öngörülebilir biçimde ilerler.",
      "Tarafların, delil ve savunma hazırlığını dava açılmadan önce tamamlaması, yargılamanın hızlanmasını sağlar. Yazışmaların, sözleşmelerin ve ödeme kayıtlarının baştan kategorilenmesi, mahkeme aşamasında zaman kaybını önler. Adalet Hukuk, dosyayı bu titizlikle hazırlar ve müvekkilini her adımda bilgilendirir.",
      "Usul kurallarının öngörülebilirliği, yargılamanın adil ve verimli yürütülmesini sağlar. Başvuruların bu çerçevede hazırlanması, dosyanın sağlıklı ilerlemesine doğrudan katkı yapar.",
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
      {
        question: "Tutukluluk kararı nasıl kaldırılır?",
        answer:
          "Tutuklama koşullarının ortadan kalktığı veya tutuklulukta geçen sürenin haklı gerekçelerle açıklanamadığı hâllerde tutukluluğun kaldırılması talep edilebilir. İtiraz ve başvuru yolları süre içinde kullanılmalıdır.",
      },
      {
        question: "İstinaf başvurusu için süre nedir?",
        answer:
          "Kanun yolu süreleri kararın tebliğine ve kararın niteliğine göre değişir. Sürenin doğru hesaplanması için tebliğ tarihinin ve karar metninin saklanması gerekir; geç kalınan başvurular değerlendirilmez.",
      },
    ],
  },
  {
    slug: "hukuk-muhakemeleri",
    categoryNumber: "06",
    categoryLabel: "YARGI PRATİĞİ",
    title: "Hukuk Muhakemeleri",
    shortTitle: "Hukuk Muhakemeleri",
    metaTitle: "Hukuk Muhakemeleri Avukatı İstanbul",
    metaDescription:
      "Asliye ve Sulh Hukuk uyuşmazlıklarında dava usulü, ihtiyati tedbir ve delil tespiti süreçlerinde destek.",
    shortDescription:
      "Asliye ve Sulh Hukuk uyuşmazlıkları, ihtiyati tedbir ve delil tespiti süreçlerinin yönetimi.",
    focusTags: ["Dava Usulü", "İhtiyati Tedbir", "Delil Tespiti"],
    intro: [
      "Bir uyuşmazlığın mahkeme önünde doğru şekilde yönetilmesi, usul hukukuna hakimiyet gerektirir. Adalet Hukuk, dava sürecinin her aşamasında usule uygun ve stratejik bir yaklaşım benimser.",
      "Hukuk Muhakemeleri Kanunu; davanın açılmasından kesinleşmesine kadar tarafların hak ve yükümlülüklerini, delil kurallarını ve yargı yolunu düzenler. Doğru mahkemenin belirlenmesi, dava şartlarının tamamlanması ve süreye uyulması, yargılamanın sağlıklı yürümesinin ilk koşullarıdır. Usule ilişkin hatalar, esasa ilişkin iyi bir savunmanın önüne geçebilir.",
      "Dava sürecinin yönetimi; dilekçelerin hazırlanması, cevap ve delil sunma sürelerinin takibi, duruşmalara katılım ve ara kararların yerine getirilmesi gibi birbirini tamamlayan adımlardan oluşur. Her adımda sürenin kaçırılmaması gerekir. Delillerin zamanında sunulmaması, ileride dayanılması mümkün olmayan sonuçlar doğurabilir.",
      "İhtiyati tedbir, hakkın sonradan icrasını zorlaştıracak veya imkânsızlaştıracak durumların önlenmesi için başvurulan geçici bir koruma yoludur. Talebin gerekçeli ve belgeli olması, durumun aciliyetini ortaya koyması gerekir. Mahkeme, koşulların gerçekleşip gerçekleşmediğini değerlendirerek karar verir.",
      "Delil tespiti ise delillerin ileride elde edilmesi güçleşecek veya tamamen imkânsız hâle gelecek hâllerde, dava açılmadan önce yaptırılabilen bir işlemdir. Zamanında başvurulan delil tespiti, ilerideki yargılamanın ispat yükünü hafifletir. Tanık, bilirkişi ve yazılı belgelere ilişkin işlemlerin usulüne uygun yürütülmesi büyük önem taşır.",
      "Süreç boyunca müvekkilin düzenli bilgilendirilmesi, alınan kararların ne anlama geldiğinin ve sıradaki adımların açıkça paylaşılması gerekir. Adalet Hukuk, dava stratejisini baştan itibaren şeffaf biçimde yürütür ve her aşamada müvekkil görüşünü alarak ilerler.",
      "Taraflar arası yazışmaların ve sözlü mutabakatların yazılı hâle getirilmesi, ileride doğabilecek tartışmaları azaltır. Dava sürecinde hangi belgenin ne işe yaradığı baştan planlanır; böylece delil sunma aşamasında hazırlıksız kalınmaz. Düzenli dosya tutumu, yargılamanın da hızlanmasını sağlar.",
      "Mahkemenin ara kararları ve duruşma günleri düzenli olarak takip edilir. Kararların ne anlama geldiği ve itiraz gerektirip gerektirmediği müvekkillle paylaşılır. Kritik süreler ayrı bir takvimde izlenir; böylece hiçbir adım gözden kaçmaz.",
      "Adalet Hukuk, hukuk muhakemeleri alanındaki hizmetlerinde hem usul hem de esas boyutunu birlikte ele alır. Strateji, delil ve süre üçlüsü etrafında şekillenen çalışma düzeni, dosyanın her aşamasında müvekkilin yanında olmasını sağlar.",
      "Sürecin başında, hangi mahkemeye ve hangi yola başvurulacağının belirlenmesi büyük önem taşır. Görev ve yetki kurallarına uygun bir başlangıç, dosyanın ilerleyen aşamalarında zaman kaybını önler. Dava şartlarının da ayrıntılı biçimde kontrol edilmesi gerekir.",
      "Delil ve savunma hazırlığının erken aşamada tamamlanması, mahkeme karşısında daha güçlü bir konum sağlar. Yazışmaların, sözleşmelerin ve ödeme kayıtlarının baştan kategorilenmesi, değerlendirmenin hızlı yürütülmesine katkı yapar.",
      "Adalet Hukuk, her dosyada usul takvimini ayrı ayrı çıkarır ve müvekkilini düzenli olarak bilgilendirir. Alınan kararların anlamı ve sıradaki adımlar açıkça paylaşılır; böylece müvekkil, süreci güvenle takip edebilir.",
      "Usul kurallarının öngörülebilirliği, yargılamanın adil ve verimli yürütülmesini sağlar. Dilekçe ve başvuruların bu çerçevede hazırlanması, dosyanın sağlıklı ilerlemesine doğrudan katkı yapar.",
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
    faq: [
      {
        question: "İhtiyati tedbir kararı ne işe yarar?",
        answer:
          "İhtiyati tedbir, hakkın sonradan icrasını zorlaştırabilecek durumları geçici olarak önler. Talebin gerekçeli yapılması ve durumun aciliyetinin gösterilmesi, kararın verilebilmesi açısından önemlidir.",
      },
      {
        question: "Delil tespiti dava açmadan yaptırılabilir mi?",
        answer:
          "Evet. Delillerin ileride elde edilmesi zorlaşacak veya imkânsız hâle geleceği durumlarda, dava açılmadan önce delil tespiti talebinde bulunulabilir.",
      },
      {
        question: "Davada süreler nasıl takip edilir?",
        answer:
          "Cevap, delil sunma ve itiraz süreleri usul mevzuatında belirlenir. Sürelerin doğru hesaplanması ve takibi hak kaybını önler; bu nedenle dosyanın düzenli kontrolü gerekir.",
      },
    ],
  },
  {
    slug: "icra-iflas-hukuku",
    categoryNumber: "07",
    categoryLabel: "TAHSİLAT & LİKİDİTE",
    title: "İcra ve İflas Hukuku",
    shortTitle: "İcra ve İflas Hukuku",
    metaTitle: "İcra ve İflas Hukuku Avukatı İstanbul",
    metaDescription:
      "Alacakların takibi, icra takibine itiraz ve iflas süreçlerinde İstanbul'da hukuki temsil.",
    shortDescription: "Alacak takibi, icra takibine itiraz, konkordato ve iflas süreçlerinde temsil.",
    focusTags: ["Alacak Takibi", "İtirazın İptali", "Konkordato"],
    intro: [
      "Alacağın tahsili veya haksız bir icra takibine karşı savunma, doğru ve zamanında atılan hukuki adımlar gerektirir. Adalet Hukuk, alacaklı ve borçlu taraflara icra ve iflas hukuku alanında destek verir.",
      "İcra takibi, alacağın niteliğine göre para veya eşya takibi biçiminde yürütülebilir. İlamlı ve ilamsız takiplerin usulü farklıdır; hangi yolun açılacağı, alacak belgesinin niteliğine ve borçlunun durumuna göre belirlenir. Doğru takip türünün seçilmesi, sürecin baştan itibaren verimli ilerlemesini sağlar.",
      "Alacaklı açısından ödeme emrinin tebliğinden itibaren işleyen sürelerin takibi kritiktir. Borçlunun itiraz etmesi hâlinde, itirazın niteliğine göre itirazın iptali veya kaldırılması yoluna başvurulur. Bu aşamalarda delillerin ve ödeme kayıtlarının önceden hazır bulundurulması, yargılamanın hızlanmasını sağlar.",
      "Borçlu açısından ise takibin haksız veya aşırı olduğunun gösterilmesi, borcun bir kısmının ödenmiş olması veya zamanaşımının gerçekleşmiş olması gibi savunmalar ileri sürülebilir. Erken aşamada hukuki destek alınması, hem takibin yükünü hafifletir hem de borçlunun sahip olduğu seçenekleri net biçimde ortaya koyar.",
      "İflas ve konkordato başlıkları, mali sıkıntı içindeki borçlular için öngörülen düzenlemelerdir. Konkordato, alacaklılarla yapılan bir plan çerçevesinde borçların yeniden yapılandırılmasını amaçlar; gerekli şartların taşınması ve usulüne uygun başvuru yapılması gerekir. Bu süreçler, şirketin devamlılığı ile alacaklıların menfaatini dengelemeyi hedefler.",
      "Takip ve iflas süreçlerinde tarafların beklentilerini gerçekçi biçimde belirlemesi, uzun vadede daha sürdürülebilir sonuçlar doğurur. Adalet Hukuk, dosyanın her aşamasında maliyet ve süre öngörüsü paylaşarak müvekkilini bilgilendirir.",
      "İcra dosyalarında tebligatın doğru adrese yapılması ve itiraz sürelerinin günü gününe takip edilmesi büyük önem taşır. Tebligat bilgilerindeki hatalar, süreci uzatabilir. Bu nedenle adres ve iletişim bilgilerinin güncel tutulması, hem alacaklı hem borçlu açısından faydalıdır.",
      "Alacaklının, borçlunun mal varlığına dair elindeki bilgileri sunması tahsilatı hızlandırabilir. Borçlunun ise ödeme yapmış olduğu belgeleri saklaması, haksız takiplere karşı savunmasını güçlendirir. Her iki tarafın da yazılı delil temelli ilerlemesi, sürecin öngörülebilirliğini artırır.",
      "Adalet Hukuk, icra ve iflas dosyalarında takip, itiraz ve dava aşamalarını bütüncül biçimde yönetir. Hangi yolun açılacağı, hangi savunmanın ileri sürüleceği ve sıradaki adımın ne olduğu, dosyanın başından itibaren netleştirilir. Müvekkil, sürecin her aşamasında bilgilendirilir.",
      "Takip masrafları ve olası tahsilatın birlikte değerlendirilmesi, beklentileri gerçekçi kılar. Alacaklının tahmini maliyeti önceden bilmesi, borçlunun ise itiraz seçeneklerini bilmesi, her iki taraf için de daha dengeli bir süreç sağlar.",
      "Ödeme planı gibi alternatiflerin de değerlendirilmesi, bazen dava yolundan daha hızlı sonuç verebilir. Ancak bu tür mutabakatların yazılı yapılması ve koşullarının açıkça belirtilmesi gerekir. Adalet Hukuk, her iki olasılığı da müvekkiliyle birlikte değerlendirir.",
      "Takip ve iflas dosyalarında düzen, sürenin kendisidir. Tebligatlar, itirazlar ve ara kararlar gün gün izlenir; hiçbir adım gözden kaçmaz. Müvekkil, dosyanın hangi aşamada olduğunu her zaman bilir.",
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
      {
        question: "İtiraz edilmezse ne olur?",
        answer:
          "Süresinde itiraz edilmemesi hâlinde takip ilerler ve malvarlığına yönelik işlemler gündeme gelebilir. Bu nedenle ödeme emrini tebliğ alan borçlunun derhâle geçip hukuki değerlendirme yaptırması gerekir.",
      },
      {
        question: "Konkordato başvurusu kimler yapabilir?",
        answer:
          "Finansal zorluk içindeki borçlular, konkordato prosedürüne ilişkin şartları taşıdıkları sürece başvuru yapabilirler. Planın alacaklıların belirli çoğunluğu tarafından kabul edilmesi ve mahkemece onaylanması gerekir.",
      },
    ],
  },
  {
    slug: "idare-hukuku",
    categoryNumber: "08",
    categoryLabel: "KAMU DENETİMİ",
    title: "İdare Hukuku",
    shortTitle: "İdare Hukuku",
    metaTitle: "İdare Hukuku Avukatı İstanbul",
    metaDescription:
      "İdari işlemlere karşı iptal davaları ve idare ile olan uyuşmazlıklarda İstanbul'da hukuki temsil.",
    shortDescription: "İdari işlemlere karşı iptal ve tam yargı davaları, imar mevzuatı uyuşmazlıkları.",
    focusTags: ["İptal Davaları", "Tam Yargı Davaları", "İmar Uyuşmazlıkları"],
    intro: [
      "Kamu kurumlarının işlem ve eylemlerinden etkilenen bireyler ve şirketler, idare hukuku çerçevesinde haklarını arayabilir. Adalet Hukuk bu süreçlerde idari yargı önünde temsil sağlar.",
      "İdari yargı; idari işlemlerin hukuka uygunluğunun denetlendiği iptal davaları ile idarenin eylem ve işlemlerinden doğan zararların tazminini amaçlayan tam yargı davalarını kapsar. Hangi yolun seçileceği, talebin niteliğine göre belirlenir. İdari Yargılama Usulü Kanunu, başvuru ve dava sürelerini düzenler; sürelerin kaçırılmadan takibi hak kaybını önler.",
      "İptal davalarında, işlemin yetki, şekil, sebep, amaç ve içerik bakımından hukuka uygunluğu değerlendirilir. İdari işlemlerin, ilgilisine tebliğinden itibaren öngörülen süre içinde dava açılması gerekir. Tebliğ bilgisinin ve işlemin yazılı metninin saklanması, sürenin doğru hesaplanması açısından belirleyicidir.",
      "Tam yargı davalarında ise idarenin hukuka aykırı işlem veya eyleminden doğan zararın tazmini talep edilir. Zararın somut biçimde gösterilmesi ve idareye önceden başvurulması gibi şartlar ayrıntılı biçimde değerlendirilir. İspat yükü ve delillerin zamanında sunulması, yargılamanın verimli yürümesini sağlar.",
      "İmar ve ruhsat uyuşmazlıkları, idare hukukunun gündelik yaşamla en çok kesişen başlıklarındandır. İmar planı değişiklikleri, ruhsat verilmesi veya reddi, yıkım kararları gibi işlemlere ilişkin uyuşmazlıklarda, teknik ve hukuki boyutun birlikte incelenmesi gerekir. Projelerin ve yazışmaların düzenli saklanması, sürecin sağlıklı yürütülmesine katkı sağlar.",
      "İdare ile birey arasındaki ilişki, kamu yararı ile bireysel haklar arasında bir denge üzerine kuruludur. Adalet Hukuk, müvekkillerinin başvurularını usulüne uygun biçimde hazırlar, süreleri takip eder ve idari yargı önünde etkin bir temsil sağlar.",
      "İdari süreçlerde yazışmaların ve tebligatların düzenli saklanması büyük önem taşır. Hangi işlemin ne zaman öğrenildiği, dava süresinin hesabında belirleyicidir. İdarenin işlem gerekçesinin yazılı olması, hukuki değerlendirmenin dayanağını oluşturur.",
      "Başvuruların idareye yapıldığı ilk aşamada da usulün doğru uygulanması, dava yolunu kısaltabilir. Eksik bilgi veya yanlış mercie başvuru, süreci uzatabilir. Bu nedenle ilk başvurunun da hukuki destekle hazırlanması faydalıdır.",
      "Adalet Hukuk, idare hukuku dosyalarında teknik ayrıntıları hukuki argümanlara dönüştürür. İmar, ruhsat, tazminat ve iptal taleplerinde somut olayın belgeleri ayrıntılı incelenir; süreler takip edilir ve müvekkil her aşamada bilgilendirilir.",
      "İdari yargılamada, işlemin yetki ve usul bakımından denetimi ayrı bir önem taşır. İdarenin karar alma sürecinde izlediği usul, işlemin hukuka uygunluğunu doğrudan etkiler. Bu nedenle dosyada, işlemin bütün aşamalarına ilişkin yazışmaların bulunması büyük avantaj sağlar.",
      "Adalet Hukuk, idare hukuku başvurularını baştan itibaren süreye göre planlar. Tebliğ, itiraz ve dava takvimleri birlikte hazırlanır; eksik belge riski önceden görülür. Müvekkil, süreç boyunca ne bekleyeceğini bilir ve kararlarını buna göre verebilir.",
      "İdari süreçte sabırlı ve düzenli bir takip gerekir. İşlemin aşamaları bazen haftalar hatta aylar sürebilir; bu dönemde yeni belgelerin toplanması ve başvuruların güncellenmesi faydalıdır. Adalet Hukuk, bu dönemi de aktif biçimde yönetir.",
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
    faq: [
      {
        question: "İdari işleme ne kadar sürede dava açılır?",
        answer:
          "Dava süreleri işlemin niteliğine ve tebliğine göre farklılık gösterir. İptal ve tam yargı davalarında öngörülen sürelerin tebliğ tarihinden itibaren takip edilmesi gerekir.",
      },
      {
        question: "İptal davası ile tam yargı davası arasındaki fark nedir?",
        answer:
          "İptal davasında işlemin hukuka uygunluğunun denetlenmesi; tam yargı davasında ise idarenin işlem veya eyleminden doğan zararın tazmini istenir. Talebin niteliğine göre doğru yol seçilmelidir.",
      },
      {
        question: "İmar kararına itiraz yolları nelerdir?",
        answer:
          "İmar planı ve ruhsat işlemlerine ilişkin kararlarda, öncelikle idari içi itiraz yolları değerlendirilebilir; süresi içinde dava açmak da mümkündür. Somut işlemin niteliğine göre yol belirlenir.",
      },
    ],
  },
  {
    slug: "is-hukuku",
    categoryNumber: "09",
    categoryLabel: "ÇALIŞMA YAŞAMI",
    title: "İş Hukuku",
    shortTitle: "İş Hukuku",
    metaTitle: "İş Hukuku Avukatı İstanbul",
    metaDescription:
      "İşçi ve işveren uyuşmazlıklarında, iş sözleşmelerinde ve kıdem/ihbar tazminatı süreçlerinde İstanbul'da hukuki destek.",
    shortDescription: "İşe iade, kıdem-ihbar tazminatı, hizmet tespiti ve iş sözleşmesi uyuşmazlıkları.",
    focusTags: ["İşe İade", "Tazminat Davaları", "Hizmet Tespiti"],
    intro: [
      "İş ilişkisinden doğan uyuşmazlıklar hem çalışanlar hem de işverenler için önemli sonuçlar doğurabilir. Adalet Hukuk, İstanbul'da her iki tarafa da danışmanlık ve dava takibi hizmeti sunar.",
      "İş Kanunu; iş sözleşmesinin kurulmasından sona ermesine kadar tarafların hak ve yükümlülüklerini, fesih şartlarını ve tazminat kurallarını düzenler. İş hukukunda sürelerin ve yazılı delillerin özel bir önemi vardır; zamanaşımı süreleri ve dava öncesi arabuluculuk gibi kurallar, süreci baştan itibaren şekillendirir.",
      "İşe iade davaları, haksız fesih iddialarında çalışanın işine geri dönmesini amaçlar. Fesih bildiriminin gerekçesi, işçinin savunması ve işyerindeki durum ayrıntılı biçimde değerlendirilir. Arabuluculuk sürecinin başarısız olması hâlinde dava açılır; sürelerin kaçırılmadan takibi hakların korunması için vazgeçilmezdir.",
      "Kıdem ve ihbar tazminatı başlıklarında, hizmet süresinin, ücretin ve fesih koşullarının doğru hesaplanması gerekir. Bordrolar, işe giriş bildirgeleri ve yazılı yazışmalar, hesaplamanın dayanağını oluşturur. Hizmet tespiti ve fazla mesai alacakları ise özellikle sigortasız çalışma hâllerinde gündeme gelir; tanık ve kayıt delillerinin zamanında toplanması büyük önem taşır.",
      "İşveren tarafı için ise iş sözleşmelerinin ve şirket içi politikalarının baştan hazırlaması, olası uyuşmazlıkların önüne geçer. İşyeri kurallarının yazılı olması, savunma hakkının gözetilmesi ve fesih süreçlerinin usulüne uygun yürütülmesi, hem hukuki riski azaltır hem de işyerindeki düzeni korur.",
      "İş hukuku uyuşmazlıklarında erken aşama, en kritik dönemdir. Beklentilerin açıkça konuşulması, delillerin saklanması ve gerekli başvuruların zamanında yapılması, hem maddi hem de manevi açıdan daha öngörülebilir bir sonuç doğurur.",
      "Arabuluculuk, iş hukuku uyuşmazlıklarının çoğunda dava öncesi zorunlu bir adımdır. Görüşmelerde tarafların taleplerini ve alternatiflerini net biçimde ortaya koyması, anlaşmaya ulaşma olasılığını artırır. Anlaşma sağlanamazsa, arabuluculuk tutanağı ve dosya, dava aşamasında da yararlı bilgiler içerir.",
      "İşçi ve işverenin birbirinin durumunu anlaması, sürecin daha yapıcı ilerlemesini sağlar. İşten ayrılma, tazminat veya işe iade gibi konularda tarafların beklentilerinin gerçekçi olması, uzlaşmayı kolaylaştırır. Somut olayın belgelerle desteklenmesi her iki taraf için de belirleyicidir.",
      "Adalet Hukuk, iş hukuku dosyalarında sürelerin takibi, arabuluculuk ve dava stratejisini birlikte ele alır. Bordro, sözleşme ve yazışmaların titiz incelemesiyle başlayan çalışma, dosyanın her aşamasında müvekkilin bilgilendirilmesiyle devam eder.",
      "İş kazası ve meslek hastalığı hâllerinde ise hem işleyiş hem de tazminat boyutu birlikte değerlendirilir. Tutanakların ve sağlık raporlarının zamanında düzenlenmesi, ilerideki değerlendirmenin dayanağını oluşturur. Gecikmelerin telafisi her zaman mümkün olmayabilir.",
      "Adalet Hukuk, her iki tarafın da haklarını gözeterek bir çalışma yürütür. İşçinin alacaklarının ispatı kadar işverenin de savunma imkânları dikkate alınır. Somut olayın belgeleri esas alınır; genel değerlendirmeler yerine dosyaya özgü bir yaklaşım benimsenir.",
      "İş hukukunda arabuluculuk ve dava, birbirini tamamlayan aşamalardır. Her iki aşamada da tarafların hazırlıklı olması, sürenin verimli kullanılmasını sağır. Belge ve kayıtların baştan düzenlenmesi, hangi aşamada olursa olsun avantaj sağlar.",
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
      {
        question: "Kıdem tazminatı nasıl hesaplanır?",
        answer:
          "Kıdem tazminatı, hizmet süresi ve son ücret üzerinden mevzuattaki kurallara göre hesaplanır. Hak edişin doğru belirlenmesi için bordrolar ve işe giriş-çıkış kayıtları önem taşır.",
      },
      {
        question: "Fazla mesai alacakları ispatlanabilir mi?",
        answer:
          "İşçi, fazla çalışmayı bordro, yazışma, görev kaydı gibi delillerle gösterebilir. İşverenin de çalışma düzenine ilişkin kayıtları sunması beklenebilir; değerlendirme somut olaya göre yapılır.",
      },
    ],
  },
  {
    slug: "vergi-hukuku",
    categoryNumber: "10",
    categoryLabel: "MALİ DAVA",
    title: "Vergi Hukuku",
    shortTitle: "Vergi Hukuku",
    metaTitle: "Vergi Hukuku Avukatı İstanbul",
    metaDescription:
      "Vergi cezalarına itiraz, vergi uyuşmazlıkları ve vergi incelemesi süreçlerinde İstanbul'da hukuki danışmanlık.",
    shortDescription: "Vergi inceleme raporlarına itiraz, uzlaşma süreçleri ve Vergi Mahkemesi'nde savunma.",
    focusTags: ["Tarhiyata İtiraz", "Uzlaşma Süreci", "Vergi Davaları"],
    intro: [
      "Vergi mevzuatından doğan uyuşmazlıklar, hem bireyler hem de şirketler için önemli mali sonuçlar doğurabilir. Adalet Hukuk, vergi incelemesi ve tarhiyat süreçlerinde hukuki destek sunar.",
      "Vergi Usul Kanunu; vergilendirme süreçlerinin usulünü, inceleme ve tarhiyat adımlarını ve itiraz yollarını düzenler. Bir vergi incelemesinin başlamasından dava aşamasına kadar her adımda sürelere uyulması gerekir. Süre aşımı, hakların ileri sürülmesini güçleştirebilir; bu nedenle ilk bildirimin alındığı anda hukuki değerlendirme yapılması faydalıdır.",
      "Vergi cezalarına itiraz, ceza ihbarnamesinin tebliğinden itibaren öngörülen süre içinde yapılır. İtirazın gerekçeleri; fiilin varlığı, kusurun derecesi, zamanaşımı ve usul hataları gibi başlıklar altında ayrıntılı biçimde ortaya konur. İnceleme raporunun ve dayanak belgelerin titiz biçimde incelenmesi, savunmanın gücünü belirler.",
      "Uzlaşma süreci, vergi uyuşmazlıklarının mahkeme dışında çözülebildiği alternatif bir yoldur. Uzlaşma başvurusunun usulüne uygun yapılması ve müvekkilin tebliğ edilen tutara ilişkin tercihinin açıkça belirtilmesi gerekir. Uzlaşmada kararlaştırılan tutar, dava yolunu büyük ölçüde daraltır; bu nedenle başvurunun sonuçları baştan değerlendirilmelidir.",
      "Vergi Mahkemesinde yürütülen davalarda ise tarhiyatın hukuki dayanağı, şekil unsurları ve hesap yöntemleri birlikte incelenir. İdari yargılama usulüne uygun dilekçelerin hazırlanması, delillerin zamanında sunulması ve duruşma takibi ayrı bir titizlik gerektirir.",
      "Vergi mevzuatının sürekli değişen yapısı, düzenli bilgilendirmeyi zorunlu kılar. Adalet Hukuk, müvekkillerine süreç boyunca açık bilgilendirme sunar ve olası senaryoları baştan paylaşarak karar vermeyi kolaylaştırır.",
      "Vergi incelemelerinde belgelerin eksiksiz ve düzenli sunulması, sürecin hızlanmasını sağlar. İnceleme sırasında sorulan sorulara açık ve tutarlı yanıt verilmesi, değerlendirmenin sağlıklı yürütülmesine katkı yapar. Kayıtların muhafaza sürelerine uyulması da ayrı bir önem taşır.",
      "Tarhiyat tebliğ edildiğinde panik yerine planlı bir değerlendirme yapılması gerekir. Hangi yola başvurulacağı, sürenin ne kadar olduğu ve hangi belgelerin toplanacağı baştan belirlenirse, hak kaybı riski belirgin biçimde azalır. Erken müdahale, genellikle daha elverişli bir konum sağlar.",
      "Adalet Hukuk, vergi dosyalarında inceleme, uzlaşma ve dava aşamalarını bütüncül biçimde yönetir. Somut olayın belgeleri ayrıntılı incelenir, gerekçeler dayanaklı hazırlanır ve müvekkil her aşamada bilgilendirilir. Süreler ayrı bir titizlikle takip edilir.",
      "Vergi uyuşmazlıklarında teknik hesaplamaların hukuki argümanlarla desteklenmesi gerekir. İtirazın dayanağı yalnızca itiraz etmek olmamalı; fiilin, usulün ve hesabın ayrıntılı bir değerlendirmeye tâbi tutulması beklenir. Dosyanın bu titizlikle hazırlanması, değerlendirmeyi güçlendirir.",
      "Adalet Hukuk, müvekkillerine vergi süreçlerinde alternatifleri de açıkça anlatır. Uzlaşma, dava ve diğer yolların avantajları ve sınırları birlikte değerlendirilir. Böylece müvekkil, bilinçli bir karar verebilir ve sürecin her aşamasında ne olacağını öngörebilir.",
      "Vergi dosyalarında belge düzeni, sürecin temelidir. Kayıtların eksiksiz tutulması ve ilgili dönemlerin arşivlenmesi, hem inceleme hem de dava aşamasında belirleyicidir. Adalet Hukuk, dosyayı bu düzene göre hazırlar.",
      "İnceleme ve tarhiyat dönemlerinde müvekkilin tek başına karar vermek yerine profesyonel destek alması, haklarını daha etkili kullanmasını sağlar. Hangi belgenin ne zaman sunulacağı ve hangi yola başvurulacağı, bu destekle birlikte çok daha net belirlenir.",
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
    faq: [
      {
        question: "Vergi incelemesinde hangi belgeler hazırlanmalıdır?",
        answer:
          "Muhasebe kayıtları, sözleşmeler, fatura ve banka hareketleri gibi işlemeye ilişkin belgelerin eksiksiz hazır bulundurulması, incelemenin sağlıklı yürütülmesi açısından önemlidir.",
      },
      {
        question: "Vergi cezasına itiraz süresi nedir?",
        answer:
          "Cezanın tebliğinden itibaren ilgili mevzuatta öngörülen süre içinde itiraz veya dava yoluna başvurulabilir. Tebliğ tarihinin doğru kaydedilmesi, sürenin kaçırılmaması için kritiktir.",
      },
      {
        question: "Uzlaşma başvurusu dava açmayı engeller mi?",
        answer:
          "Uzlaşma süreci sonuçlandığında kararlaştırılan tutar için ayrıca dava açılması mümkün değildir. Başvuru yapılmadan önce bu sonucun değerlendirilmesi ve tercihin açıkça belirtilmesi gerekir.",
      },
    ],
  },
  {
    slug: "gumruk-hukuku",
    categoryNumber: "11",
    categoryLabel: "DIŞ TİCARET & REGÜLASYON",
    title: "Gümrük Hukuku",
    shortTitle: "Gümrük Hukuku",
    metaTitle: "Gümrük Hukuku Avukatı İstanbul",
    metaDescription:
      "İthalat-ihracat işlemleri ve gümrük uyuşmazlıklarında İstanbul'da hukuki danışmanlık ve temsil.",
    shortDescription: "Gümrük vergisi, ek tahakkuk itirazları ve ithalat-ihracat mevzuatı danışmanlığı.",
    focusTags: ["Gümrük Cezalarına İtiraz", "İthalat-İhracat Danışmanlığı"],
    intro: [
      "Dış ticaretle uğraşan şirketler, gümrük mevzuatından kaynaklanan çeşitli hukuki risklerle karşılaşabilir. Adalet Hukuk, gümrük idareleriyle yaşanan uyuşmazlıklarda danışmanlık ve temsil hizmeti verir.",
      "Gümrük Kanunu; ithalat, ihracat ve transit işlemlerinin usulünü, vergi ve harçların hesaplanmasını ve idari yaptırımları düzenler. Süreli bildirimlerin ve beyanların doğru yapılması, işlemlerin kesintisiz ilerlemesini sağlar. Yanlış veya eksik beyan, sonradan ek tahakkuk ve idari yaptırım riskini artırabilir.",
      "Gümrük vergisi ve ek tahakkuk kararlarına karşı öngörülen süre içinde itiraz başvurusu yapılabilir. Kararın gerekçesi, beyan edilen eşyanın niteliği ve teknik şartnamelere uygunluk ayrıntılı biçimde değerlendirilir. İthalat ve ihracat süreçlerine ilişkin sözleşmelerin, yazışmaların ve gümrük beyannamelerinin saklanması, itirazın dayanağını oluşturur.",
      "İdari yaptırımlara karşı ise idari yol ve dava seçenekleri birlikte değerlendirilir. Gümrük işlemlerinin hızla ilerlemesi, zaman duyarlı süreçler yarattığından, başvuruların zamanında ve eksiksiz yapılması büyük önem taşır. Somut olayın teknik ve hukuki boyutunun birlikte incelenmesi gerekir.",
      "İthalat-ihracat danışmanlığı kapsamında ise mevzuat uyumu, belge ve izin süreçleri ile sözleşme düzenlemeleri ele alınır. Dış ticaret mevzuatındaki değişikliklerin düzenli takibi, işlemlerin baştan usule uygun yürütülmesini sağlar. Önleyici hukuki destek, uyuşmazlık çıkmadan riskleri görünür kılar.",
      "Gümrük uyuşmazlıklarında deneyimli bir yaklaşım, hem sürelerin doğru kullanılması hem de teknik ayrıntıların hukuki argümanlara dönüştürülmesi açısından belirleyicidir. Adalet Hukuk, dosyanın her aşamasında müvekkilini bilgilendirir.",
      "Gümrük işlemlerinde zaman duyarlılık yüksektir. Eşyanın bekleme süreleri, bildirim pencereleri ve itiraz dönemleri sıkı biçimde işler. Gecikmelerin telafisi her zaman mümkün olmayabilir; bu nedenle işlemler baştan usulüne uygun yürütülmelidir.",
      "Teknik konuların hukuki dille ifade edilebilmesi, başvurunun başarısını doğrudan etkiler. Sınıflandırma, kıymet ve menşe gibi unsurların ayrıntılı biçimde açıklanması, idarenin değerlendirmesine katkı yapar. Belge ve yazışmaların düzenli arşivlenmesi, ilerideki itirazların da dayanağını oluşturur.",
      "Adalet Hukuk, gümrük dosyalarında hem danışmanlık hem de temsili birlikte yürütür. İthalat-ihracat süreçlerinde usul uyumu, ceza ve ek tahakkuk dönemlerinde ise gerekçeli itiraz ve dava takibi esas alınır. Sürecin her aşamasında müvekkil bilgilendirilir.",
      "Gümrük mevzuatındaki değişikliklerin düzenli takibi, işlemlerin baştan doğru yürütülmesini sağlar. Yeni belge veya izin yükümlülükleri zamanla değişebilir; güncel kuralın bilinmesi, hatalı beyan riskini azaltır. Önleyici danışmanlık bu açıdan büyük değer taşır.",
      "Adalet Hukuk, dosyanın teknik ve hukuki boyutunu birlikte ele alır. Beyan kayıtları, sözleşme ve yazışmalar bir bütün olarak incelenir; itiraz veya dava gerekçeleri somut belgelere dayandırılır. Müvekkil, her aşamada sürecin seyrinden haberdar edilir.",
      "Gümrük işlemlerinde belge bütünlüğü, idarenin değerlendirmesini doğrudan etkiler. Eksik veya birbiriyle çelişen kayıtlar, süreci uzatabilir. Bu nedenle dosyanın baştan bütüncül hazırlanması büyük önem taşır.",
      "İthalat ve ihracatta zamanında bildirim, hem maliyet hem de hukuki risk açısından belirleyicidir. İşlemin gerektirdiği belge ve izinlerin önceden hazırlanması, sonradan doğabilecek ek tahakkuk ve yaptırım riskini azaltır.",
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
    faq: [
      {
        question: "Ek tahakkuk kararına nasıl itiraz edilir?",
        answer:
          "Kararın tebliğinden itibaren ilgili mevzuatta öngörülen süre içinde idari itiraz veya dava yoluna başvurulabilir. Beyan kayıtlarının ve teknik belgelerin birlikte sunulması değerlendirmeyi güçlendirir.",
      },
      {
        question: "Gümrük cezalarında hangi belgeler işe yarar?",
        answer:
          "Beyannameler, sözleşme, fatura, ödemeye ilişkin kayıtlar ve teknik şartname uygunluğunu gösteren belgeler temel dayanaklardır. Belgelerin işlem tarihiyle uyumlu olması önemlidir.",
      },
      {
        question: "İhracat işlemlerinde mevzuat uyumu nasıl sağlanır?",
        answer:
          "Belge, izin ve beyan yükümlülüklerinin işlem öncesinde kontrol edilmesi hataları önler. Dış ticaret mevzuatındaki değişikliklerin düzenli takibi, usule uygunluğun korunmasını sağlar.",
      },
    ],
  },
  {
    slug: "infaz-hukuku",
    categoryNumber: "12",
    categoryLabel: "CEZA VE TEDBİR",
    title: "İnfaz Hukuku",
    shortTitle: "İnfaz Hukuku",
    metaTitle: "İnfaz Hukuku Avukatı İstanbul",
    metaDescription:
      "Koşullu salıverilme, denetimli serbestlik ve infaz hesaplamalarına ilişkin başvurularda hukuki destek.",
    shortDescription: "Koşullu salıverilme, denetimli serbestlik ve infaz hesaplamalarına ilişkin başvurular.",
    focusTags: ["Koşullu Salıverilme", "Denetimli Serbestlik", "İnfaz Hakimliği İtirazı"],
    intro: [
      "Kesinleşen mahkumiyet kararlarının infazı sürecinde de hak kayıplarının önlenmesi mümkündür. Adalet Hukuk, infaz hesaplamaları ve ilgili başvuru süreçlerinde destek sunar.",
      "İnfaz Kanunu; cezanın infaz koşullarını, koşullu salıverilmeyi, denetimli serbestliği ve infaza ilişkin itiraz usullerini düzenler. Cezanın başlangıç ve bitiş tarihlerinin doğru hesaplanması, tutukluluk ve gözaltı sürelerinin mahsup edilmesi gibi konular, özgürlüğün ne zaman sona ereceğini doğrudan etkiler.",
      "Koşullu salıverilme başvurularında, cezanın belirli bir kısmının infaz edilmiş olması ve hükümlünün davranışları gibi şartlar değerlendirilir. Başvuru tarihinin doğru belirlenmesi, dilekçenin gerekçeli hazırlanması ve gerekli belgelerin eklenmesi, talebin sağlıklı değerlendirilmesini sağlar. Sürecin düzenli takibi, başvurunun cevapsız kalmamasını garantiler.",
      "Denetimli serbestlik tedbirleri, hükümlünün topluma yeniden kazandırılmasını amaçlar. Hangi tedbirin uygulanacağı, hükümlünün durumuna ve mahkeme kararına göre belirlenir. Yükümlülüklerin zamanında yerine getirilmesi, tedbirin amacına uygun yürütülmesi açısından önemlidir.",
      "İnfaz Hakimliğine itiraz; infazla ilgili kararlara karşı başvurulan yasal yoldur. Kararın öğrenildiği andan itibaren süre içinde başvurunun yapılması gerekir. İtiraz gerekçeleri; hesaplama hataları, usul eksiklikleri veya koşullardaki değişiklikler gibi somut dayanaklara dayandırılmalıdır.",
      "İnfaz süreci, hükümlünün ve ailesinin yaşamını yakından etkiler. Bu nedenle başvuruların deneyimli bir hukuki destekle hazırlanması, hak kayıplarının önlenmesi açısından değerlidir. Adalet Hukuk, her aşamada süreci açık biçimde takip eder ve müvekkilini bilgilendirir.",
      "İnfaz hesaplamalarında tarihlerin gün gün doğrulanması gerekir. Tutukluluk, gözaltı ve diğer sürelerin mahsubu, cezanın bitiş tarihini doğrudan etkiler. Küçük bir hesaplama hatası, özgürlükle ilgili bir takvimi uzatabilir veya kısaltabilir; bu nedenle kayıtların ayrıntılı incelenmesi şarttır.",
      "Başvuru dilekçelerinde, talebin hangi dayanağa dayandığı ve hangi belgelerin ek olduğu açıkça gösterilmelidir. Gerekçesiz veya eksik başvuruların sonuçlanması daha uzun sürebilir. İlgili merci ve süre konusundaki hassasiyet, başvurunun değerlendirilme olasılığını artırır.",
      "Adalet Hukuk, infaz dosyalarında hesaplama, başvuru ve itiraz aşamalarını birlikte yürütür. Koşullu salıverilme, denetimli serbestlik ve infaz hakimliği başvurularında somut belgelerle ve güncel mevzuatla çalışan bir yaklaşım benimsenir; müvekkil her adımdan haberdar edilir.",
      "İnfaz sürecinde ailenin de bilgilendirilmesi, düzenin korunması açısından faydalıdır. Hangi başvurunun ne zaman yapılacağı ve sonuçlarının ne anlama geleceği, açık biçimde paylaşılır. Belirsizlik, hem hükümlü hem de yakınları için ek bir yük oluşturur.",
      "Adalet Hukuk, infaz dosyalarında süre ve belge takibini ayrı bir disiplinle yürütür. Başvuru metinleri gerekçeli hazırlanır, ek belgeler tam olarak dosyaya girer ve sonuç düzenli olarak müvekkille paylaşılır. Sürecin her aşamasında şeffaflık esas alınır.",
      "İnfaz hesaplamalarına ilişkin kayıtların bir kopyasının saklanması, sonradan yapılacak incelemeleri kolaylaştırır. Hangi tarihte hangi başvurunun yapıldığı, sürecin güvenilir biçimde takip edilmesini sağlar.",
      "Başvuru sonuçları hakkında düzenli bilgilendirme, ailelerin de süreci öngörebilmesini sağlar. Adalet Hukuk, infaz dosyalarında bu iletişimi ayrı bir özenle yürütür ve müvekkilini her aşamada haberdar eder.",
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
    faq: [
      {
        question: "Koşullu salıverilme için ne zaman başvurulur?",
        answer:
          "Cezaevinde geçirilmesi gereken sürenin dolmasına yakın dönemde başvuru yapılır. Başvuru tarihinin doğru belirlenmesi ve şartların taşındığının belgelenmesi, talebin değerlendirilmesi açısından önemlidir.",
      },
      {
        question: "İnfaz hesabında hata olduğu nasıl anlaşılır?",
        answer:
          "Tutukluluk ve gözaltı sürelerinin mahsup edilmemesi veya tarihlerin yanlış işlenmesi hatalara yol açabilir. Cezaya ilişkin kayıtların karşılaştırılmasıyla fark ortaya çıkarılabilir.",
      },
      {
        question: "İnfaz Hakimliği kararına itiraz edilebilir mi?",
        answer:
          "Evet. İnfazla ilgili kararlara karşı ilgili usul kuralları çerçevesinde itiraz yoluna başvurulabilir. Sürenin öğrenildiği andan itibaren takip edilmesi gerekir.",
      },
    ],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
