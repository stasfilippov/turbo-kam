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
					? <span className='medium-64 text-pink-primary'>{'0' + id}</span>
					: <span className='medium-64 text-pink-primary'>${id}</span>
			}
			<Separator className='bg-pink-primary'/>
			<h3 className='my-2 medium-20 text-white-10'>{label}</h3>
			<p className='medium-16 text-gray-15'>{description}</p>
		</div>
	)
}