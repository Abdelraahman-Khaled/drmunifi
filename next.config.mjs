/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // تحسين الصور: تحويل تلقائي لـ AVIF/WebP + أحجام متجاوبة (sharp مثبّت بالفعل)
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
    // صور المدونة/العمليات تُقدَّم من الـ backend على نطاق almunifi.com
    remotePatterns: [
      { protocol: "https", hostname: "**.almunifi.com" },
      { protocol: "https", hostname: "almunifi.com" },
      { protocol: "http", hostname: "**.almunifi.com" },
      { protocol: "http", hostname: "almunifi.com" },
    ],
  },
  // توحيد الدومين: www → non-www (301)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.almunifi.com" }],
        destination: "https://almunifi.com/:path*",
        permanent: true,
      },
    ];
  },
  // ترويسات الأمان
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
