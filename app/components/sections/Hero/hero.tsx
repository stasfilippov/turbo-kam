import { SuperButton } from '@/app/components/ui/button/button'
import hero from '@/public/hero.png'
import Image from 'next/image'

import { Modal } from '../../ui/modal/modal'

export const Hero = () => {
  return (
    <section className={'relative h-screen text-primary-white'}>
      <div
        className={
          'max-container flex h-full flex-col items-center justify-end gap-y-4 pb-[200px] pt-5'
        }
      >
        <h1 className={'text-center bold-64'}>
          Ремонт турбин <br /> в Набережных Челнах
        </h1>
        <p className={'medium-24'}>
          Профессиональный и качественный ремонт турбин в заводских условиях
        </p>
        <div className={'flex items-center gap-4'}>
          <Modal>
            <SuperButton>Записаться на диагностику</SuperButton>
          </Modal>
          <SuperButton variant={'link'}>Посмотреть каталог</SuperButton>
        </div>
      </div>
      <Image alt={'background'} className={'-z-20 object-cover object-center'} fill src={hero} />
    </section>
  )
}
