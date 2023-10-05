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
	{ name: 'Янв', total: 200 },
	{ name: 'Фев', total: 150 },
	{ name: 'Март', total: 300 },
	{ name: 'Апр', total: 180 },
	{ name: 'Май', total: 250 },
]

export const Graphic: React.FC = () => {
	const [activeBarIndex, setActiveBarIndex] = useState<number | null>(null)
	const [activeValue, setActiveValue] = useState<number | null>(null)

	const renderCustomLabel = (props: CustomLabelProps) => {
		const { x, y, width, value } = props
		const barWidth = width || 0
		if (
			x !== undefined &&
			y !== undefined &&
			activeBarIndex !== null &&
			value === activeValue
		) {
			return (
				<text
					x={x + barWidth / 2}
					y={y - 10}
					textAnchor='middle'
					fill='#fff'
					fontSize={14}
				>
					{`$${value}`}
				</text>
			)
		}
		return null
	}

	return (
		<ResponsiveContainer width='100%' height={350}>
			<BarChart data={data}>
				<XAxis
					dataKey='name'
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke='#888888'
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value: number) => `$${value}`}
				/>
				<Bar dataKey='total' radius={[4, 4, 0, 0]}>
					<LabelList
						dataKey='total'
						//@ts-expect-error
						content={renderCustomLabel}
					/>
					{data.map((entry, index) => (
						<Cell
							key={index}
							fill={activeBarIndex === index ? 'red' : '#000AFF'}
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
