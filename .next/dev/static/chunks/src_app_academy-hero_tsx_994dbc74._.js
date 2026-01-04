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
]);

//# sourceMappingURL=src_app_academy-hero_tsx_994dbc74._.js.map