import { ConfigProvider } from 'antd'
import theme from '@/theme/themeConfig'

export default function Home() {
	return (
		<ConfigProvider theme={theme}>
			<div className="app">
				<h2>root</h2>
			</div>
		</ConfigProvider>
	)
}
