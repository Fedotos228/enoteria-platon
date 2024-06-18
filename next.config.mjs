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
				protocol: 'https',
				hostname: 'enoteria-platon-298abb099da9.herokuapp.com',
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
					{
						key: 'Referrer-Policy',
						value: 'same-origin',
					},
				],
			},
		]
	},
}

export default nextConfig
