 "use client";
 
import { useEffect } from "react";
import { useRouter } from "next/navigation";
 
export default function ProgramsIndexPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/programs/ai-cyber-secuirty-training-program");
    }, [router]);
    return null;
}
