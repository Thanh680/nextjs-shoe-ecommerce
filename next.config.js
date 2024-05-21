/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        loader: "custom",
        loaderFile: './imageLoader.js'
      },
  }
   
  module.exports = nextConfig