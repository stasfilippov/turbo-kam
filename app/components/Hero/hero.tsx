import Image from 'next/image'
import hero from '@/public/hero.png'
import { Button } from '@/components/ui/button'
import {SuperButton} from '@/app/components/ui/button/button';

export const Hero = () => {
	return (
		<section className='h-screen relative text-white-10'>
			<div className='max-container h-full flex flex-col justify-end items-center gap-y-4 pt-5 pb-[200px]'>
				<h1 className='text-center bold-64'>Ремонт турбин <br/> в Набережных Челнах</h1>
				<p className='medium-24'>
					Профессиональный и качественный ремонт турбин в заводских условиях
				</p>
				<div className='flex items-center gap-4'>
					<SuperButton>Записаться на диагностику</SuperButton>
					<SuperButton variant={'link'}>Посмотреть каталог</SuperButton>
				</div>
			</div>
			<Image src={hero} alt='background' className='object-cover object-center -z-20' fill={true}/>
		</section>
	)
}