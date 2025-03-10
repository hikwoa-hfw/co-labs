import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "heartysilver-us.backendless.app",
      },
      {
        protocol: "https",
        hostname: "wingedbell-us.backendless.app",
      },
      {
        protocol: "https",
        hostname: "silkyhead-us.backendless.app",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
