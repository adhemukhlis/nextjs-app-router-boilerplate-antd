'use client'
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const { Title } = Typography

const SignUpPage = () => {
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
							<Title level={2}>Sign Up</Title>
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
									label="Full Name"
									name="fullname"
									rules={[
										{
											required: true,
											type: 'string'
										}
									]}>
									<Input />
								</Form.Item>
								<Form.Item
									label="Username"
									name="username"
									rules={[
										{
											required: true,
											type: 'string'
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
									label="Email"
									name="email"
									rules={[
										{
											required: true,
											type: 'email',
											message: 'Please input your email!'
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
								<Form.Item
									name="confirm_password"
									label="Confirm Password"
									dependencies={['password']}
									hasFeedback
									rules={[
										{
											required: true,
											message: 'Please confirm your password!'
										},
										({ getFieldValue }) => ({
											validator(_, value) {
												if (!value || getFieldValue('password') === value) {
													return Promise.resolve()
												}
												return Promise.reject(new Error('The two passwords that you entered do not match!'))
											}
										})
									]}>
									<Input.Password />
								</Form.Item>
								<Form.Item>
									<Row gutter={[24, 24]} justify="center">
										<Col span={24}>
											<Button type="primary" htmlType="submit" block loading={isLoading}>
												Sign Up Now!
											</Button>
										</Col>
										<Col>
											<Link href="/signin">I Already have an account</Link>
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

export default SignUpPage
