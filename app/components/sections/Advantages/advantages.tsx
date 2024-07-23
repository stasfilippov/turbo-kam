import React from 'react'

import { CardAdvantage } from '@/app/components/ui/card/cardAdvantage'
import { ADVANTAGES } from '@/constants'
import advantageImage from '@/public/advantage-image.png'
import Image from 'next/image'

export const Advantages = () => {
  return (
    <section className={'-mt-[35px]'}>
      <div className={'max-container pt-[60px] pb-5'}>
        <h2 className={'medium-48 text-end mb-12'}>
          <span className={'text-primary-pink'}>Преимущества</span> работы с нами
        </h2>

        <div className={'grid grid-cols-3 grid-flow-row gap-5'}>
          <Image alt={'advantage-image'} height={240} src={advantageImage} width={380}></Image>
          {ADVANTAGES.map(item => {
            return <CardAdvantage item={item} key={item.key} />
          })}
        </div>
      </div>
    </section>
  )
}
