
require('dotenv').config()
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
	env: {
		isProd,
	},
}

module.exports = withBundleAnalyzer(nextConfig)
