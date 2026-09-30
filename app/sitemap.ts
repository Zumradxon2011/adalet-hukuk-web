import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site-config";
import { practiceAreas } from "@/lib/content/practice-areas";
import { lawyers } from "@/lib/content/lawyers";
import { articles } from "@/lib/content/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

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
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const practiceAreaRoutes = practiceAreas.map((area) => ({
    url: `${siteConfig.url}/hukuk-alanlari/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const lawyerRoutes = lawyers
    .filter((lawyer) => lawyer.hasFullProfile)
    .map((lawyer) => ({
      url: `${siteConfig.url}/avukatlar/${lawyer.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/makaleler/${article.slug}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...lawyerRoutes, ...articleRoutes];
}