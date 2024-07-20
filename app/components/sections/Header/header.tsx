import Image from 'next/image'
import React from 'react';

import logo from '@/public/logo.png'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {SuperButton} from '@/app/components/ui/button/button';

export const Header = () => {
	return (
		<header className={'max-w-[1600px] w-full fixed top-0 left-1/2 translate-x-[-50%] z-10 flexBetween py-[10px] px-[15px] bg-black-10/40 rounded-b-[20px] text-white-10 medium-16'}>
			<Link href={'/'} className='flexCenter'>
				<Image src={logo} width={80} height={80} alt='logo' />
				<div className='flex flex-col text-white-10 drop-shadow-md'>
					<span className='bold-20 italic uppercase'><span className='text-pink-primary'>Турбо Кам</span> Сервис</span>
					<span className='medium-12'>Ремонт и продажа турбин</span>
				</div>
			</Link>
			<nav className='flexCenter gap-[30px]'>
				{NAV_LINKS.map(item => {
					return (
						<Link className='bold-16 transition-all duration-300 hover:text-white-10/40 hover:underline' href={item.href} key={item.key}>{item.label}</Link>
					)
				})}
			</nav>
			<div>
				<span className='medium-16 text-pink-primary bold-14 '>Мы находимся по адресу:</span>
				<p className='regular-14 text-white-10'>Республика Татарстан, <br/> г. Набережные Челны</p>
			</div>
			<div className='flexCenter gap-6' >
				<div className='flexCenter gap-4'>
					<p className='medium-12 text-white-10 text-center'>
						<span className='bold-12'>Пн-Пт</span> — С 8:00 до 17:00 <br/>
						<span className='bold-12'>Сб-Вс</span> — Выходной
					</p>
					<SuperButton variant={'link'} href={'tel:+79372964868'}>
						+79372964868
					</SuperButton>
				</div>
				
				<SuperButton>Оставить заявку</SuperButton>
			</div>
		</header>
	);
};

