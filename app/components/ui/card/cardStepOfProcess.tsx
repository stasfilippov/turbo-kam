import { Separator } from '@/components/ui/separator'
import { StepOfProcess } from '@/constants'

type Props = {
	item: StepOfProcess
}

export const CardStepOfProcess = ({item}: Props) => {

	const {id, label, description} = item

	return (
		<div>
			{
				Number(id) < 10 
					? <span className='medium-64 text-primary-pink'>{'0' + id}</span>
					: <span className='medium-64 text-primary-pink'>${id}</span>
			}
			<Separator className='bg-pink-primary'/>
			<h3 className='my-2 medium-20 text-primary-white'>{label}</h3>
			<p className='medium-16 text-silver-15'>{description}</p>
		</div>
	)
}