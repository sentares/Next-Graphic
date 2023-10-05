'use client'

import React, { useState } from 'react'
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Cell,
	LabelList,
} from 'recharts'

interface DataItem {
	name: string
	total: number
}

interface CustomLabelProps {
	x?: number
	y?: number
	width?: number
	value: number
}

const data: DataItem[] = [
	{ name: 'Янв', total: 560 },
	{ name: 'Фев', total: 590 },
	{ name: 'Март', total: 1200 },
	{ name: 'Апр', total: 1800 },
	{ name: 'Май', total: 2500 },
]

export const Graphic: React.FC = () => {
	const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null)
	const [activeValue, setActiveValue] = useState<number | null>(300)

	const renderCustomLabel = (props: CustomLabelProps) => {
		const { x, y, value } = props

		if (
			x !== undefined &&
			y !== undefined &&
			activeBarIndex !== null &&
			value === activeValue
		) {
			return (
				<foreignObject x={x - 20} y={y - 28} width='55px' height='30px'>
					<div className='bg-[#65FF8E] flex items-center justify-center text-black rounded-md z-30 px-2 min-w-[40px] min-h-[20px]'>
						{value}
					</div>
				</foreignObject>
			)
		}
		return null
	}

	return (
		<ResponsiveContainer width='20%' height={350}>
			<BarChart data={data}>
				<XAxis
					dataKey='name'
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
					textAnchor='middle'
				/>
				<YAxis
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value: number) => `${value}`}
				/>
				<Bar dataKey='total' radius={[4, 4, 0, 0]} width={16}>
					<LabelList
						width={16}
						dataKey='total'
						//@ts-expect-error
						content={renderCustomLabel}
					/>
					{data.map((entry, index) => (
						<Cell
							width={16}
							key={index}
							fill={'#000AFF'}
							className={`transition duration-300 ease-in-out transform hover:shadow-lg ${
								activeBarIndex === index ? 'active' : ''
							}`}
							onMouseEnter={() => {
								setActiveBarIndex(index)
								setActiveValue(entry.total)
							}}
							onMouseLeave={() => {
								setActiveBarIndex(null)
								setActiveValue(null)
							}}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	)
}
