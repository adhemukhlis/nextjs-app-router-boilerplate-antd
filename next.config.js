/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
		// Will be available on both server and client
		AppName: 'NextJS'
	},
	// env: {
	// 	BACKEND_API_HOST: process.env.NEXT_BACKEND_API_HOST,
	// 	SESSION_KEY: process.env.SESSION_KEY
	// },
	eslint: {
		dirs: ['.']
	},
	poweredByHeader: false,
	trailingSlash: false,
	transpilePackages: ['antd'],
	reactStrictMode: false,
	// images: {
	// 	domains: ['web.com'],
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			hostname: '**',
	// 			port: '',
	// 			pathname: '**'
	// 		}
	// 	]
	// }
}

module.exports = nextConfig
