import React from 'react'

import { NAV_LINKS } from '@/constants'
import logo from '@/public/logo.png'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { SuperButton } from '../../ui/button/button'
import { Modal } from '../../ui/modal/modal'

export const Header = () => {
  return (
    <header
      className={
        'fixed left-1/2 top-0 z-10 w-full max-w-[1600px] translate-x-[-50%] rounded-b-[20px] bg-primary-black/40 px-[15px] py-[10px] text-primary-white flexBetween medium-16'
      }
    >
      <Link className={'flexCenter'} href={'/'}>
        <Image alt={'logo'} height={80} src={logo} width={80} />
        <div className={'flex flex-col text-primary-white drop-shadow-md'}>
          <span className={'uppercase italic bold-20'}>
            <span className={'text-primary-pink'}>Турбо Кам</span> Сервис
          </span>
          <span className={'medium-12'}>Ремонт и продажа турбин</span>
        </div>
      </Link>
      <nav className={'gap-[30px] flexCenter'}>
        {NAV_LINKS.map(item => {
          return (
            <Link
              className={
                'transition-all duration-300 bold-16 hover:text-primary-white/40 hover:underline'
              }
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div>
        <span className={'text-primary-pink bold-14'}>Мы находимся по адресу:</span>
        <p className={'text-primary-white regular-14'}>
          Республика Татарстан, <br /> г. Набережные Челны
        </p>
      </div>
      <div className={'gap-6 flexCenter'}>
        <div className={'flex flex-col gap-1'}>
          <Link
            className={'gap-2 transition-all duration-300 flexCenter hover:text-primary-pink'}
            href={'tel:+79372964868'}
          >
            <Phone size={18} />
            <span className={'transition-all duration-300 bold-16 hover:underline'}>
              +79372964868
            </span>
          </Link>
          <p className={'text-center text-primary-white medium-12'}>
            <span className={'bold-12'}>Пн-Пт</span> — С 8:00 до 17:00 <br />
            <span className={'bold-12'}>Сб-Вс</span> — Выходной
          </p>
        </div>
        <Modal>
          <SuperButton>Оставить заявку</SuperButton>
        </Modal>
      </div>
    </header>
  )
}
