import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'

export default function Header() {
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
						<Button color='inherit'>Войти</Button>
					</Toolbar>
				</Container>
			</AppBar>
			<Toolbar />
		</>
	)
}
