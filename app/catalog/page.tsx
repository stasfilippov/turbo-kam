import React from 'react'

import { CardOfCatalog, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui'
import { CARS_TYPES_TABS, CarsType } from '@/constants'
import k36 from '@/public/k36.jpg'
import s2b from '@/public/s2b.jpg'
import tkr6 from '@/public/tkr6.jpg'
import { StaticImageData } from 'next/image'

export type TurbineType = {
  brands: string[]
  img: StaticImageData
  label: string
  type: Omit<CarsType, 'all'>
}

export type DataTurbinesType = {
  items: TurbineType[]
  type: Omit<CarsType, 'all'>
}

const DATA_TURBINES: DataTurbinesType[] = [
  {
    items: [],
    type: 'passengers',
  },
  {
    items: [
      {
        brands: ['МТЗ', 'ГАЗ', 'ЗИЛ'],
        img: k36,
        label: 'TKP 6',
        type: 'trucks',
      },
      {
        brands: ['КамАЗ'],
        img: s2b,
        label: 'SCHWITZER S2B',
        type: 'trucks',
      },
      {
        brands: ['МАЗ', 'БелАЗ'],
        img: tkr6,
        label: 'K36',
        type: 'trucks',
      },
      {
        brands: ['МАЗ', 'БелАЗ'],
        img: tkr6,
        label: 'K36',
        type: 'trucks',
      },
      {
        brands: ['МАЗ', 'БелАЗ'],
        img: tkr6,
        label: 'K36',
        type: 'trucks',
      },
      {
        brands: ['МАЗ', 'БелАЗ'],
        img: tkr6,
        label: 'K36',
        type: 'trucks',
      },
    ],
    type: 'trucks',
  },
  {
    items: [],
    type: 'various',
  },
]

export default function Catalog() {
  return (
    <section className={'mt-28 rounded-t-5xl bg-silver-10 p-10'}>
      <div className={'max-container pb-10 pt-10'}>
        <div className={'mb-10 flex justify-between'}>
          <span className={'uppercase text-primary-black/60 medium-16'}>
            Ассортимент турбин <br /> турбо Кам Сервис
          </span>
          <div className={'w-full max-w-[800px]'}>
            <h1 className={'leading-[3.75rem] bold-70'}>Каталог турбокомпрессоров</h1>
            <div className={'text-primary-black/60 bold-64'}>
              <span className={'text-primary-pink/60'}>Турбо Кам</span> Сервис
            </div>
          </div>
        </div>
        <div className={'relative'}>
          <div className={'absolute left-0 top-0 flex items-start gap-2'}>
            <div className={'text-[120px] font-medium leading-[4.75rem]'}>8</div>
            <span className={'leading-[1rem] text-primary-black/50 bold-16'}>
              то
              <br />
              ва
              <br />
              ров
            </span>
          </div>
          <Tabs className={'w-full'} defaultValue={'all'}>
            <TabsList>
              {CARS_TYPES_TABS.map(type => {
                return (
                  <TabsTrigger key={type.value} value={type.value}>
                    {type.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>
            {CARS_TYPES_TABS.map(type => {
              const cards = DATA_TURBINES.find(item => item.type === type.value)

              return (
                <TabsContent
                  className={'grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-5'}
                  key={type.value}
                  value={type.value}
                >
                  {cards?.items.map(item => {
                    return <CardOfCatalog item={item} key={item.label} />
                  })}
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
