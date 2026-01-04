(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/academy-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcademyHero",
    ()=>AcademyHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const AcademyHero = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const threeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademyHero.useEffect": ()=>{
            const container = canvasRef.current;
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, width / height, 0.1, 1000);
            camera.position.z = 80;
            const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            scene.add(group);
            const count = 140;
            const range = 120;
            const positions = new Float32Array(count * 3);
            const velocities = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * range;
                positions[i3 + 1] = (Math.random() - 0.5) * range;
                positions[i3 + 2] = (Math.random() - 0.5) * range * 0.6;
                velocities[i3] = (Math.random() - 0.5) * 0.04;
                velocities[i3 + 1] = (Math.random() - 0.5) * 0.04;
                velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
            }
            const geom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geom.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            const pointsMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("rgb(127,86,217)"),
                size: 2,
                transparent: true,
                opacity: 0.9
            });
            const points = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geom, pointsMat);
            group.add(points);
            const threshold = 22;
            const linePositions = [];
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                const ix = positions[i3];
                const iy = positions[i3 + 1];
                const iz = positions[i3 + 2];
                for(let j = i + 1; j < count; j++){
                    const j3 = j * 3;
                    const jx = positions[j3];
                    const jy = positions[j3 + 1];
                    const jz = positions[j3 + 2];
                    const dx = ix - jx;
                    const dy = iy - jy;
                    const dz = iz - jz;
                    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (d < threshold) {
                        linePositions.push(ix, iy, iz, jx, jy, jz);
                    }
                }
            }
            const lineGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            lineGeom.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](new Float32Array(linePositions), 3));
            const lineMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("rgb(127,86,217)"),
                transparent: true,
                opacity: 0.35
            });
            const lines = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](lineGeom, lineMat);
            group.add(lines);
            const state = threeState.current;
            state.renderer = renderer;
            state.scene = scene;
            state.camera = camera;
            state.group = group;
            state.points = points;
            state.lines = lines;
            state.velocities = velocities;
            const onResize = {
                "AcademyHero.useEffect.onResize": ()=>{
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    renderer.setSize(w, h);
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                }
            }["AcademyHero.useEffect.onResize"];
            window.addEventListener("resize", onResize, {
                passive: true
            });
            let scrollTarget = 0;
            const onScroll = {
                "AcademyHero.useEffect.onScroll": ()=>{
                    scrollTarget = window.scrollY || 0;
                }
            }["AcademyHero.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            const animate = {
                "AcademyHero.useEffect.animate": ()=>{
                    const pos = geom.getAttribute("position");
                    for(let i = 0; i < count; i++){
                        const i3 = i * 3;
                        pos.array[i3] += velocities[i3];
                        pos.array[i3 + 1] += velocities[i3 + 1];
                        pos.array[i3 + 2] += velocities[i3 + 2];
                        if (pos.array[i3] > range / 2 || pos.array[i3] < -range / 2) velocities[i3] *= -1;
                        if (pos.array[i3 + 1] > range / 2 || pos.array[i3 + 1] < -range / 2) velocities[i3 + 1] *= -1;
                        if (pos.array[i3 + 2] > range * 0.3 || pos.array[i3 + 2] < -range * 0.3) velocities[i3 + 2] *= -1;
                    }
                    pos.needsUpdate = true;
                    group.position.y = -scrollTarget * 0.02;
                    camera.position.z = 80 + scrollTarget * 0.01;
                    renderer.render(scene, camera);
                    state.animationId = requestAnimationFrame(animate);
                }
            }["AcademyHero.useEffect.animate"];
            animate();
            return ({
                "AcademyHero.useEffect": ()=>{
                    cancelAnimationFrame(state.animationId || 0);
                    window.removeEventListener("resize", onResize);
                    window.removeEventListener("scroll", onScroll);
                    renderer.dispose();
                    pointsMat.dispose();
                    lineMat.dispose();
                    geom.dispose();
                    lineGeom.dispose();
                    container.removeChild(renderer.domElement);
                }
            })["AcademyHero.useEffect"];
        }
    }["AcademyHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full overflow-hidden bg-primary bg-base-near-black min-h-screen py-24 md:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-90",
                style: {
                    background: "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-hero.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasRef,
                className: "absolute inset-0 z-[1]"
            }, void 0, false, {
                fileName: "[project]/src/app/academy-hero.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.12
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: 0.2
                },
                className: "absolute inset-0",
                style: {
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "3px 3px, 4px 4px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-hero.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.32
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: 0.32
                },
                className: "absolute left-0 top-0 h-[55vh] w-[55vw] blur-3xl",
                style: {
                    background: "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.2) 0%, rgba(127,86,217,0.12) 35%, rgba(127,86,217,0) 65%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-hero.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.28
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: 0.4
                },
                className: "absolute right-0 bottom-8 h-[55vh] w-[55vw] blur-3xl",
                style: {
                    background: "radial-gradient(circle at 70% 70%, rgba(127,86,217,0.22) 0%, rgba(68,76,231,0.12) 35%, rgba(68,76,231,0) 65%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-hero.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex w-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-container px-4 md:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-5xl flex-col items-center text-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 8,
                                    letterSpacing: 1.4
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    letterSpacing: 0.6
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ],
                                    delay: 0.28
                                },
                                className: "inline-flex items-center rounded-full p-[1px] ring-1 ring-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 rounded-full bg-[#0A0D12]/80 px-3 py-1 text-md font-medium text-white/90 ring-1 ring-white/10 backdrop-blur-sm",
                                    children: "ATLANTA SOC ACADEMY"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academy-hero.tsx",
                                    lineNumber: 202,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-hero.tsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.75,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ],
                                    delay: 0.36
                                },
                                className: "font-bold tracking-tight leading-tight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block bg-gradient-to-b from-white/95 via-white/80 to-white/50 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] text-[clamp(2.6rem,7vw,5.6rem)]",
                                    children: "Training professionals for modern security operations"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/academy-hero.tsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-hero.tsx",
                                lineNumber: 206,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ],
                                    delay: 0.44
                                },
                                className: "mt-4 max-w-3xl text-lg text-white/80 md:text-xl",
                                children: "Focused on real-world SOC, AI security, and autonomous system defense."
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-hero.tsx",
                                lineNumber: 216,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/academy-hero.tsx",
                        lineNumber: 195,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/academy-hero.tsx",
                    lineNumber: 194,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/academy-hero.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/academy-hero.tsx",
        lineNumber: 154,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AcademyHero, "Q0xWn7Dzcmxd7byatEWhPqqa2uc=");
_c = AcademyHero;
var _c;
__turbopack_context__.k.register(_c, "AcademyHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/academy-pillars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcademyPillars",
    ()=>AcademyPillars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const PillarCard = ({ title, index, onHover, offsetY })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rx: 0,
        ry: 0
    });
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseMove = (e)=>{
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        const ry = x / (r.width / 2) * 3;
        const rx = -y / (r.height / 2) * 3;
        setTilt({
            rx,
            ry
        });
    };
    const handleMouseEnter = ()=>{
        setHovering(true);
        onHover(ref.current?.getBoundingClientRect() || null);
    };
    const handleMouseLeave = ()=>{
        setHovering(false);
        setTilt({
            rx: 0,
            ry: 0
        });
        onHover(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            y: 24,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        viewport: {
            once: true,
            margin: "-20% 0px -20% 0px"
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: "relative rounded-2xl bg-[#0B0F14]/70 backdrop-blur-md p-8 ring-1 ring-white/10",
        style: {
            transform: `translateY(${offsetY}px) translateZ(${index * 2}px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            boxShadow: hovering ? "0 0 0 1px rgba(127,86,217,0.55), 0 28px 68px rgba(0,0,0,0.45), 0 0 60px rgba(68,76,231,0.22)" : "0 0 0 0.5px rgba(127,86,217,0.35), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.12)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl -z-[1]",
                style: {
                    background: "radial-gradient(600px circle at 20% 10%, rgba(139,92,246,0.16), transparent 40%)",
                    opacity: hovering ? 0.9 : 0.6
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-pillars.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold text-white/80",
                        children: "Academy Pillar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/academy-pillars.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl md:text-3xl font-semibold text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/academy-pillars.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-white/70",
                        children: "Core discipline within our training framework."
                    }, void 0, false, {
                        fileName: "[project]/src/app/academy-pillars.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/academy-pillars.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 rounded-2xl",
                style: {
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-pillars.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/academy-pillars.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PillarCard, "LVZ6mXc0cfg3VmURWy+fNG0av5k=");
_c = PillarCard;
const AcademyPillars = ()=>{
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spriteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const threeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademyPillars.useEffect": ()=>{
            const container = canvasRef.current;
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, 0.1, 1000);
            camera.position.z = 10;
            const size = 256;
            const cvs = document.createElement("canvas");
            cvs.width = size;
            cvs.height = size;
            const ctx = cvs.getContext("2d");
            const grd = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grd.addColorStop(0, "rgba(127,86,217,0.25)");
            grd.addColorStop(0.4, "rgba(68,76,231,0.15)");
            grd.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, size, size);
            const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](cvs);
            tex.wrapS = tex.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampToEdgeWrapping"];
            const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: tex,
                transparent: true,
                opacity: 0.0,
                depthTest: false
            });
            const sprite = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](mat);
            sprite.scale.set(600, 600, 1);
            scene.add(sprite);
            spriteRef.current = sprite;
            const state = threeRef.current;
            state.renderer = renderer;
            state.scene = scene;
            state.camera = camera;
            const onResize = {
                "AcademyPillars.useEffect.onResize": ()=>{
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    renderer.setSize(w, h);
                    camera.left = -w / 2;
                    camera.right = w / 2;
                    camera.top = h / 2;
                    camera.bottom = -h / 2;
                    camera.updateProjectionMatrix();
                }
            }["AcademyPillars.useEffect.onResize"];
            window.addEventListener("resize", onResize, {
                passive: true
            });
            const animate = {
                "AcademyPillars.useEffect.animate": ()=>{
                    renderer.render(scene, camera);
                    state.animationId = requestAnimationFrame(animate);
                }
            }["AcademyPillars.useEffect.animate"];
            animate();
            return ({
                "AcademyPillars.useEffect": ()=>{
                    cancelAnimationFrame(state.animationId || 0);
                    window.removeEventListener("resize", onResize);
                    renderer.dispose();
                    tex.dispose();
                    mat.dispose();
                    container.removeChild(renderer.domElement);
                }
            })["AcademyPillars.useEffect"];
        }
    }["AcademyPillars.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademyPillars.useEffect": ()=>{
            const onScroll = {
                "AcademyPillars.useEffect.onScroll": ()=>{
                    const container = containerRef.current;
                    if (!container) return;
                    const rect = container.getBoundingClientRect();
                    const vh = window.innerHeight || 1;
                    const start = vh * 0.9;
                    const end = -rect.height * 0.2;
                    const raw = (start - rect.top) / (start - end);
                    const p = Math.max(0, Math.min(1, raw));
                    setProgress(p);
                }
            }["AcademyPillars.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "AcademyPillars.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["AcademyPillars.useEffect"];
        }
    }["AcademyPillars.useEffect"], []);
    const handleHover = (rect)=>{
        const container = containerRef.current;
        const sprite = spriteRef.current;
        const state = threeRef.current;
        if (!container || !sprite || !state.camera) return;
        if (!rect) {
            const mat = sprite.material;
            mat.opacity = Math.max(0, mat.opacity - 0.1);
            return;
        }
        const cRect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2 - cRect.left - cRect.width / 2;
        const cy = -(rect.top + rect.height / 2 - cRect.top - cRect.height / 2);
        sprite.position.set(cx, cy, 0);
        const mat = sprite.material;
        mat.opacity = Math.min(0.28, mat.opacity + 0.12);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-base-near-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-pillars.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-15",
                style: {
                    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "80px 80px, 80px 80px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/academy-pillars.tsx",
                lineNumber: 205,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative mx-auto w-full max-w-container px-4 md:px-8 py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: canvasRef,
                        className: "absolute inset-0 -z-[1]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/academy-pillars.tsx",
                        lineNumber: 214,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-4xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-md font-semibold text-brand-secondary",
                                children: "Academy Pillars"
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-pillars.tsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-display-sm font-semibold text-white md:text-display-md",
                                children: "Core Disciplines"
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-pillars.tsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-pillars.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/academy-pillars.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PillarCard, {
                                title: "Security Operations",
                                index: 0,
                                onHover: handleHover,
                                offsetY: -progress * 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-pillars.tsx",
                                lineNumber: 221,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PillarCard, {
                                title: "Agentic AI Security",
                                index: 1,
                                onHover: handleHover,
                                offsetY: -progress * 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-pillars.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PillarCard, {
                                title: "Governance & Risk",
                                index: 2,
                                onHover: handleHover,
                                offsetY: -progress * 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-pillars.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/academy-pillars.tsx",
                        lineNumber: 220,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/academy-pillars.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/academy-pillars.tsx",
        lineNumber: 197,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AcademyPillars, "8fj8+pQFmBKq72ftNEbgoDt+JqY=");
_c1 = AcademyPillars;
var _c, _c1;
__turbopack_context__.k.register(_c, "PillarCard");
__turbopack_context__.k.register(_c1, "AcademyPillars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/academy-learning-strip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcademyLearningStrip",
    ()=>AcademyLearningStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const cards = [
    "Learn",
    "Practice",
    "Break",
    "Secure",
    "Validate"
];
const AcademyLearningStrip = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [trackWidth, setTrackWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2400);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [translateX, setTranslateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const targetXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [wrapperHeight, setWrapperHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2000);
    const rafTranslateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [autoTriggered, setAutoTriggered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademyLearningStrip.useEffect": ()=>{
            const setMobileFlag = {
                "AcademyLearningStrip.useEffect.setMobileFlag": ()=>{
                    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
                }
            }["AcademyLearningStrip.useEffect.setMobileFlag"];
            setMobileFlag();
            window.addEventListener("resize", setMobileFlag, {
                passive: true
            });
            const measure = {
                "AcademyLearningStrip.useEffect.measure": ()=>{
                    const vp = viewportRef.current;
                    const tr = trackRef.current;
                    if (!vp || !tr) return;
                    setTrackWidth(tr.scrollWidth);
                    const maxX = Math.max(0, tr.scrollWidth - vp.clientWidth);
                    setWrapperHeight(vp.clientHeight + (isMobile ? 20 : maxX));
                }
            }["AcademyLearningStrip.useEffect.measure"];
            measure();
            const roVp = new ResizeObserver(measure);
            const roTr = new ResizeObserver(measure);
            if (viewportRef.current) roVp.observe(viewportRef.current);
            if (trackRef.current) roTr.observe(trackRef.current);
            const onScrollY = {
                "AcademyLearningStrip.useEffect.onScrollY": ()=>{
                    const wrapper = wrapperRef.current;
                    const vp = viewportRef.current;
                    const tr = trackRef.current;
                    if (!wrapper || !vp || !tr) return;
                    const rect = wrapper.getBoundingClientRect();
                    const start = vp.clientHeight;
                    const end = -(wrapperHeight - vp.clientHeight);
                    const raw = (start - rect.top) / (start - end);
                    const p = Math.max(0, Math.min(1, raw));
                    const maxX = tr.scrollWidth - vp.clientWidth;
                    targetXRef.current = -p * maxX;
                    if (p > 0.985 && !autoTriggered) {
                        const next = containerRef.current?.nextElementSibling;
                        if (next) {
                            setAutoTriggered(true);
                            next.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                            window.setTimeout({
                                "AcademyLearningStrip.useEffect.onScrollY": ()=>setAutoTriggered(false)
                            }["AcademyLearningStrip.useEffect.onScrollY"], 1200);
                        }
                    }
                }
            }["AcademyLearningStrip.useEffect.onScrollY"];
            if (!isMobile) {
                onScrollY();
                window.addEventListener("scroll", onScrollY, {
                    passive: true
                });
            }
            return ({
                "AcademyLearningStrip.useEffect": ()=>{
                    roVp.disconnect();
                    roTr.disconnect();
                    window.removeEventListener("scroll", onScrollY);
                    window.removeEventListener("resize", setMobileFlag);
                }
            })["AcademyLearningStrip.useEffect"];
        }
    }["AcademyLearningStrip.useEffect"], [
        wrapperHeight,
        autoTriggered,
        isMobile
    ]);
    // removed duplicate measurement effect; primary measurement and scroll mapping handled above
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademyLearningStrip.useEffect": ()=>{
            const animateX = {
                "AcademyLearningStrip.useEffect.animateX": ()=>{
                    const current = translateX;
                    const target = targetXRef.current;
                    const next = current + (target - current) * (isMobile ? 0 : 0.18);
                    setTranslateX(next);
                    rafTranslateRef.current = requestAnimationFrame(animateX);
                }
            }["AcademyLearningStrip.useEffect.animateX"];
            animateX();
            return ({
                "AcademyLearningStrip.useEffect": ()=>{
                    if (rafTranslateRef.current) cancelAnimationFrame(rafTranslateRef.current);
                }
            })["AcademyLearningStrip.useEffect"];
        }
    }["AcademyLearningStrip.useEffect"], [
        translateX,
        isMobile
    ]);
    const bgTranslate = translateX * 0.4;
    const dashOffset = -translateX * 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative w-full bg-base-near-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-container px-4 md:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-md font-semibold text-brand-secondary",
                            children: "How Learning Happens"
                        }, void 0, false, {
                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-display-sm font-semibold text-white md:text-display-md",
                            children: "Parallax Story"
                        }, void 0, false, {
                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-white/75",
                            children: "A journey through training — not just steps."
                        }, void 0, false, {
                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                    lineNumber: 99,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    ref: wrapperRef,
                    className: "relative mt-6",
                    style: {
                        height: `${wrapperHeight}px`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: viewportRef,
                        className: "md:sticky md:top-[10vh] md:h-[80vh] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: bgRef,
                                className: "absolute inset-0 pointer-events-none -z-[1] hidden md:block",
                                style: {
                                    transform: `translateX(${bgTranslate}px)`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute left-0 top-1/2 -translate-y-1/2",
                                        width: trackWidth,
                                        height: "300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                            d: "M 40 150 C 260 120, 520 180, 760 150 S 1240 130, 1560 160 S 1880 140, 2200 150",
                                            stroke: "rgba(127,86,217,0.35)",
                                            strokeWidth: "2",
                                            fill: "none",
                                            strokeDasharray: "6 10",
                                            style: {
                                                strokeDashoffset: dashOffset
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/academy-learning-strip.tsx",
                                        lineNumber: 107,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-20",
                                        style: {
                                            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                                            backgroundSize: "80px 80px, 80px 80px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/academy-learning-strip.tsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/academy-learning-strip.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: trackRef,
                                className: "flex gap-4 md:gap-8 px-4 md:px-8 will-change-transform",
                                style: {
                                    transform: isMobile ? undefined : `translateX(${translateX}px)`
                                },
                                children: cards.map((title, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 w-[92vw] sm:w-[86vw] md:w-[55vw]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                y: 18,
                                                opacity: 0
                                            },
                                            whileInView: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            viewport: {
                                                once: true,
                                                margin: "-20% 0px -20% 0px"
                                            },
                                            transition: {
                                                duration: 0.7,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1
                                                ],
                                                delay: i * 0.08
                                            },
                                            className: "relative md:h-[360px] rounded-2xl bg-[#0B0F14]/70 backdrop-blur-md p-6 md:p-10 ring-1 ring-white/10",
                                            style: {
                                                boxShadow: "0 0 0 0.5px rgba(127,86,217,0.3), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.12)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-2xl -z-[1] opacity-60",
                                                    style: {
                                                        background: "radial-gradient(600px circle at 18% 12%, rgba(139,92,246,0.16), transparent 40%)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-4 md:gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl md:text-3xl font-semibold text-white",
                                                                    children: title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 text-white/75 text-md md:text-lg",
                                                                    children: [
                                                                        title === "Learn" && "Concepts, frameworks, and mental models to reason about complex systems.",
                                                                        title === "Practice" && "Hands-on labs with SOC tools, agent workflows, and response playbooks.",
                                                                        title === "Break" && "Adversarial thinking — red teaming agent systems and probing guardrails.",
                                                                        title === "Secure" && "Hardening, monitoring, and automated defenses aligned to standards.",
                                                                        title === "Validate" && "Assessments, simulations, and real-world readiness validation."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "mt-3 md:mt-4 text-white/70 text-sm md:text-md space-y-1.5",
                                                                    children: [
                                                                        title === "Learn" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Foundations: SOC, AI security, governance"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 167,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Threat models and system diagrams"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 168,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Standards orientation (NIST, ISO, MITRE)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 169,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true),
                                                                        title === "Practice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• SIEM, EDR, telemetry pipelines"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Agentic workflows and tools"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 175,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Incident response drills"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 176,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true),
                                                                        title === "Break" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Prompt injection and jailbreaking"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 181,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Data exfil and autonomy abuse"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 182,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Multi-agent failure modes"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 183,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true),
                                                                        title === "Secure" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Guardrails and containment"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 188,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Policies, monitoring, and alerts"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 189,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Recovery and resilience"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 190,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true),
                                                                        title === "Validate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Performance and reliability checks"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 195,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• SOC readiness scoring"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 196,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "• Continuous improvement loops"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                    lineNumber: 197,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "hidden md:block min-w-[180px] w-[180px] h-[120px]",
                                                            viewBox: "0 0 180 120",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                        id: "g",
                                                                        x1: "0",
                                                                        x2: "1",
                                                                        y1: "0",
                                                                        y2: "1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "0",
                                                                                stopColor: "rgba(127,86,217,0.9)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                lineNumber: 205,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                offset: "1",
                                                                                stopColor: "rgba(68,76,231,0.7)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                                lineNumber: 206,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "30",
                                                                    cy: "40",
                                                                    r: "3",
                                                                    fill: "url(#g)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "90",
                                                                    cy: "25",
                                                                    r: "3",
                                                                    fill: "url(#g)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "140",
                                                                    cy: "50",
                                                                    r: "3",
                                                                    fill: "url(#g)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "70",
                                                                    cy: "85",
                                                                    r: "3",
                                                                    fill: "url(#g)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "130",
                                                                    cy: "90",
                                                                    r: "3",
                                                                    fill: "url(#g)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M30 40 L90 25 L140 50 L130 90 L70 85 Z",
                                                                    stroke: "rgba(127,86,217,0.5)",
                                                                    strokeWidth: "1.5",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/academy-learning-strip.tsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, title, false, {
                                        fileName: "[project]/src/app/academy-learning-strip.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/academy-learning-strip.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/academy-learning-strip.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/academy-learning-strip.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/academy-learning-strip.tsx",
            lineNumber: 98,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/academy-learning-strip.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AcademyLearningStrip, "rE9i4+fYtjKQ1cS2omFc+kSTIQI=");
_c = AcademyLearningStrip;
var _c;
__turbopack_context__.k.register(_c, "AcademyLearningStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/programs-featured-stack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgramsFeaturedStack",
    ()=>ProgramsFeaturedStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const programs = [
    {
        title: "Agentic AI Security Professional (CAASP)",
        subtitle: "Featured Program",
        href: "/programs/ai-cyber-secuirty-training-program",
        featured: true
    },
    {
        title: "SOC Analyst Pathway",
        subtitle: "Telemetry, SIEM, EDR, incident workflows",
        href: "/programs/ai-cyber-secuirty-training-program"
    },
    {
        title: "Autonomous Systems Defense",
        subtitle: "Agent safety, containment, monitoring",
        href: "/programs/ai-cyber-secuirty-training-program"
    }
];
const ProgramsFeaturedStack = ()=>{
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProgramsFeaturedStack.useMemo[stack]": ()=>programs.slice(0, 3)
    }["ProgramsFeaturedStack.useMemo[stack]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-base-near-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-container px-4 md:px-8 py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-md font-semibold text-brand-secondary",
                            children: "Programs"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-display-sm font-semibold text-white md:text-display-md",
                            children: "Featured Card Stack"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                            lineNumber: 42,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/programs-featured-stack.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto mt-12 flex w-full max-w-3xl items-center justify-center",
                    onMouseEnter: ()=>setHovered(true),
                    onMouseLeave: ()=>setHovered(false),
                    onTouchStart: ()=>setHovered(true),
                    onTouchEnd: ()=>setHovered(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[360px] md:h-[420px] w-full",
                        children: stack.map((card, i)=>{
                            const z = stack.length - i;
                            const baseTranslateY = i === 0 ? -6 : i === 1 ? 0 : 6;
                            const baseRotate = 0;
                            const fanRotate = i === 0 ? 0 : i === 1 ? -4 : 4;
                            const fanTranslateX = i === 0 ? 0 : i === 1 ? -24 : 24;
                            const fanTranslateY = i === 0 ? -10 : i === 1 ? -2 : 8;
                            const isTop = i === 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: false,
                                animate: {
                                    rotate: hovered ? fanRotate : baseRotate,
                                    x: hovered ? fanTranslateX : 0,
                                    y: hovered ? fanTranslateY : baseTranslateY,
                                    scale: isTop ? hovered ? 1.02 : 1.01 : 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 26
                                },
                                className: "absolute inset-0 mx-auto w-full",
                                style: {
                                    zIndex: z
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full rounded-2xl bg-[#0B0F14]/70 p-8 ring-1 ring-white/10 backdrop-blur-md",
                                    style: {
                                        boxShadow: isTop && hovered ? "0 0 0 0.75px rgba(127,86,217,0.45), 0 30px 80px rgba(0,0,0,0.45), 0 0 80px rgba(68,76,231,0.20)" : "0 0 0 0.5px rgba(127,86,217,0.30), 0 24px 60px rgba(0,0,0,0.35), 0 0 48px rgba(68,76,231,0.12)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-2xl -z-[1]",
                                            style: {
                                                background: isTop ? "radial-gradient(800px circle at 16% 10%, rgba(139,92,246,0.18), transparent 42%)" : "radial-gradient(660px circle at 12% 8%, rgba(139,92,246,0.12), transparent 38%)",
                                                opacity: hovered && isTop ? 0.9 : 0.65
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                                            lineNumber: 86,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full items-center justify-between gap-4 md:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs md:text-sm font-semibold text-brand-secondary",
                                                            children: card.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-xl md:text-3xl font-semibold text-white",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 text-white/75 text-sm md:text-base",
                                                            children: card.featured ? "Hands-on SOC training with agentic workflows, standards-driven practices, and readiness validation." : "Cohort-based training aligned to real-world SOC workflows and autonomous system defense."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[100px] w-[160px] md:h-[120px] md:w-[180px] rounded-xl ring-1 ring-white/10",
                                                        style: {
                                                            background: "conic-gradient(from 180deg at 50% 50%, rgba(127,86,217,0.12), rgba(68,76,231,0.12))"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                                            lineNumber: 95,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 6
                                            },
                                            animate: hovered ? {
                                                opacity: 1,
                                                y: 0
                                            } : {
                                                opacity: 0,
                                                y: 6
                                            },
                                            transition: {
                                                duration: 0.28,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1
                                                ]
                                            },
                                            className: "pointer-events-auto absolute bottom-6 right-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: card.href,
                                                className: "inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-white",
                                                children: "Explore Program →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/programs-featured-stack.tsx",
                                                lineNumber: 122,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/programs-featured-stack.tsx",
                                            lineNumber: 116,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/programs-featured-stack.tsx",
                                    lineNumber: 77,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, card.title, false, {
                                fileName: "[project]/src/app/programs-featured-stack.tsx",
                                lineNumber: 64,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/programs-featured-stack.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/programs-featured-stack.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/programs-featured-stack.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/programs-featured-stack.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProgramsFeaturedStack, "HC94LJRlJWEIIqdP4nsuJbSjD9k=");
_c = ProgramsFeaturedStack;
var _c;
__turbopack_context__.k.register(_c, "ProgramsFeaturedStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_1842ed59._.js.map