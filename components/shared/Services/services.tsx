import React from 'react'

import { CardService } from '@/components/ui'
import { SERVICES } from '@/constants'

export const Services = () => {
  return (
    <section className={'py-28'}>
      <div className={'max-container'}>
        <h3 className={'mb-7 text-center medium-48'}>Чем мы занимаемся</h3>
        <div className={'grid grid-cols-2 gap-5'}>
          {SERVICES.map(item => {
            return <CardService item={item} key={item.key} />
          })}
        </div>
      </div>
    </section>
  )
}
