/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx', '.wasm'],
  },
};

export default nextConfig;
