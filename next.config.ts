import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: '/',
      destination: '/en'
    }
  ]
};

export default nextConfig;
