import { DropDown } from '@/components/DropDown'
import { Graphic } from '@/components/Graphic'

export default function Home() {
	return (
		<main>
			<div className='flex flex-col	gap-8 items-center p-5'>
				<DropDown />
				<Graphic />
			</div>
		</main>
	)
}
