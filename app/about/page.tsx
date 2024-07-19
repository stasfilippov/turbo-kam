import React from 'react';
import {ResizablePanel, ResizablePanelGroup} from '@/components/ui/resizable';
import Image from 'next/image';
import owner from '@/public/owner_image.jpg'
import {Separator} from '@/components/ui/separator';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/ui/carousel';
import {Card, CardContent} from '@/components/ui/card';
import {PHOTOS} from '@/constants';
import { Footer } from '../components/sections/Footer/footer'

export default function About () {
	return (
		<>
		<section>
			<div className='max-container mt-20'>
				<h1 className='text-white-10 medium-48 mb-7' >
					<span className='text-pink-primary'>Турбо Кам Сервис -</span> 
					О компании
				</h1>
			</div>
			<div className='bg-gray-10 rounded-t-5xl p-10' >
				<div className='max-container' >
					<ResizablePanelGroup direction="horizontal" className='gap-4'>
						<ResizablePanel defaultSize={25}>
							<Image src={owner} width={250} alt={'owner image'}/>
						</ResizablePanel>
						<ResizablePanel defaultSize={75}>
							<h3 className='medium-24 mb-7'>Приветствую Вас, коллеги, друзья!</h3>
							<p className='medium-16 mb-3'>Я, <span className='bold-16'>Марат Сабирзянович,</span>  руководитель компании <span className='bold-20 text-pink-primary'>&quot;Турбо Кам Сервис&quot;</span>. Наш центр по ремонту турбин не отстает от современного темпа развития. Мы стремимся к улучшению качества предоставляемых услуг.</p>
							<p className='mb-3'>Если у Вас возникнут спорные вопросы, замечания или предложения, или есть претензии по работе персонала производственно-технического центра &quot;Турбо Кам Сервис&quot;, мы решим Ваш вопрос за 1 час.</p>
							<p>Звоните по телефону +79372964868.</p>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
				<Separator className='bg-gray-400 my-10'/>
				<div className='max-container'>
					<p className='medium-16 text-center'>
						<span className='medium-20'>Компания</span> <span className='bold-20 text-pink-primary'>&quot;Турбо Кам Сервис&quot;</span> была основана в 2012 году в качестве производственно-технического предприятия, специализирующегося на ремонте, продаже и диагностике турбин (турбокомпрессоров) и систем турбонаддува для различных типов двигателей внутреннего сгорания. В настоящее время мы занимаем лидирующие позиции в данной отрасли на российском рынке.
					</p>
					<div className='p-10' >
						<Carousel
							opts={{
								align: "start",
							}}
							className="w-full"
						>
							<CarouselContent>
								{PHOTOS.map((item, index) => (
									<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
										<div className="p-1">
											<Card className='relative h-[200px] rounded-3xl'>
												<Image src={item.src} alt={'turbine_img'} className='object-cover object-center rounded-3xl' fill={true}/>
											</Card>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>
			</div>
		</section>
		<Footer/>
		</>
	);
};

