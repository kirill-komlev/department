import { Link, Route, Routes } from 'react-router'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'

import Header from './assets/components/Header/Header'
import SignIn from './assets/pages/Sign-In/Sign-In.page'
import Dashboard from './assets/pages/Dashboard/Dashboard.page'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
})

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header theme={theme}></Header>
			<main>
				<Routes>
					<Route
						path='/'
						element={<Link to='/Dashboard'>123</Link>}
					/>
					<Route
						path='Sign-in'
						element={<SignIn theme={theme}></SignIn>}
					/>
					<Route
						path='Dashboard'
						element={<Dashboard theme={theme}></Dashboard>}
					/>
				</Routes>
			</main>
		</ThemeProvider>
	)
}
