/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Add this line
  // Optional: If you plan to use external image providers
  // images: {
  //   domains: ['example.com'],
  // },
};

export default nextConfig;
