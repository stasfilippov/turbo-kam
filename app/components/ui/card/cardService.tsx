import React from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Service } from '@/constants'
import Image from 'next/image'

type Props = {
  item: Service
}

export const CardService = ({ item }: Props) => {
  const { label, src, typesCar } = item

  return (
    <Card className={'w-[580px] rounded-3xl bg-silver-20 p-5'}>
      <CardTitle className={'mb-3'}>{label}</CardTitle>
      <div className={'relative h-[260px] w-[540px]'}>
        <div className={'absolute left-0 top-0 z-10 h-full w-full rounded-[20px]'}></div>
        <Image
          alt={'service-image'}
          className={'rounded-[20px] object-contain object-center'}
          fill
          src={src}
        />
        <div className={'absolute left-4 top-4 z-20 flex flex-col items-start gap-4'}>
          {typesCar.map((car, index) => {
            return (
              <Badge
                className={'rounded-5xl bg-primary-pink px-2 py-[2px] text-primary-white medium-16'}
                key={index}
              >
                {car.slice(0, 1).toUpperCase() + car.slice(1) + ' авто'}
              </Badge>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
