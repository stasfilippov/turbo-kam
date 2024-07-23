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
      <CardTitle className={' mb-3'}>{label}</CardTitle>
      <div className={'w-[540px] h-[260px] relative '}>
        <div className={'absolute w-full h-full top-0 left-0 z-10 rounded-[20px]'}></div>
        <Image
          alt={'service-image'}
          className={'object-contain object-center rounded-[20px]'}
          fill
          src={src}
        />
        <div className={'absolute z-20 top-4 left-4 flex flex-col items-start gap-4'}>
          {typesCar.map((car, index) => {
            return (
              <Badge
                className={'py-[2px] px-2 bg-primary-pink rounded-5xl medium-16 text-primary-white'}
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
