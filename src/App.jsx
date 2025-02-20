import { useState, useRef } from 'react'

import { Button, TextField, Container, CssBaseline, Box, Card } from '@mui/material'
import { ThemeProvider, createTheme, Typography, FormControl, FormLabel, FormHelperText, Input } from '@mui/material'

import Header from './assets/components/Header/Header'
import SignIn from './assets/pages/Sign-In/Sign-In.page'
import { Route, Routes } from 'react-router'

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
				<Routes>
					<Route
						path='/'
						element={<p>123</p>}
					/>
					<Route
						path='Sign-in'
						element={<SignIn></SignIn>}
					/>
				</Routes>
			</main>
		</ThemeProvider>
	)
}
