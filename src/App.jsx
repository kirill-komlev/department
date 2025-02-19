import { Button, TextField, Container, CssBaseline, Box, Card } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'

import Header from './assets/components/Header/Header'

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
					// sx={{ bgcolor: '#ffffff' }}
				>
					<Container maxWidth='lg'>
						<Card>123</Card>
					</Container>
				</Box>
			</main>
		</ThemeProvider>
	)
}
