'use client'
import { Button, Card, Checkbox, Col, Divider, Form, Input, Row, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const { Title, Text } = Typography

const SignInPage = () => {
	const [form] = Form.useForm()
	const [isLoading, setIsLoading] = useState(false)
	const handleSubmit = async (values) => {
		console.log(values)
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 4000)
	}

	return (
		<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
			<Row justify="center" align="middle" style={{ flex: 1 }}>
				<Col {...{ xxl: 8, xl: 8, lg: 10, md: 12, sm: 16, xs: 22 }}>
					<Card>
						<div
							style={{
								margin: '2rem 0 2rem 0',
								padding: '0 2rem 0 2rem',
								display: 'flex',
								gap: '2rem',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Image src="/assets/images/sunny.png" width={110} height={100} alt="logo" />
							<Title level={2}>Sign In</Title>
							<Form
								form={form}
								style={{
									width: '100%'
								}}
								onFinish={handleSubmit}
								autoComplete="off"
								layout="vertical"
								colon={false}>
								<Form.Item
									label="Username"
									name="username"
									rules={[
										{
											required: true,
											message: 'Please input your username!'
										},
										{
											validator: (rule, value) => {
												if (value && /\s/.test(value)) {
													return Promise.reject('Username should not contains whitespace')
												}
												return Promise.resolve()
											}
										}
									]}>
									<Input />
								</Form.Item>
								<Form.Item
									label="Password"
									name="password"
									rules={[
										{
											required: true,
											message: 'Please input your password!'
										}
									]}>
									<Input.Password />
								</Form.Item>
								<Form.Item name="remember_me" valuePropName="checked">
									<Checkbox>Remember me</Checkbox>
								</Form.Item>
								<Form.Item>
									<Row gutter={[24, 24]}>
										<Col span={24}>
											<Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
												Sign In
											</Button>
										</Col>
									</Row>
									<Row>
										<Col span={24}>
											<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
												<Divider>or</Divider>
												<div style={{ display: 'flex', gap: '0.6rem' }}>
													<Text>dont have account?</Text>
													<Link href="/signup">Sign Up</Link>
												</div>
											</div>
										</Col>
									</Row>
								</Form.Item>
							</Form>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default SignInPage
