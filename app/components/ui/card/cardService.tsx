import React from 'react';
import {Card, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import {Service} from '@/constants';
import {Badge} from '@/components/ui/badge';

type Props = {
	item: Service
}

export const CardService = ({item}: Props) => {

	const { src, label, typesCar } = item

	return (
		<Card className='w-[580px] rounded-3xl bg-gray-20 p-5'>
			<CardTitle className=' mb-3'>
				{label}
			</CardTitle>
			<div className='w-[540px] h-[260px] relative '>
				<div className='absolute w-full h-full top-0 left-0 bg-black-0 z-10 rounded-[20px]'></div>
				<Image className='object-contain object-center rounded-[20px]' fill={true} src={src} alt={'service-image'}/>
				<div className='absolute z-20 top-4 left-4 flex flex-col items-start gap-4'>
					{typesCar.map((car, index) => {
						return <Badge className='py-[2px] px-2 bg-pink-primary rounded-5xl medium-16 text-white-10' key={index}>{car.slice(0,1).toUpperCase() + car.slice(1) + ' авто'}</Badge>
					})}
				</div>
			</div>
		</Card>
	);
};

