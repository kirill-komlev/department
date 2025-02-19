import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container, IconButton } from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { useColorScheme } from '@mui/material/styles'

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
							sx={{ flexGrow: 1 }}
						>
							Кафедра
						</Typography>

						{mode === 'light' ? (
							<IconButton
								aria-label='darkmode'
								onClick={() => setMode('dark')}
							>
								<DarkModeIcon></DarkModeIcon>
							</IconButton>
						) : (
							<IconButton
								aria-label='lightmode'
								onClick={() => setMode('light')}
							>
								<LightModeIcon></LightModeIcon>
							</IconButton>
						)}

						<Button color='inherit'>Войти</Button>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar />
		</>
	)
}
