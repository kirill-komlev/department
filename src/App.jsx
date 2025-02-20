import { useState, useRef } from 'react'

import { Button, TextField, Container, CssBaseline, Box, Card } from '@mui/material'
import { ThemeProvider, createTheme, Typography, FormControl, FormLabel, FormHelperText, Input } from '@mui/material'

import Header from './assets/components/Header/Header'
import SignIn from './assets/pages/Sign-In/Sign-In.page'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
})

export default function App() {
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
						<SignIn></SignIn>
					</Container>
				</Box>
			</main>
		</ThemeProvider>
	)
}
