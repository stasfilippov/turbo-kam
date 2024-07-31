import React from 'react'

import { FavorsList } from './favorsList'

export const Favors = () => {
  return (
    <section className={'py-28'}>
      <div className={'max-container'}>
        <h3 className={'mb-10 text-right bold-48'}>
          Наши <span className={'text-primary-pink'}>услуги</span>
        </h3>
        <FavorsList />
      </div>
    </section>
  )
}
