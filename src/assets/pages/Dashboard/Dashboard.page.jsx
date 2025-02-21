import { useState } from 'react'

import { Box, Container, IconButton } from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import { data } from '../../../../public/data'

import SettingsIcon from '@mui/icons-material/Settings'
import DeleteIcon from '@mui/icons-material/Delete'

const columns = [
	{ id: 'full_name', label: 'ФИО' },
	{ id: 'position', label: 'должность' },
	{ id: 'academic_degree', label: 'ученая степень' },
	{ id: 'disciplines', label: 'дисциплины' },
	{ id: 'workload', label: 'нагрузка, часов' },
	{ id: 'community_service', label: 'общественная работа' },
	{ id: 'part_time_work', label: 'совместительство, часов' },
]

export default function Dashboard({ theme }) {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value)
		setPage(0)
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
					maxWidth='false'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>id</TableCell>
									{columns.map(column => (
										<TableCell
											key={column.id}
											align={column.align}
											style={{ minWidth: column.minWidth }}
										>
											{column.label}
										</TableCell>
									))}
									<TableCell colSpan={2}>настройки</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
									return (
										<>
											<TableRow
												hover
												role='checkbox'
												tabIndex={-1}
												key={row.code}
											>
												<TableCell>{data.indexOf(row) + 1}</TableCell>
												{columns.map(column => {
													return (
														<>
															<TableCell key={column.id}>{typeof row[column.id] == 'object' ? row['disciplines'].join(', ') : row[column.id]}</TableCell>
														</>
													)
												})}
												<TableCell>
													<IconButton aria-label='change'>
														<SettingsIcon />
													</IconButton>
												</TableCell>
												<TableCell>
													<IconButton
														aria-label='delete'
														color='error'
													>
														<DeleteIcon />
													</IconButton>
												</TableCell>
											</TableRow>
										</>
									)
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component='div'
						count={data.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Container>
			</Box>
		</>
	)
}
