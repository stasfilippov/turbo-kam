import React from 'react'

import { Card } from '@/components/ui/card'
import { Advantage, Service } from '@/constants'
import Image from 'next/image'

type Props = {
  item: Advantage
}

export const CardAdvantage = ({ item }: Props) => {
  const { description, label, src } = item

  return (
    <Card className={'w-[380px] p-5 rounded-3xl bg-primary-white'}>
      <div className={'flexCenter mb-5 w-[50px] h-[50px] bg-primary-pink rounded-full'}>
        <Image alt={'icon'} src={src} />
      </div>
      <h3 className={' mb-1 medium-24'}>{label}</h3>
      <p className={'regular-16'}>{description}</p>
    </Card>
  )
}
