
require('dotenv').config()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	env: {
		isProd,
		API_URL: process.env.API_URL,
		REST_DB_API: process.env.REST_DB_API,
		REST_DB_KEY: process.env.REST_DB_KEY,
	},
}

module.exports = withBundleAnalyzer(nextConfig)
