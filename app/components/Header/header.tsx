import Image from 'next/image'
import React from 'react';

import logo from '@/public/logo-example.png'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {SuperButton} from '@/app/components/ui/button/button';

export const Header = () => {
	return (
		<header className={'w-[1180px] fixed top-0 left-1/2 translate-x-[-50%] z-10 flexBetween py-[10px] px-[15px] bg-black-10/40 rounded-b-[20px] text-white-10 medium-16'}>
			<Link href={'/'}>
				<Image src={logo} width={50} height={50} alt='logo' />
			</Link>
			<nav className='flexCenter gap-[30px]'>
				{NAV_LINKS.map(item => {
					return (
						<Link href={item.href} key={item.key}>{item.label}</Link>
					)
				})}
			</nav>
			<div className='flexCenter gap-6' >
				<SuperButton variant={'link'} href={'tel:+79372964868'}>
					+79372964868
				</SuperButton>
				<SuperButton>Оставить заявку</SuperButton>
			</div>
		</header>
	);
};

