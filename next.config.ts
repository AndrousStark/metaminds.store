import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Proxy /outbrew/* to the Outbrew frontend Vercel deployment
  async rewrites() {
    return [
      {
        source: "/outbrew/:path*",
        destination:
          "https://metaminds-store-outbrew-frontend.vercel.app/outbrew/:path*",
      },
    ];
  },
};

export default nextConfig;
