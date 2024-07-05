/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tailwindui.com',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
		]
	},
}

export default nextConfig
