import { TurbineType } from '@/app/catalog/page'
import { Card } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import { ModalForm } from '..'

type Props = {
  item: TurbineType
}

export const CardOfCatalog = ({ item }: Props) => {
  return (
    <Card className={'group relative rounded-3xl p-5 hover:cursor-pointer'}>
      <div
        className={
          'absolute right-[20px] top-[20px] h-[50px] w-[50px] rounded-full text-primary-black/80 transition-all duration-300 flexCenter group-hover:bg-silver-20 group-hover:text-primary-black'
        }
      >
        <ArrowUpRight size={32} />
      </div>
      <h3 className={'mb-3 uppercase medium-16'}>
        Турбокомпрессор
        <br />
        <span className={'bold-20'}>{' ' + item.label}</span>
      </h3>
      <div className={'flex flex-col items-center justify-between gap-3'}>
        <Image
          alt={`турбокомпрессор для ${item.label}`}
          className={
            'overflow-hidden rounded-3xl transition-all duration-300 ease-in-out group-hover:scale-110'
          }
          height={200}
          src={item.img}
        />
        <div>
          {item.brands.map((brand, index) => (
            <span className={'text-primary-black/50 regular-14'} key={index}>
              {index === 0 ? brand : ', ' + brand}
            </span>
          ))}
        </div>
        <ModalForm className={'button-primary hover:bg-primary-pinkHover'}>
          Оформить заказ
        </ModalForm>
      </div>
    </Card>
  )
}
