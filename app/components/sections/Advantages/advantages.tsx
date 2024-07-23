import React from 'react'

import { CardAdvantage } from '@/app/components/ui/card/cardAdvantage'
import { ADVANTAGES } from '@/constants'
import advantageImage from '@/public/advantage-image.png'
import Image from 'next/image'

export const Advantages = () => {
  return (
    <section className={'-mt-[35px]'}>
      <div className={'max-container pb-5 pt-[60px]'}>
        <h2 className={'mb-12 text-end medium-48'}>
          <span className={'text-primary-pink'}>Преимущества</span> работы с нами
        </h2>

        <div className={'grid grid-flow-row grid-cols-3 gap-5'}>
          <Image alt={'advantage-image'} height={240} src={advantageImage} width={380}></Image>
          {ADVANTAGES.map(item => {
            return <CardAdvantage item={item} key={item.key} />
          })}
        </div>
      </div>
    </section>
  )
}
