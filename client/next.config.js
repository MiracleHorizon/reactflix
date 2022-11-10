/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
    TMDB_API_URL: process.env.TMDB_API_URL,
    TMDB_IMG_API: process.env.TMDB_IMG_API,
    SERVER_API: process.env.SERVER_API,
    CLIENT_API: process.env.CLIENT_API,
    YOUTUBE_API: process.env.YOUTUBE_API
  }
}


module.exports = nextConfig
