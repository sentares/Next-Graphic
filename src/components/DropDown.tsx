'use client'

import { useState } from 'react'

export const DropDown = () => {
	const options = [
		'За последние 6 месяцев',
		'За последний год',
		'За последний месяц',
	]
	const [openOption, setOpenOption] = useState(false)
	const [activeOption, setActiveOption] = useState(options[0])

	return (
		<div className='bg-red'>
			<button onClick={setOpenOption.bind(null, !openOption)}>
				{activeOption}
			</button>
		</div>
	)
}
