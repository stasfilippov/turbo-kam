import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CARS_TYPES_TABS } from '@/constants'

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
              return (
                <TabsContent key={type.value} value={type.value}>
                  {type.label}
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
