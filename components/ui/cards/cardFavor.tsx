import { FavorType } from '@/app/favors/page'
import example from '@/public/tkr6.jpg'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import { Separator } from '../separator'

type Props = {
  item: FavorType
}

export const CardFavor = ({ item }: Props) => {
  const { label } = item

  return (
    <div className={'group relative hover:cursor-pointer'}>
      <div className={'relative mb-5 h-[300px] overflow-hidden rounded-5xl'}>
        <Image alt={label} className={'absolute left-0 top-0 object-cover'} src={example} />
        <div
          className={
            'absolute right-[23px] top-[23px] h-[46px] w-[46px] rounded-full text-primary-black/0 transition-all duration-300 ease-in-out flexCenter group-hover:bg-primary-white group-hover:text-primary-black/100 group-hover:shadow-md'
          }
        >
          <ArrowRight size={20} strokeWidth={1} />
        </div>
      </div>
      <div
        className={
          'mb-3 text-silver-30 transition-all duration-300 ease-in-out flexBetween group-hover:text-primary-black'
        }
      >
        <h3 className={'text-primary-black bold-20'}>{label}</h3>
        <ArrowUpRight size={70} strokeWidth={0.75} />
      </div>
      <Separator
        className={
          'bg-silver-30 transition-all duration-300 ease-in-out group-hover:bg-primary-black'
        }
      />
    </div>
  )
}