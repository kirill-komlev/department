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
	{ id: 'full_name', label: 'ФИО', minWidth: 140, align: 'left' },
	{ id: 'position', label: 'должность', minWidth: 140, align: 'left' },
	{ id: 'academic_degree', label: 'ученая степень', minWidth: 150, align: 'left' },
	{ id: 'disciplines', label: 'дисциплины', minWidth: 140, align: 'left' },
	{ id: 'workload', label: 'нагрузка, часов', minWidth: 100, align: 'left' },
	{ id: 'community_service', label: 'общественная работа', minWidth: 150, align: 'left' },
	{ id: 'part_time_work', label: 'совместительство, часов', minWidth: 165, align: 'left' },
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
									<TableCell style={{ minWidth: 50 }}>id</TableCell>
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
															<TableCell key={column.id}>
																{typeof row[column.id] == 'object'
																	? row['disciplines'].join(', ')
																	: typeof row[column.id] == 'number'
																	? row[column.id] + ' час(а/ов)'
																	: row[column.id]}
															</TableCell>
														</>
													)
												})}
												<TableCell style={{ paddingInline: 8 }}>
													<IconButton aria-label='change'>
														<SettingsIcon />
													</IconButton>
												</TableCell>
												<TableCell style={{ paddingInline: 8 }}>
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
						labelRowsPerPage='Строк на странице'
						labelDisplayedRows={function defaultLabelDisplayedRows({ from, to, count }) {
							return `${from}–${to} из ${count !== -1 ? count : `больше чем ${to}`}`
						}}
					/>
				</Container>
			</Box>
		</>
	)
}
