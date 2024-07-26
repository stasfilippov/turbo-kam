import React from 'react'

import { Advantage } from '@/constants'
import Image from 'next/image'

import { Card } from '..'

type Props = {
  item: Advantage
}

export const CardAdvantage = ({ item }: Props) => {
  const { description, label, src } = item

  return (
    <Card className={'w-[380px] rounded-3xl bg-primary-white p-5'}>
      <div className={'mb-5 h-[50px] w-[50px] rounded-full bg-primary-pink flexCenter'}>
        <Image alt={'icon'} src={src} />
      </div>
      <h3 className={'medium-24 mb-1'}>{label}</h3>
      <p className={'regular-16'}>{description}</p>
    </Card>
  )
}
