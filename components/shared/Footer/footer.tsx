import { ModalForm, Separator } from '@/components/ui'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/lib/utils'
import logo from '@/public/logo.png'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={'-mt-[35px] rounded-t-5xl bg-primary-black py-[60px]'}>
      <div className={'max-container pb-10'}>
        <ModalForm className={'block w-full bg-transparent text-start hover:bg-none'}>
          <div className={s.textWrapper}>
            <span className={cn(s.footerDescr, 'medium-70')}>Есть вопросы?</span>
            <h2 className={cn(s.footerHeader, 'medium-64')}>Оставьте заявку и мы свяжемся</h2>
            <ArrowUpRight className={s.footerArrow} size={200} />
          </div>
        </ModalForm>
      </div>
      <Separator className={'my-6 bg-primary-white/20'} />
      <div className={'max-container flex justify-between'}>
        <div className={'flex flex-col gap-3 text-primary-white medium-20'}>
          {NAV_LINKS.map(item => (
            <Link
              className={'transition-all duration-300 hover:text-primary-white/40'}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <div className={'mb-5'}>
            <div className={'mb-4 text-primary-white/40 medium-9'}>Офис</div>
            <p className={'text-primary-white regular-16'}>
              423800, Республика Татарстан, <br /> г. Набережные Челны
            </p>
          </div>
          <div>
            <div className={'mb-4 text-primary-white/40 medium-9'}>График работы</div>
            <p className={'text-primary-white regular-16'}>
              Пн-Пт — С 8:00 до 17:00 <br />
              Сб-Вс — Выходной
            </p>
          </div>
        </div>
        <div className={'flex flex-col items-end justify-between'}>
          <Link className={cn(s.linkGoHome, 'flexCenter medium-20')} href={'/'}>
            <span>Наверх</span>
            <div className={cn(s.iconWrapper, 'flexCenter')}>
              <ArrowUp />
            </div>
          </Link>
          <div className={'flex flex-col items-end'}>
            <Link
              className={
                'text-primary-white transition-all duration-300 regular-48 hover:text-primary-white/40'
              }
              href={'tel:+79372964868'}
            >
              8 (937) 296 48 68
            </Link>
            <Link
              className={
                'text-primary-white transition-all duration-300 regular-48 hover:text-primary-white/40'
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
            <span className={'uppercase italic bold-20'}>
              <span className={'text-primary-pink'}>Турбо Кам</span> Сервис
            </span>
            <span className={'medium-12'}>Ремонт и продажа турбин</span>
          </div>
        </Link>
        <div className={'flex flex-col text-primary-white/40 regular-11'}>
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
        <div className={'text-primary-white/40 regular-11'}>
          Разработка
          <Link
            className={'ml-2 text-primary-white medium-12'}
            href={'https://t.me/stasfilippov307'}
          >
            stasfilippov
          </Link>
        </div>
      </div>
    </footer>
  )
}
