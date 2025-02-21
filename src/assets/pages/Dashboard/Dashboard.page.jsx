import { Box, Container, IconButton } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


import { data } from '../../../../public/data';

import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
	{ id: 'full_name', label: 'ФИО', minWidth: 170 },
	{ id: 'position', label: 'должность', minWidth: 100 },
	{ id: 'academic_degree', label: 'ученая степень', minWidth: 140 },
	{ id: 'disciplines', label: 'дисциплины', minWidth: 100 },
	{ id: 'workload', label: 'нагрузка', minWidth: 100 },
	{ id: 'community_service', label: 'общественная работа', minWidth: 100 },
	{ id: 'part_time_work', label: 'совместительство', minWidth: 50 },
]

console.log(data[0].disciplines)



export default function Dashboard({ theme }) {


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
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TableContainer >
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											align={column.align}
											style={{ minWidth: column.minWidth }}
										>
											{column.label}
										</TableCell>
									))}
									<TableCell key='7'>
										изменить
									</TableCell>
									<TableCell key='8'>
										удалить
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data
									.map((row) => {
										return (<>
											<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
												{columns.map((column) => {
													return (<>
														<TableCell key={column.id}>
															{
																(typeof row[column.id] == 'object') ? 
																row['disciplines'].join(", ") :
																row[column.id]
															}
														</TableCell>
													</>);
												})}
												<TableCell key='7'>
													<IconButton aria-label="change">
														<SettingsIcon />
													</IconButton>

												</TableCell>
												<TableCell key='8'>
													<IconButton aria-label="delete" color='error'>
														<DeleteIcon />
													</IconButton>
												</TableCell>
											</TableRow>
										</>);
									})}
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			</Box>
		</>
	)
}
