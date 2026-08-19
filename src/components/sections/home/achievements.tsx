import { getFeaturedAchievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";

export function AchievementsSection() {
  const achievements = getFeaturedAchievements();

  return (
    <section className="py-20 md:py-28 border-t border-zinc-900">
      <div className="container-wide">
        <SectionHeading
          label="Proof & Recognition"
          title="Milestones, patents & awards"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {achievements.map((achievement, i) => (
            <AnimateIn key={`${achievement.title}-${achievement.year}`} delay={i * 0.05}>
              <div className="flex items-baseline justify-between gap-4 py-3.5 border-b border-zinc-900">
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="text-xs font-mono text-zinc-600 shrink-0 w-12">
                    {achievement.year}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-medium text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-zinc-600 shrink-0 hidden sm:block">
                  {achievement.location}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
