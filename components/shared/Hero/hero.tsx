import { ModalForm, SuperButton } from '@/components/ui'
import hero from '@/public/hero.png'
import Image from 'next/image'

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
          <ModalForm className={'button-primary hover:bg-primary-pinkHover'}>
            Записаться на диагностику
          </ModalForm>
          <SuperButton variant={'link'}>Посмотреть каталог</SuperButton>
        </div>
      </div>
      <Image alt={'background'} className={'-z-20 object-cover object-center'} fill src={hero} />
    </section>
  )
}
