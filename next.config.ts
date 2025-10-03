import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: {
    // ✅ Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: [
      "slelguoygbfzlpylpxfs.supabase.co", // 👈 Supabase bucket with your puppy images
      "images.pexels.com",                // 👈 if you also pull stock images
      "cdn2.thecatapi.com",               // 👈 example, add others as needed
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
