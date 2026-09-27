import type { Lawyer } from "@/lib/content/lawyers";
import { LawyerCard } from "@/components/lawyers/lawyer-card";

export function LawyerGrid({ lawyers }: { lawyers: Lawyer[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {lawyers.map((lawyer) => (
        <LawyerCard key={lawyer.slug} lawyer={lawyer} />
      ))}
    </div>
  );
}
