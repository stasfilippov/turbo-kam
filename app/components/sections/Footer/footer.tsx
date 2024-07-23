import { Separator } from '@/components/ui/separator'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/lib/utils'
import logo from '@/public/logo.png'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import s from './footer.module.scss'

import { Modal } from '../../ui/modal/modal'

export const Footer = () => {
  return (
    <footer className={'bg-primary-black rounded-t-5xl -mt-[35px] py-[60px] '}>
      <div className={'max-container pb-10 '}>
        <Modal className={'block w-full text-start'}>
          <div className={s.textWrapper}>
            <span className={cn(s.footerDescr, 'medium-70')}>Есть вопросы?</span>
            <h2 className={cn(s.footerHeader, 'medium-64')}>Оставьте заявку и мы свяжемся</h2>
            <ArrowUpRight className={s.footerArrow} size={200} />
          </div>
        </Modal>
      </div>
      <Separator className={'my-6 bg-primary-white/20'} />
      <div className={'max-container flex justify-between'}>
        <div className={'flex flex-col medium-20 text-primary-white gap-3'}>
          {NAV_LINKS.map(item => (
            <Link
              className={'duration-300 transition-all hover:text-primary-white/40'}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <div className={'mb-5'}>
            <div className={'mb-4 medium-9 text-primary-white/40'}>Офис</div>
            <p className={'regular-16 text-primary-white'}>
              423800, Республика Татарстан, <br /> г. Набережные Челны
            </p>
          </div>
          <div>
            <div className={'mb-4 medium-9 text-primary-white/40'}>График работы</div>
            <p className={'regular-16 text-primary-white'}>
              Пн-Пт — С 8:00 до 17:00 <br />
              Сб-Вс — Выходной
            </p>
          </div>
        </div>
        <div className={'flex flex-col items-end justify-between'}>
          <Link className={cn(s.linkGoHome, 'medium-20 flexCenter')} href={'/'}>
            <span>Наверх</span>
            <div className={cn(s.iconWrapper, 'flexCenter')}>
              <ArrowUp />
            </div>
          </Link>
          <div className={'flex flex-col items-end'}>
            <Link
              className={
                'regular-48 text-primary-white transition-all duration-300 hover:text-primary-white/40'
              }
              href={'tel:+79372964868'}
            >
              8 (937) 296 48 68
            </Link>
            <Link
              className={
                'regular-48 text-primary-white transition-all duration-300 hover:text-primary-white/40'
              }
              href={'mailto:info@tks.com'}
            >
              info@tks.com
            </Link>
          </div>
        </div>
      </div>
      <Separator className={'my-6 bg-primary-white/20'} />
      <div className={'max-container flexBetween'}>
        <Link className={'flexCenter'} href={'/'}>
          <Image alt={'logo'} height={80} src={logo} width={80} />
          <div className={'flex flex-col text-primary-white drop-shadow-md'}>
            <span className={'bold-20 italic uppercase'}>
              <span className={'text-primary-pink'}>Турбо Кам</span> Сервис
            </span>
            <span className={'medium-12'}>Ремонт и продажа турбин</span>
          </div>
        </Link>
        <div className={'flex flex-col regular-11 text-primary-white/40'}>
          <Link
            className={'transition-all duration-300 hover:text-primary-white hover:underline'}
            href={'/'}
          >
            Политика обработки перс. данных
          </Link>
          <Link
            className={'transition-all duration-300 hover:text-primary-white hover:underline'}
            href={'/'}
          >
            Соглашение о конфиденциальности
          </Link>
        </div>
        <div className={'regular-11 text-primary-white/40'}>
          Разработка
          <Link
            className={'ml-2 medium-12 text-primary-white'}
            href={'https://t.me/stasfilippov307'}
          >
            stasfilippov
          </Link>
        </div>
      </div>
    </footer>
  )
}
