import type { Article } from "@/lib/content/articles";
import { ArticleCard } from "@/components/articles/article-card";

export function ArticleGrid({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
