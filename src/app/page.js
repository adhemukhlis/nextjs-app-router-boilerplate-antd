import Image from 'next/image'
import styles from './page.module.css'
import theme from '@/theme/themeConfig'
import { Button, ConfigProvider } from 'antd'

export default function Home() {
	return (
		<ConfigProvider theme={theme}>
			<div className="app">
				<h2>root</h2>
			</div>
		</ConfigProvider>
	)
}
