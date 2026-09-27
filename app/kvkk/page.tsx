import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
  path: "/kvkk",
  noIndex: true,
});

export default function KvkkPage() {
  return (
    <LegalPageLayout title="KVKK Aydınlatma Metni" updatedAt="26 Eylül 2026">
      <p>
        İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
        uyarınca, {siteConfig.legalName} (&quot;Adalet Hukuk&quot;) tarafından veri sorumlusu
        sıfatıyla işlenen kişisel verileriniz hakkında sizi bilgilendirmek amacıyla
        hazırlanmıştır.
      </p>

      <h2>Veri Sorumlusu</h2>
      <p>
        {siteConfig.legalName}, {siteConfig.address.full} adresinde faaliyet göstermektedir.
        İletişim: {siteConfig.contact.email}
      </p>

      <h2>İşlenen Kişisel Veriler</h2>
      <p>
        İletişim formu veya doğrudan iletişim yoluyla bizimle paylaştığınız ad-soyad, telefon
        numarası, e-posta adresi ve talebinize ilişkin açıklamalardan ibaret kişisel verileriniz
        işlenmektedir.
      </p>

      <h2>İşleme Amaçları ve Hukuki Sebep</h2>
      <ul>
        <li>Danışmanlık talebinizin değerlendirilmesi ve sizinle iletişime geçilmesi,</li>
        <li>Hukuki danışmanlık ve avukatlık hizmetlerinin yürütülmesi,</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
      </ul>

      <h2>Kişisel Verilerin Aktarılması</h2>
      <p>
        Kişisel verileriniz, yasal zorunluluklar dışında, açık rızanız olmaksızın üçüncü
        kişilerle paylaşılmaz.
      </p>

      <h2>Haklarınız</h2>
      <p>
        KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme,
        işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içinde veya
        yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse
        düzeltilmesini isteme, silinmesini veya yok edilmesini isteme haklarına sahipsiniz.
      </p>
      <p>
        Bu haklarınızı kullanmak için {siteConfig.contact.email} adresi üzerinden bizimle
        iletişime geçebilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
