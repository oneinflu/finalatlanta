/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
};

export default nextConfig;
