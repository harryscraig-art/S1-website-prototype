import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  
  // Image optimization for better Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // SEO headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Example redirects - add more as needed
      {
        source: '/help',
        destination: '/#how-it-works',
        permanent: false,
      },
      {
        source: '/faq',
        destination: '/#faq',
        permanent: false,
      },
    ]
  },

  // Rewrites for URL structure
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },

  // Experimental features for performance
  experimental: {
    // Optimized server-side rendering
    optimizeServerReact: true,
  },

  // Webpack configuration for optimization
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Server-side specific optimizations
    }
    return config
  },

  // Logging for build info
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
