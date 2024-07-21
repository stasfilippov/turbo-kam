import { STEPS_OF_PROCESS } from '@/constants'
import Image from 'next/image'
import photo_submit from '@/public/turbine1.jpeg'
import { CardStepOfProcess } from '../../ui/card/cardStepOfProcess'
import { SuperButton } from '../../ui/button/button'

export const WorkProcess = () => {
	return (
		<section>
			<div className='max-container py-[10rem] grid grid-cols-4 gap-5'>
				<h2 className='text-primary-white medium-64 col-span-2'>Процесс работы</h2>
				{STEPS_OF_PROCESS.map(item => {
					return (
						<CardStepOfProcess key={item.id} item={item}/>
					)
				})}
				<div className='flex flex-col justify-between'>
					<div className='relative w-full h-[144px]'>
						<Image className='rounded-3xl object-cover overflow-hidden' src={photo_submit} alt='photo_submit' fill={true} />
					</div>
					<SuperButton className='text-primary-white w-[280px] h-[64px] medium-16 rounded-2xl' >Оставить заявку</SuperButton>
				</div>
			</div>
		</section>
	)
}