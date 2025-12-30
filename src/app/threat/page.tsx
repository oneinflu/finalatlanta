import { ThreatHero } from "@/app/threat-hero";
import { ThreatMap } from "@/app/threat-map";
import { ThreatFacts } from "@/app/threat-facts";
import { ThreatAttacks } from "@/app/threat-attacks";

export default function ThreatPage() {
    return (
        <main>
            <ThreatHero />
            <ThreatMap />
            <ThreatFacts />
            <ThreatAttacks />
        </main>
    );
}
