import type { PracticeArea } from "@/lib/content/practice-areas";
import { PracticeAreaCard } from "@/components/practice-areas/practice-area-card";

export function PracticeAreaGrid({ areas }: { areas: PracticeArea[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => (
        <PracticeAreaCard key={area.slug} area={area} />
      ))}
    </div>
  );
}
