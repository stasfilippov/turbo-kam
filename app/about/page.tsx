import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'
import { PHOTOS } from '@/constants'
import owner from '@/public/owner_image.jpg'
import Image from 'next/image'

import { Footer } from '../components/sections/Footer/footer'

export default function About() {
  return (
    <>
      <section>
        <div className={'max-container mt-20'}>
          <h1 className={'mb-7 text-primary-white medium-48'}>
            <span className={'text-primary-pink'}>Турбо Кам Сервис -</span>О компании
          </h1>
        </div>
        <div className={'rounded-t-5xl bg-silver-10 p-10'}>
          <div className={'max-container'}>
            <ResizablePanelGroup className={'gap-4'} direction={'horizontal'}>
              <ResizablePanel defaultSize={25}>
                <Image alt={'owner image'} src={owner} width={250} />
              </ResizablePanel>
              <ResizablePanel defaultSize={75}>
                <h3 className={'medium-24 mb-7'}>Приветствую Вас, коллеги, друзья!</h3>
                <p className={'mb-3 medium-16'}>
                  Я, <span className={'bold-16'}>Марат Сабирзянович,</span> руководитель компании{' '}
                  <span className={'text-primary-pink bold-20'}>&quot;Турбо Кам Сервис&quot;</span>.
                  Наш центр по ремонту турбин не отстает от современного темпа развития. Мы
                  стремимся к улучшению качества предоставляемых услуг.
                </p>
                <p className={'mb-3'}>
                  Если у Вас возникнут спорные вопросы, замечания или предложения, или есть
                  претензии по работе персонала производственно-технического центра &quot;Турбо Кам
                  Сервис&quot;, мы решим Ваш вопрос за 1 час.
                </p>
                <p>Звоните по телефону +79372964868.</p>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <Separator className={'my-10 bg-gray-400'} />
          <div className={'max-container'}>
            <p className={'text-center medium-16'}>
              <span className={'medium-20'}>Компания</span>{' '}
              <span className={'text-primary-pink bold-20'}>&quot;Турбо Кам Сервис&quot;</span> была
              основана в 2012 году в качестве производственно-технического предприятия,
              специализирующегося на ремонте, продаже и диагностике турбин (турбокомпрессоров) и
              систем турбонаддува для различных типов двигателей внутреннего сгорания. В настоящее
              время мы занимаем лидирующие позиции в данной отрасли на российском рынке.
            </p>
            <div className={'p-10'}>
              <Carousel
                className={'w-full'}
                opts={{
                  align: 'start',
                }}
              >
                <CarouselContent>
                  {PHOTOS.map((item, index) => (
                    <CarouselItem className={'md:basis-1/2 lg:basis-1/3'} key={index}>
                      <div className={'p-1'}>
                        <Card className={'relative h-[200px] rounded-3xl'}>
                          <Image
                            alt={'turbine_img'}
                            className={'rounded-3xl object-cover object-center'}
                            fill
                            src={item.src}
                          />
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
      <Footer />
    </>
  )
}
