import Image from 'next/image'
import React from 'react';
import logo from '@/public/logo.png'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Modal } from '../../ui/modal/modal'
import { SuperButton } from '../../ui/button/button'

export const Header = () => {
	return (
		<header className={'max-w-[1600px] w-full fixed top-0 left-1/2 translate-x-[-50%] z-10 flexBetween py-[10px] px-[15px] bg-primary-black/40 rounded-b-[20px] text-primary-white medium-16'}>
			<Link href={'/'} className='flexCenter'>
				<Image src={logo} width={80} height={80} alt='logo' />
				<div className='flex flex-col text-primary-white drop-shadow-md'>
					<span className='bold-20 italic uppercase'><span className='text-primary-pink'>Турбо Кам</span> Сервис</span>
					<span className='medium-12'>Ремонт и продажа турбин</span>
				</div>
			</Link>
			<nav className='flexCenter gap-[30px]'>
				{NAV_LINKS.map(item => {
					return (
						<Link className='bold-16 transition-all duration-300 hover:text-primary-white/40 hover:underline' href={item.href} key={item.key}>{item.label}</Link>
					)
				})}
			</nav>
			<div>
				<span className='text-primary-pink bold-14 '>Мы находимся по адресу:</span>
				<p className='regular-14 text-primary-white'>Республика Татарстан, <br/> г. Набережные Челны</p>
			</div>
			<div className='flexCenter gap-6' >
				<div className='flex flex-col gap-1'>
					<Link href={'tel:+79372964868'} className='flexCenter gap-2 transition-all duration-300 hover:text-primary-pink'>
						<Phone size={18}/>
						<span className='bold-16 transition-all duration-300 hover:underline '>+79372964868</span>
					</Link>
					<p className='medium-12 text-primary-white text-center'>
						<span className='bold-12'>Пн-Пт</span> — С 8:00 до 17:00 <br/>
						<span className='bold-12'>Сб-Вс</span> — Выходной
					</p>
				</div>
				<Modal>
					<SuperButton>Оставить заявку</SuperButton>
				</Modal>
			</div>
		</header>
	);
};

