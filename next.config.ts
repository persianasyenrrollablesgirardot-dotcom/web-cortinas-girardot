import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['100.119.136.49', 'localhost', '127.0.0.1'],
  images: {
    // Permite imágenes hasta 8K sin degradar calidad
    deviceSizes: [640, 1080, 1920, 2560],
    imageSizes: [256, 512, 1024],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600, // 1 hora de cache base
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
