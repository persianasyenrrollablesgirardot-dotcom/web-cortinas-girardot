import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite imágenes hasta 8K sin degradar calidad
    deviceSizes: [640, 1080, 1920, 2560, 3840, 7680],
    imageSizes: [256, 512, 1024],
    formats: ['image/webp'],
    qualities: [75, 95],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días de cache
  },
};

export default nextConfig;
