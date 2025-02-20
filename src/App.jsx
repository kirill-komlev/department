import { useState, useRef } from 'react'

import { Button, TextField, Container, CssBaseline, Box, Card } from '@mui/material'
import { ThemeProvider, createTheme, Typography, FormControl, FormLabel, FormHelperText, Input } from '@mui/material'

import Header from './assets/components/Header/Header'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
})

const ValidatedTextField = ({ label, type, validator, onChange }) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const handleChange = e => {
		const newValue = e.target.value
		const errorMessage = validator(newValue)
		setValue(newValue)
		setError(errorMessage)
		onChange(!errorMessage)
	}
	return (
		<TextField
			fullWidth
			label={label}
			type={type}
			value={value}
			onChange={handleChange}
			error={!!error}
			helperText={error}
		/>
	)
}

const emailValidator = value => {
	if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value)) return 'Неправильная почта'
	return false
}

const passwordValidator = value => {
	if (!value) return 'Неправильный пароль'
	return false
}

export default function App() {
	const formValid = useRef({ email: false, password: false })

	const handleSubmit = e => {
		e.preventDefault()
		if (Object.values(formValid.current).every(isValid => isValid)) {
			alert('Form is valid! Submitting the form...')
		} else {
			alert('Form is invalid! Please check the fields...')
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header></Header>
			<main>
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
								<ValidatedTextField
									label='Почта'
									type='text'
									validator={emailValidator}
									onChange={isValid => (formValid.current.email = isValid)}
								/>
								<ValidatedTextField
									label='Пароль'
									type='password'
									validator={passwordValidator}
									onChange={isValid => (formValid.current.password = isValid)}
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
			</main>
		</ThemeProvider>
	)
}
