import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site-config";
import { practiceAreas } from "@/lib/content/practice-areas";
import { lawyers } from "@/lib/content/lawyers";
import { articles } from "@/lib/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/hukuk-alanlari",
    "/avukatlar",
    "/makaleler",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const practiceAreaRoutes = practiceAreas.map((area) => ({
    url: `${siteConfig.url}/hukuk-alanlari/${area.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const lawyerRoutes = lawyers
    .filter((lawyer) => lawyer.hasFullProfile)
    .map((lawyer) => ({
      url: `${siteConfig.url}/avukatlar/${lawyer.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/makaleler/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...lawyerRoutes, ...articleRoutes];
}
