import React from 'react';
import {Card} from '@/components/ui/card';
import Image from 'next/image';
import {Advantage, Service} from '@/constants';

type Props = {
	item: Advantage
}

export const CardAdvantage = ({ item }: Props) => {

	const {src, label, description} = item

	return (
			<Card className='w-[380px] p-5 rounded-3xl bg-white-10'>
				<div className='flexCenter mb-5 w-[50px] h-[50px] bg-pink-primary rounded-full'>
					<Image src={src} alt={'icon'}/>
				</div>
				<h3 className=' mb-1 medium-24'>{label}</h3>
				<p className='regular-16'>{description}</p>
			</Card>
	);
};

