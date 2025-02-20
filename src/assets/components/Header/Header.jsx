import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container, IconButton, Tooltip } from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { useColorScheme, createTheme } from '@mui/material/styles'

import { Link as RouterLink } from 'react-router'

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
})

export default function Header() {
	const { mode, setMode } = useColorScheme()
	if (!mode) {
		return null
	}

	return (
		<>
			<AppBar position='fixed'>
				<Container maxWidth='lg'>
					<Toolbar>
						<Typography
							variant='h6'
							color='inherit'
							sx={{
								flexGrow: 1,
								textDecoration: 'none',
							}}
							component={RouterLink}
							to='..'
						>
							Кафедра
						</Typography>

						{mode === 'system' || mode === 'light' ? (
							<Tooltip title='Тёмная тема'>
								<IconButton
									color='inherit'
									aria-label='darkmode'
									onClick={() => setMode('dark')}
								>
									<DarkModeIcon></DarkModeIcon>
								</IconButton>
							</Tooltip>
						) : (
							<Tooltip title='Светлая тема'>
								<IconButton
									aria-label='lightmode'
									onClick={() => setMode('light')}
								>
									<LightModeIcon></LightModeIcon>
								</IconButton>
							</Tooltip>
						)}

						<Button
							color='inherit'
							sx={{ marginLeft: theme.spacing(2) }}
							component={RouterLink}
							to='/Sign-in'
						>
							Войти
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar />
		</>
	)
}
