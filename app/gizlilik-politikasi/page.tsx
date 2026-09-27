import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description: "Adalet Hukuk web sitesi gizlilik politikası.",
  path: "/gizlilik-politikasi",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Gizlilik Politikası" updatedAt="26 Eylül 2026">
      <p>
        {siteConfig.legalName} olarak, web sitemizi ziyaret eden ve bizimle iletişime geçen
        kullanıcılarımızın gizliliğine önem veririz. Bu politika, web sitemiz üzerinden
        toplanan bilgilerin nasıl kullanıldığını açıklar.
      </p>

      <h2>Toplanan Bilgiler</h2>
      <p>
        Web sitemiz üzerinden yalnızca iletişim formunu doldurmanız halinde paylaştığınız
        ad-soyad, telefon, e-posta ve talep açıklaması bilgileri tarafımıza iletilir. Form
        gönderimi, ziyaretçinin kendi e-posta uygulaması üzerinden doğrudan büromuza mesaj
        göndermesi yoluyla gerçekleşir.
      </p>

      <h2>Bilgilerin Kullanımı</h2>
      <p>
        Paylaştığınız bilgiler yalnızca talebinizin değerlendirilmesi ve sizinle iletişime
        geçilmesi amacıyla kullanılır; pazarlama amacıyla üçüncü kişilerle paylaşılmaz veya
        satılmaz.
      </p>

      <h2>Veri Güvenliği</h2>
      <p>
        Avukatlık mesleğinin gerektirdiği sır saklama yükümlülüğü çerçevesinde, tarafımıza
        iletilen bilgilerin gizliliğinin korunması için gerekli özen gösterilir.
      </p>

      <h2>İletişim</h2>
      <p>
        Bu politika hakkında sorularınız için {siteConfig.contact.email} adresinden bizimle
        iletişime geçebilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
