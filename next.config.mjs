/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compress: true,
    output: 'standalone',
    compiler: {
        removeConsole: true,
      },
};

export default nextConfig;
