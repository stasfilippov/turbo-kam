import { CardFavor } from '@/components/ui'
import actuator from '@/public/repair-actuator.jpg'
import balance from '@/public/repair-balansirovka.webp'
import catridg from '@/public/repair-catridg.jpg'
import diagnostic from '@/public/repair-diagnostic-turbo.jpg'
import geometry from '@/public/repair-geometry.png'
import remkomplect from '@/public/repair-remkomplect.jpg'
import rotor from '@/public/repair-rotor.webp'
import { StaticImageData } from 'next/image'

export type FavorType = {
  description: string
  id: string
  label: string
  price: string
  srcImage: StaticImageData
}

export const FAVORS: FavorType[] = [
  {
    description: 'Специалисты помогут точно определить неисправность в турбине.',
    id: '1',
    label: 'Диагностика турбины',
    price: '4500',
    srcImage: diagnostic,
  },
  {
    description: 'Замена катриджа производится в случаях повреждения корпуса.',
    id: '2',
    label: 'Замена катриджа',
    price: '14500',
    srcImage: catridg,
  },
  {
    description: 'Работы проводятся при небольшом.',
    id: '3',
    label: 'Замена ремкомплекта',
    price: '11500',
    srcImage: remkomplect,
  },
  {
    description: 'Программировние блока управления турбиной.',
    id: '4',
    label: 'Ремонт актуатора',
    price: '4500',
    srcImage: actuator,
  },
  {
    description: 'Настройка и регулировка турбины с изменяемой геометрией.',
    id: '5',
    label: 'Регулировка геометрии',
    price: '3500',
    srcImage: geometry,
  },
  {
    description: 'Финишная балансировка и тест картриджа на оборотах.',
    id: '6',
    label: 'Балансировка вала турбины',
    price: '4500',
    srcImage: balance,
  },
  {
    description: 'Замена детали с последующей балансировкой.',
    id: '7',
    label: 'Замена ротора',
    price: '4200',
    srcImage: rotor,
  },
]

export const FavorsList = () => {
  return (
    <div className={'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10'}>
      {FAVORS.map(item => {
        return <CardFavor item={item} key={item.id} />
      })}
    </div>
  )
}
