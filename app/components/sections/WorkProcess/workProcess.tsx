import { STEPS_OF_PROCESS } from '@/constants'
import photo_submit from '@/public/turbine1.jpeg'
import Image from 'next/image'

import { SuperButton } from '../../ui/button/button'
import { CardStepOfProcess } from '../../ui/card/cardStepOfProcess'
import { Modal } from '../../ui/modal/modal'

export const WorkProcess = () => {
  return (
    <section>
      <div className={'max-container py-[10rem] grid grid-cols-4 gap-5'}>
        <h2 className={'text-primary-white medium-64 col-span-2'}>Процесс работы</h2>
        {STEPS_OF_PROCESS.map(item => {
          return <CardStepOfProcess item={item} key={item.id} />
        })}
        <div className={'flex flex-col justify-between'}>
          <div className={'relative w-full h-[144px]'}>
            <Image
              alt={'photo_submit'}
              className={'rounded-3xl object-cover overflow-hidden'}
              fill
              src={photo_submit}
            />
          </div>
          <Modal>
            <SuperButton className={'text-primary-white w-[280px] h-[64px] medium-16 rounded-2xl'}>
              Оставить заявку
            </SuperButton>
          </Modal>
        </div>
      </div>
    </section>
  )
}
