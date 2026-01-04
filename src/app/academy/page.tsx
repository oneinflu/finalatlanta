import { AcademyHero } from "@/app/academy-hero";
import { AcademyPillars } from "@/app/academy-pillars";
import { AcademyLearningStrip } from "@/app/academy-learning-strip";
import { ProgramsFeaturedStack } from "@/app/programs-featured-stack";


export default function AcademyPage() {
    return (
        <main>
            <AcademyHero />
            <AcademyPillars />
            <AcademyLearningStrip />
            <ProgramsFeaturedStack />
        </main>
    );
}
