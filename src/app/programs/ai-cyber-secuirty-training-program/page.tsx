import { CAASPHero } from "@/app/programs/caasp-hero";
import { WhyProgramExists } from "@/app/programs/why-program-exists";
import { AgenticVisualStory } from "@/app/programs/agentic-visual-story";
import { MarketGapSummary } from "@/app/programs/market-gap-summary";
import { MarketDemand } from "@/app/programs/market-demand";
import { JobRoles } from "@/app/programs/job-roles";
import { SkillsGap } from "@/app/programs/skills-gap";
import { Curriculum } from "@/app/programs/curriculum";
import { Certification } from "@/app/programs/certification";
import { CourseOutcomes } from "@/app/programs/course-outcomes";
import { CertificationTrust } from "@/app/programs/certification-trust";
import { Capstone } from "@/app/programs/capstone";

export default function AICyberProgramPage() {
    return (
        <main>
            <CAASPHero />
            <WhyProgramExists />
            <CourseOutcomes />
            <Curriculum />
            <Capstone />
            <CertificationTrust />
           
        </main>
    );
}
