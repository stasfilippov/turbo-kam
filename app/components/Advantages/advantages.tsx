import React from 'react';
import advantageImage from '@/public/advantage-image.png'
import {CardAdvantage} from '@/app/components/ui/card/cardAdvantage';
import {ADVANTAGES} from '@/constants';
import Image from 'next/image';


export const Advantages = () => {
	return (
		<section className='-mt-[35px]'>
			<div className='max-container pt-[60px] pb-5'>
				<h2 className='medium-48 text-end mb-12'><span className='text-pink-primary'>Преимущества</span> работы с нами</h2>

				<div className='grid grid-cols-3 grid-flow-row gap-5'>
					<Image src={advantageImage} width={380} height={240} alt={'advantage-image'}></Image>
					{ADVANTAGES.map(item => {
						return (
							<CardAdvantage key={item.key} item={item}/>
						)
					})}
				</div>
			</div>
		</section>
	);
};

