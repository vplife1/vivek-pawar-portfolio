/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // This tells Vercel to ignore ESLint errors and just deploy the site!
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;