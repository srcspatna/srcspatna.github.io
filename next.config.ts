import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // Essential for GitHub Pages (static HTML export)
    basePath: '/srcspatna.github.io', // <--- Add this line!
    images: {
        unoptimized: true // Optional: Can avoid image optimization issues with static export
    }
};

export default nextConfig;
