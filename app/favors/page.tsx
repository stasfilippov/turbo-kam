import { CardFavor } from '@/components/ui'

export type FavorType = {
  description: string
  id: string
  label: string
  price: string
}

const FAVORS: FavorType[] = [
  {
    description: 'Специалисты помогут точно определить неисправность в турбине.',
    id: '1',
    label: 'Диагностика турбины',
    price: '4500',
  },
  {
    description: 'Замена катриджа производится в случаях повреждения корпуса.',
    id: '2',
    label: 'Замена катриджа',
    price: '14500',
  },
  {
    description: 'Работы проводятся при небольшом.',
    id: '3',
    label: 'Замена ремкомплекта',
    price: '11500',
  },
  {
    description: 'Программировние блока управления турбиной.',
    id: '4',
    label: 'Ремонт актуатора',
    price: '4500',
  },
  {
    description: 'Настройка и регулировка турбины с изменяемой геометрией.',
    id: '5',
    label: 'Регулировка геометрии',
    price: '3500',
  },
  {
    description: 'Финишная балансировка и тест картриджа на оборотах.',
    id: '6',
    label: 'Балансировка вала турбины',
    price: '4500',
  },
  {
    description: 'Замена детали с последующей балансировкой.',
    id: '7',
    label: 'Замена ротора',
    price: '4200',
  },
]

export default function Favors() {
  return (
    <section className={'mt-28 rounded-t-5xl bg-silver-10 p-10'}>
      <div className={'max-container pb-10 pt-10'}>
        <div className={'mb-10 flex justify-end'}>
          <div className={'w-full max-w-[600px]'}>
            <h1 className={'leading-[3.75rem] bold-70'}>Наши услуги</h1>
            <div className={'text-primary-black/60 bold-64'}>
              <span className={'text-primary-pink/60'}>Турбо Кам</span> Сервис
            </div>
          </div>
        </div>
        <div className={'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10'}>
          {FAVORS.map(item => {
            return <CardFavor item={item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}
