/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["whapmc.org", "sjc.microlink.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "whapmc.org",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "sjc.microlink.io",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
