import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

import { Container, Card, Box, Typography, Button, TextField } from '@mui/material'

import { user } from '../../../../public/data'

console.log(user[0].login)

export default function SignIn({ theme }) {
	const [loginValue, setLoginValue] = useState('')
	const [loginError, setLoginError] = useState(false)

	const [passwordValue, setPasswordValue] = useState('')
	const [passwordError, setPasswordError] = useState(false)

	let navigate = useNavigate()

	const handleChangeLogin = e => {
		setLoginValue(e.target.value)
	}

	const handleChangePassword = e => {
		setPasswordValue(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (loginValue != user[0].login) setLoginError(true)
		else setLoginError(false)

		if (passwordValue != user[0].password) setPasswordError(true)
		else setPasswordError(false)

		if (loginValue === user[0].login && passwordValue === user[0].password) {
			navigate('../Dashboard')
		}
	}

	return (
		<>
			<Box
				component='section'
				sx={{
					height: 'calc(100vh - 64px)',
				}}
			>
				<Container
					maxWidth='lg'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Card
						sx={{
							padding: theme.spacing(4),
							marginTop: theme.spacing(12),
							width: '100% ',
							maxWidth: '600px',
							textAlign: 'center',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: theme.spacing(4),
							}}
							component='form'
							onSubmit={handleSubmit}
							noValidate
						>
							<Typography
								variant='h4'
								color='primary'
							>
								Авторизация
							</Typography>
							<TextField
								fullWidth
								id='login'
								label='Логин'
								type='text'
								value={loginValue}
								onChange={handleChangeLogin}
								error={loginError}
								helperText={loginError ? 'Неправильный логин' : ''}
							/>
							<TextField
								fullWidth
								id='password'
								label='Пароль'
								type='password'
								value={passwordValue}
								onChange={handleChangePassword}
								error={passwordError}
								helperText={passwordError ? 'Неправильный пароль' : ''}
							/>
							<Button
								variant='contained'
								color='primary'
								size='large'
								sx={{
									width: '100%',
								}}
								type='submit'
							>
								Войти
							</Button>
						</Box>
					</Card>
				</Container>
			</Box>
		</>
	)
}
