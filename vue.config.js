module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				assets: '@/assets',
				common: '@/common',
				components: '@/components',
				network: '@/network',
				views: '@/views',
			},
		},
	},
	// 关闭 eslint 检查
	lintOnSave: false,
	devServer: {
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
};
