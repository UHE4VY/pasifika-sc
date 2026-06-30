import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/services/hybrid",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/hybrid/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/remote",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/remote/:path*",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;