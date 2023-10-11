'use client'

import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

interface IBar {
	name: string
	total: number
	normalizedTotal?: number
}

const data: IBar[] = [
	{ name: 'Янв', total: 400 },
	{ name: 'Фев', total: 590 },
	{ name: 'Март', total: 800 },
	{ name: 'Апр', total: 800 },
	{ name: 'Май', total: 600 },
]

export const Graphic: React.FC = () => {
	const [isHoverBar, setIsHoverBar] = useState<number | null>(null)
	const [loaded, setLoaded] = useState(false)

	const maxValue = Math.max(...data.map(entry => entry.total))
	const containerHeight = 240
	const step = Math.ceil(maxValue / 4)

	const findYAxisValues = () => {
		const yAxisValues = Array.from({ length: 6 }, (_, i) => step * i)
		return yAxisValues.reverse()
	}

	const yAxisValues = findYAxisValues()

	useEffect(() => {
		setLoaded(true)
	}, [])

	const normalizedData = data.map(entry => ({
		...entry,
		normalizedTotal: (entry.total / (maxValue + step)) * containerHeight,
	}))

	const barAnimations = normalizedData.map(entry => {
		const barHeight = entry.normalizedTotal + 24

		const props = useSpring({
			from: { height: 0 },
			to: { height: loaded ? barHeight : 0 },
			reset: false,
		})
		return props
	})

	return (
		<div className='max-w-[995px] w-full py-10 rounded-3xl bg-red-300 flex'>
			<div
				className='flex flex-col pl-10 items-start justify-between mb-[24px]'
				style={{ height: containerHeight }}
			>
				{yAxisValues.map((value, index) => (
					<div key={index} className='text-right'>
						{value}
					</div>
				))}
			</div>
			<div className='w-full flex flex-col items-center justify-end'>
				<div className='flex justify-between w-full px-8 items-end h-full'>
					{data.map((entry, index) => (
						<animated.div
							key={index}
							className='flex flex-col items-center justify-end gap-2 h-full'
							onMouseEnter={() => setIsHoverBar(index)}
							onMouseLeave={() => setIsHoverBar(null)}
							style={{
								...barAnimations[index],
							}}
						>
							<div
								className={`w-4 relative flex justify-center cursor-pointer transition-transform duration-500 ease-in-out transform ${
									isHoverBar === index ? 'hover:scale-x-105' : ''
								} animate-rise bg-[#000AFF] h-full rounded-md ${
									isHoverBar === index ? 'shadow-lg' : ''
								}`}
								style={{ height: `${entry.normalizedTotal}px` }}
							>
								{isHoverBar === index && (
									<div className='bg-[#65FF8E] py-[2px] px-2 z-20 absolute top-[-32px] rounded-md'>
										{entry.total}
									</div>
								)}
							</div>
							<div className='w-16 text-center'>{entry.name}</div>
						</animated.div>
					))}
				</div>
			</div>
		</div>
	)
}
