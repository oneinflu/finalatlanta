"use client";
import { ShineButton } from "@/components/base/buttons/shine-button";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Stars02, FileCode01, BarChart02, ArrowRight } from "@untitledui/icons";
import * as THREE from "three";
import { Dialog, DialogTrigger, Modal, ModalOverlay } from "@/components/application/modals/modal";
import { Input } from "@/components/base/input/input";

export const CAASPHero = () => {
    const [scrollY, setScrollY] = useState(0);
    const threeRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number>(0);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.Camera | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const planeRef = useRef<THREE.Mesh | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY || 0);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const container = threeRef.current;
        if (!container) return;
        const w = container.clientWidth || window.innerWidth;
        const h = Math.max(container.clientHeight, 480);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.innerHTML = "";
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        camera.position.z = 1;

        const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2(w, h) },
                u_scroll: { value: 0 },
            },
            vertexShader: `
                varying vec2 v_uv;
                void main() {
                    v_uv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                uniform float u_time;
                uniform vec2 u_resolution;
                uniform float u_scroll;
                varying vec2 v_uv;
                float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
                float noise(vec2 p){
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    float a = hash(i);
                    float b = hash(i + vec2(1.0, 0.0));
                    float c = hash(i + vec2(0.0, 1.0));
                    float d = hash(i + vec2(1.0, 1.0));
                    vec2 u = f*f*(3.0-2.0*f);
                    return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
                }
                float fbm(vec2 p){
                    float v = 0.0;
                    float a = 0.5;
                    for(int i=0;i<5;i++){
                        v += a * noise(p);
                        p *= 2.0;
                        a *= 0.5;
                    }
                    return v;
                }
                void main(){
                    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
                    vec2 p = v_uv * aspect * 3.0;
                    float t = u_time;
                    float n1 = fbm(p + t * 0.20);
                    float n2 = fbm(p * 1.8 - t * 0.15);
                    vec2 flow = vec2(n1 - n2, n2 - n1);
                    vec2 adv = v_uv + 0.08 * flow + u_scroll * 0.02 * sin(t + v_uv * 6.2831);
                    float f = fbm(adv * 4.0 + t * 0.12);
                    vec3 base = vec3(0.05, 0.04, 0.09);
                    vec3 c1 = vec3(0.25, 0.18, 0.42);
                    vec3 c2 = vec3(0.50, 0.35, 0.85);
                    vec3 col = mix(c1, c2, smoothstep(0.3, 0.9, f));
                    col += 0.08 * vec3(pow(f, 3.0));
                    col = base + col;
                    float vign = smoothstep(0.0, 0.7, length(v_uv - 0.5));
                    col *= 1.0 - 0.15 * vign;
                    gl_FragColor = vec4(col, 0.55);
                }
            `,
            transparent: true,
        });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        rendererRef.current = renderer;
        cameraRef.current = camera;
        sceneRef.current = scene;
        planeRef.current = plane;

        const onResize = () => {
            const ww = container.clientWidth || window.innerWidth;
            const hh = Math.max(container.clientHeight, 480);
            renderer.setSize(ww, hh);
            const u = (material.uniforms as { u_resolution: { value: THREE.Vector2 } });
            u.u_resolution.value.set(ww, hh);
        };
        window.addEventListener("resize", onResize);

        let t = 0;
        const loop = () => {
            t += 0.008;
            const s = Math.min(1, (window.scrollY || 0) / 900);
            const u = material.uniforms as {
                u_time: { value: number };
                u_scroll: { value: number };
            };
            u.u_time.value = t;
            u.u_scroll.value = s;
            renderer.render(scene, camera);
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", onResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            container.innerHTML = "";
            rendererRef.current = null;
            cameraRef.current = null;
            sceneRef.current = null;
            planeRef.current = null;
        };
    }, []);

    return (
        <section className="relative w-full bg-[#0A0D12] py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div ref={threeRef} className="absolute inset-0 z-0" />
                <motion.div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background:
                            "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
                    }}
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute left-0 top-0 h-[55vh] w-[55vw] blur-3xl opacity-35"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(158,119,237,0.28) 0%, rgba(127,86,217,0.14) 35%, rgba(127,86,217,0) 65%)",
                    }}
                    animate={{ x: [0, 10, -6, 0], y: [0, -6, 8, 0] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute right-0 bottom-8 h-[55vh] w-[55vw] blur-3xl opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.24) 0%, rgba(105,65,198,0.12) 35%, rgba(105,65,198,0) 65%)",
                    }}
                    animate={{ x: [0, -12, 8, 0], y: [0, 10, -6, 0] }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "80px 80px, 80px 80px",
                        backgroundPosition: "center",
                    }}
                    initial={{ opacity: 0.14 }}
                    animate={{ opacity: 0.22 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
                    <h1 className="font-bold tracking-tight leading-tight">
                        <span className="block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.6rem,7vw,5.6rem)]">
                            Agentic AI Security Professional (CAASP)
                        </span>
                    </h1>
                    <p className="max-w-3xl text-lg text-white/80 md:text-xl">
                        Secure autonomous and multi-agent AI systems before they become the next breach.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, -2, 1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Agentic AI
                        </motion.span>
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, 2, -1, 0] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Multi-Agent
                        </motion.span>
                        <motion.span
                            className="rounded-full bg-[#0A0D12]/80 px-3 py-1 text-sm text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
                            animate={{ y: [0, -1, 2, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Red Teaming
                        </motion.span>
                    </div>
                    <div className="mt-8 flex w-full items-center justify-center">
                        <div className="flex items-center gap-6 md:gap-8">
                            <div className="flex items-center gap-2 text-white/85">
                                <FileCode01 className="size-5 text-white/85" />
                                <span className="text-sm">ISO 42001</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <Stars02 className="size-5 text-white/85" />
                                <span className="text-sm">MITRE ATLAS</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <BarChart02 className="size-5 text-white/85" />
                                <span className="text-sm">NIST AI RMF</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/85">
                                <span className="text-sm">120 Hours · Hands-on</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex w-full items-center justify-center">
                <DialogTrigger>
                    <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="xl" iconTrailing={ArrowRight}>
                        Enroll Now
                    </ShineButton>
                    <ModalOverlay className="!items-center !justify-center">
                        {({ state }) => (
                            <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                                <Dialog className="w-[min(90vw,28rem)] max-w-md rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-2xl">
                                    <div className="flex w-full flex-col items-center text-center">
                                        <h3 className="text-xl font-semibold text-white">Apply for CAASP</h3>
                                        <p className="mt-1 text-sm text-white/70">Fill in your details to submit your application.</p>
                                        <form
                                            className="mt-5 w-full flex flex-col gap-3 text-left"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                (e.currentTarget as HTMLFormElement).reset();
                                                state.close();
                                                const thanks = document.getElementById("thanks-confetti");
                                                if (thanks) thanks.click();
                                            }}
                                        >
                                            <Input label="Full Name" name="name" placeholder="Jane Doe" />
                                            <Input label="Email" name="email" type="email" placeholder="jane@company.com" />
                                            <Input label="Phone" name="phone" placeholder="+1 404 555 0123" />
                                            <Input label="City" name="city" placeholder="Atlanta" />
                                            <div className="mt-4 flex items-center justify-end gap-2">
                                                <ShineButton color="secondary" size="lg" onClick={() => state.close()}>
                                                    Cancel
                                                </ShineButton>
                                                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight} type="submit">
                                                    Submit
                                                </ShineButton>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog>
                            </Modal>
                        )}
                    </ModalOverlay>
                </DialogTrigger>
            </div>
            <motion.div
                className="fixed bottom-6 right-6 z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: scrollY > 100 ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <DialogTrigger>
                    <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight}>
                        Apply Now
                    </ShineButton>
                    <ModalOverlay className="!items-center !justify-center">
                        {({ state }) => (
                            <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                                <Dialog className="w-[min(90vw,28rem)] max-w-md rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-2xl">
                                    <div className="flex w-full flex-col items-center text-center">
                                        <h3 className="text-xl font-semibold text-white">Apply for CAASP</h3>
                                        <p className="mt-1 text-sm text-white/70">Fill in your details to submit your application.</p>
                                        <form
                                            className="mt-5 w-full flex flex-col gap-3 text-left"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                (e.currentTarget as HTMLFormElement).reset();
                                                state.close();
                                                const thanks = document.getElementById("thanks-confetti");
                                                if (thanks) thanks.click();
                                            }}
                                        >
                                            <Input label="Full Name" name="name" placeholder="Jane Doe" />
                                            <Input label="Email" name="email" type="email" placeholder="jane@company.com" />
                                            <Input label="Phone" name="phone" placeholder="+1 404 555 0123" />
                                            <Input label="City" name="city" placeholder="Atlanta" />
                                            <div className="mt-4 flex items-center justify-end gap-2">
                                                <ShineButton color="secondary" size="lg" onClick={() => state.close()}>
                                                    Cancel
                                                </ShineButton>
                                                <ShineButton className="cursor-cta-trendy" color="secondary-destructive" size="lg" iconTrailing={ArrowRight} type="submit">
                                                    Submit
                                                </ShineButton>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog>
                            </Modal>
                        )}
                    </ModalOverlay>
                </DialogTrigger>
            </motion.div>
            <DialogTrigger>
                <button id="thanks-confetti" className="hidden">open</button>
                <ModalOverlay className="!items-center !justify-center">
                    {({ state }) => (
                        <Modal className="w-full flex items-center justify-center cursor-auto will-change-transform">
                            <Dialog className="relative w-[min(90vw,28rem)] max-w-md overflow-hidden rounded-2xl bg-[#0B0D12] p-6 ring-1 ring-white/10 shadow-2xl">
                                <div className="pointer-events-none absolute inset-0 opacity-60">
                                    <ConfettiBurst />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold text-white">Thank you for applying!</h3>
                                    <p className="mt-1 text-sm text-white/75">We’ve received your application. Our advisors will reach out shortly.</p>
                                    <div className="mt-5 flex justify-end">
                                        <ShineButton color="secondary-destructive" size="lg" onClick={() => state.close()}>
                                            Close
                                        </ShineButton>
                                    </div>
                                </div>
                            </Dialog>
                        </Modal>
                    )}
                </ModalOverlay>
            </DialogTrigger>
        </section>
    );
};

const ConfettiBurst = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const w = 600;
        const h = 300;
        canvas.width = w;
        canvas.height = h;
        const colors = ["#7F56D9", "#60A5FA", "#34D399", "#F59E0B", "#F472B6", "#22D3EE", "#FFFFFF"];
        const parts = Array.from({ length: 140 }).map(() => ({
            x: Math.random() * w,
            y: -20 - Math.random() * 80,
            vx: -1 + Math.random() * 2,
            vy: 2 + Math.random() * 2,
            g: 0.035 + Math.random() * 0.015,
            s: 3 + Math.random() * 4,
            r: Math.random() * Math.PI,
            dr: -0.06 + Math.random() * 0.12,
            c: colors[(Math.random() * colors.length) | 0],
        }));
        let running = true;
        let t = 0;
        const loop = () => {
            if (!running) return;
            t += 1;
            ctx.clearRect(0, 0, w, h);
            for (const p of parts) {
                p.vy += p.g;
                p.x += p.vx;
                p.y += p.vy;
                p.r += p.dr;
                if (p.y > h + 40) {
                    p.y = -20;
                    p.vy = 2 + Math.random() * 2;
                }
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.r);
                ctx.fillStyle = p.c;
                ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
                ctx.restore();
            }
            if (t < 240) requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
        return () => {
            running = false;
        };
    }, []);
    return <canvas className="size-full" ref={ref} />;
};
