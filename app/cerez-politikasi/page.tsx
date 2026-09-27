import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { siteConfig } from "@/lib/content/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Çerez Politikası",
  description: "Adalet Hukuk web sitesi çerez politikası.",
  path: "/cerez-politikasi",
  noIndex: true,
});

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Çerez Politikası" updatedAt="26 Eylül 2026">
      <p>
        Bu web sitesi, temel işlevselliği sağlamak dışında herhangi bir üçüncü taraf izleme
        veya reklam çerezi kullanmamaktadır.
      </p>

      <h2>Kullanılan Çerez Türleri</h2>
      <p>
        Site şu anda yalnızca tarayıcınızın sayfayı doğru şekilde görüntülemesi için gerekli
        olabilecek zorunlu teknik verileri kullanır; kullanıcı davranışını izleyen analitik
        veya pazarlama çerezi bulunmamaktadır.
      </p>

      <h2>Üçüncü Taraf İçerikler</h2>
      <p>
        Konum bilgisi göstermek amacıyla sayfalarımızda Google Haritalar gömülü içeriği
        kullanılmaktadır. Bu içerik yüklendiğinde Google&apos;ın kendi gizlilik ve çerez
        politikaları geçerli olabilir.
      </p>

      <h2>Politikadaki Değişiklikler</h2>
      <p>
        Web sitemize ileride analitik veya başka bir izleme aracı eklenmesi halinde, bu
        politika güncellenerek kullanıcılarımız bilgilendirilecektir.
      </p>

      <h2>İletişim</h2>
      <p>
        Sorularınız için {siteConfig.contact.email} adresinden bize ulaşabilirsiniz.
      </p>
    </LegalPageLayout>
  );
}
