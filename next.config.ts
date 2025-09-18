import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Configure webpack to handle email templates
  webpack: (config, { isServer }) => {
    // Add file-loader for email template assets
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  
  // Configure environment variables
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  
  // Enable ES modules for email templates
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
