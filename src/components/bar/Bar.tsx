// import React from 'react'

// const Bar = () => {
// 	return (
// 		<div
// 			key={index}
// 			className='flex flex-col items-center justify-end gap-2 h-full'
// 			onMouseEnter={setIsHoverBar.bind(null, index)}
// 			onMouseLeave={setIsHoverBar.bind(null, null)}
// 		>
// 			<div
// 				className={`w-4 relative flex justify-center cursor-pointer transition-transform duration-500 ease-in-out transform ${
// 					activeBarIndex === index ? 'hover:scale-x-105' : ''
// 				} animate-rise bg-[#000AFF] h-full rounded-md ${
// 					activeBarIndex === index ? 'shadow-lg' : ''
// 				}`}
// 				style={{
// 					maxHeight: containerHeight,
// 					height: `${(entry.total / yAxisValues[0]) * containerHeight}px`,
// 				}}
// 				onMouseEnter={() => handleBarMouseEnter(index, entry.total)}
// 				onMouseLeave={handleBarMouseLeave}
// 			>
// 				{isHoverBar === index && (
// 					<div className='bg-[#65FF8E] py-[2px] px-2 z-20 absolute top-[-32px] rounded-md'>
// 						{entry.total}
// 					</div>
// 				)}
// 			</div>

// 			<div key={index} className='w-16 text-center'>
// 				{entry.name}
// 			</div>
// 		</div>
// 	)
// }

// export default Bar
