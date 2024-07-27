import { CardStepOfProcess, ModalForm } from '@/components/ui'
import { STEPS_OF_PROCESS } from '@/constants'
import photo_submit from '@/public/turbine1.jpeg'
import Image from 'next/image'

export const WorkProcess = () => {
  return (
    <section>
      <div className={'max-container grid grid-cols-4 gap-5 py-[10rem]'}>
        <h2 className={'col-span-2 text-primary-white medium-64'}>Процесс работы</h2>
        {STEPS_OF_PROCESS.map(item => {
          return <CardStepOfProcess item={item} key={item.id} />
        })}
        <div className={'flex flex-col justify-between'}>
          <div className={'relative h-[144px] w-full'}>
            <Image
              alt={'photo_submit'}
              className={'overflow-hidden rounded-3xl object-cover'}
              fill
              src={photo_submit}
            />
          </div>
          <ModalForm
            className={'button-primary h-[64px] w-[280px] rounded-2xl hover:bg-primary-pinkHover'}
          >
            Оставить заявку
          </ModalForm>
        </div>
      </div>
    </section>
  )
}
