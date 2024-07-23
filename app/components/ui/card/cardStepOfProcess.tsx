import { Separator } from '@/components/ui/separator'
import { StepOfProcess } from '@/constants'

type Props = {
  item: StepOfProcess
}

export const CardStepOfProcess = ({ item }: Props) => {
  const { description, id, label } = item

  return (
    <div>
      {Number(id) < 10 ? (
        <span className={'text-primary-pink medium-64'}>{'0' + id}</span>
      ) : (
        <span className={'text-primary-pink medium-64'}>${id}</span>
      )}
      <Separator className={'bg-pink-primary'} />
      <h3 className={'my-2 text-primary-white medium-20'}>{label}</h3>
      <p className={'text-silver-15 medium-16'}>{description}</p>
    </div>
  )
}
