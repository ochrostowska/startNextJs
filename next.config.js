/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

console.log("CONTENTFUL_SPACE_ID:", process.env.CONTENTFUL_SPACE_ID);
console.log("SPACE:", process.env.NEXT_PUBLIC_SITE_URL);
console.log("WINDOW", typeof window === "undefined");

module.exports = nextConfig;
