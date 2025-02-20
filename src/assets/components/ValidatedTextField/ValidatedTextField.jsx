import { useState } from 'react'
import { TextField } from '@mui/material'

export default function ValidatedTextField({ label, type, validator, onChange }) {
	const [value, setValue] = useState('')
	const [error, setError] = useState(false)
	const handleChange = e => {
		const newValue = e.target.value
		const errorMessage = validator(newValue)
		setValue(newValue)
		setError(errorMessage)
		onChange(!errorMessage)
	}
	return (
		<TextField
			fullWidth
			label={label}
			type={type}
			value={value}
			onChange={handleChange}
			error={!!error}
			helperText={error}
		/>
	)
}
