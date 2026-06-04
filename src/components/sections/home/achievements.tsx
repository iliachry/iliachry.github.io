import { getFeaturedAchievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";

export function AchievementsSection() {
  const achievements = getFeaturedAchievements();

  return (
    <section className="py-24 md:py-32 bg-surface/50">
      <div className="container-wide">
        <SectionHeading
          label="Recognition"
          title="Selected proof"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {achievements.map((achievement, i) => (
            <AnimateIn key={`${achievement.title}-${achievement.year}`} delay={i * 0.06}>
              <div className="flex items-baseline gap-4 py-4 border-b border-border last:border-b-0">
                <span className="text-xs font-mono text-text-tertiary shrink-0 w-16">
                  {achievement.year}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-text-primary">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-text-tertiary mt-0.5">
                    {achievement.detail}
                  </p>
                </div>
                <span className="text-xs text-text-tertiary shrink-0 hidden sm:block">
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
