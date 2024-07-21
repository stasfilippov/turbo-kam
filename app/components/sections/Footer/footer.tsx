import { Separator } from '@/components/ui/separator'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import s from './footer.module.scss'
import Image from 'next/image'
import logo from '@/public/logo.png'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const Footer = () => {
	return (
		<footer className='bg-primary-black rounded-t-5xl -mt-[35px] py-[60px] '>
			<div className='max-container pb-10 '>
				<div className={s.textWrapper}>
					<span className={cn(s.footerDescr, 'medium-70')}>Есть вопросы?</span>
					<h2 className={cn(s.footerHeader, 'medium-64')}>Оставьте заявку и мы свяжемся</h2>
					<ArrowUpRight className={s.footerArrow} size={200}/>
				</div>
			</div>
			<Separator className='my-6 bg-primary-white/20'/>
			<div className='max-container flex justify-between'> 
				<div className='flex flex-col medium-20 text-primary-white gap-3'>
					{NAV_LINKS.map(item => (
						<Link className='duration-300 transition-all hover:text-primary-white/40' href={item.href} key={item.key} >{item.label}</Link>
						
					))}
				</div>
				<div>
					<div className='mb-5'>
						<div className='mb-4 medium-9 text-primary-white/40'>Офис</div>
						<p className='regular-16 text-primary-white'>423800, Республика Татарстан, <br/> г. Набережные Челны</p>
						<Dialog>
						<DialogTrigger>Open</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you absolutely sure?</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete your account
									and remove your data from our servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
					</div>
					<div>
						<div className='mb-4 medium-9 text-primary-white/40'>График работы</div>
						<p className='regular-16 text-primary-white'>
							Пн-Пт — С 8:00 до 17:00 <br/>
							Сб-Вс — Выходной
						</p>
					</div>
				</div>
				<div className='flex flex-col items-end justify-between'>
					<Link href={'/'} className={cn(s.linkGoHome, 'medium-20 flexCenter')}>
						<span>Наверх</span>
						<div className={cn(s.iconWrapper, 'flexCenter')}>
							<ArrowUp />
						</div>
					</Link>
					<div className='flex flex-col items-end'>
						<Link className='regular-48 text-primary-white transition-all duration-300 hover:text-primary-white/40' href={'tel:+79372964868'}>8 (937) 296 48 68</Link>
						<Link className='regular-48 text-primary-white transition-all duration-300 hover:text-primary-white/40' href={'mailto:info@tks.com'}>info@tks.com</Link>
					</div>
				</div>
			</div>
			<Separator className='my-6 bg-primary-white/20'/>
			<div className='max-container flexBetween'>
					<Link href={'/'} className='flexCenter'>
						<Image src={logo} width={80} height={80} alt='logo' />
						<div className='flex flex-col text-primary-white drop-shadow-md'>
							<span className='bold-20 italic uppercase'><span className='text-primary-pink'>Турбо Кам</span> Сервис</span>
							<span className='medium-12'>Ремонт и продажа турбин</span>
						</div>
					</Link>
					<div className='flex flex-col regular-11 text-primary-white/40'>
						<Link href={'/'} className='transition-all duration-300 hover:text-primary-white hover:underline'>Политика обработки перс. данных</Link>
						<Link href={'/'} className='transition-all duration-300 hover:text-primary-white hover:underline'>Соглашение о конфиденциальности</Link>
					</div>
					<div className='regular-11 text-primary-white/40'>
						Разработка 
						<Link href={'https://t.me/stasfilippov307'} className='ml-2 medium-12 text-primary-white'>stasfilippov</Link>
					</div>
			</div>
		</footer>
	)
}