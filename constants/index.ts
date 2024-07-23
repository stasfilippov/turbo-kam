import carMaitenance from '@/public/car-maitenance.svg'
import equipment from '@/public/equipment.svg'
import lock from '@/public/lock.svg'
import repair from '@/public/service-1.png'
import diagnostic from '@/public/service-2.png'
import removal_insertion from '@/public/service-3.png'
import shield from '@/public/shield.svg'
import time from '@/public/time.svg'
import turbine1 from '@/public/turbine1.jpeg'
import turbine2 from '@/public/turbine2.jpeg'
import turbine3 from '@/public/turbine3.jpeg'
import turbine4 from '@/public/turbine4.jpeg'
import turbine5 from '@/public/turbine5.jpeg'
import { StaticImageData } from 'next/image'

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'catalog', label: 'Каталог' },
  { href: '/', key: 'services', label: 'Услуги' },
  { href: 'about', key: 'about', label: 'O нас' },
  { href: '/', key: 'contacts', label: 'Контакты' },
]

//ADVANTAGES
export const ADVANTAGES: Advantage[] = [
  {
    description: 'Гарантия на работу до 12 месяцев без ограничения пробега.',
    key: 'shield',
    label: 'Гарантия 6 месяцев',
    src: shield,
  },
  {
    description:
      'Во время выполнения ремонта мы используем оборудование и инструменты от ведущих мировых производителей.',
    key: 'equipment',
    label: 'Ремонтное оборудование',
    src: equipment,
  },
  {
    description: 'Все наши мастера с многолетним опытом работы.',
    key: 'car_maitenance',
    label: 'Высококвалифицированные специалисты',
    src: carMaitenance,
  },
  {
    description:
      'Мы гарантируем, что наши мастера не будут навязывать вам лишние услуги, вписывать в смету несуществующие материалы.',
    key: 'lock',
    label: 'Фиксированная стоимость',
    src: lock,
  },
  {
    description: 'Мы являемся одними из лидеров рынка по ремонту и восстановлению турбин. ',
    key: 'time',
    label: 'Выполнение ремонта за 3 часа',
    src: time,
  },
]

//SERVICES
export const SERVICES: Service[] = [
  {
    key: 'repair',
    label: 'Ремонт турбин',
    src: repair,
    typesCar: ['легковые', 'коммерческие', 'грузовые'],
  },
  {
    key: 'diagnostic',
    label: 'Диагностика турбин',
    src: diagnostic,
    typesCar: ['легковые', 'коммерческие', 'грузовые'],
  },
  {
    key: 'removal_insertion',
    label: 'Снятие установка',
    src: removal_insertion,
    typesCar: ['легковые', 'коммерческие', 'грузовые'],
  },
  {
    key: 'sale',
    label: 'Продажа турбин',
    src: removal_insertion,
    typesCar: ['легковые', 'коммерческие', 'грузовые'],
  },
]

//PHOTOS
export const PHOTOS = [
  { src: turbine1 },
  { src: turbine2 },
  { src: turbine3 },
  { src: turbine4 },
  { src: turbine5 },
]

//STEPS_OF_PROCESS
export const STEPS_OF_PROCESS: StepOfProcess[] = [
  {
    description:
      'Оставьте заявку или позвоните нам, и наш  менеджер моментально приступит к её обработке.',
    id: '1',
    label: 'Консультация по телефону',
  },
  {
    description:
      'Мы производим расчёт стоимости учитывая затраты на материалы и сложность выполнения работы.',
    id: '2',
    label: 'Расчёт стоимости',
  },
  {
    description: 'Вы приезжаете к нам в центр для диагностики и ремонта.',
    id: '3',
    label: 'Прибытие к нам в  центр',
  },
  {
    description: 'Прием турбины мастером для подробной оценки состояния.',
    id: '4',
    label: 'Приемка турбины мастером',
  },
  {
    description: 'Диагностика состояния для выявления неисправностей и проблем.',
    id: '5',
    label: 'Диагностика состояния',
  },
  {
    description: 'Выполнение необходимых ремонтных работ для восстановления ункциональности.',
    id: '6',
    label: 'Выполнение работы',
  },
  {
    description: 'Итоговое тестирование для проверки работоспособности и качества ремонта.',
    id: '7',
    label: 'Итоговое тестирование',
  },
  {
    description: 'Оплата выполненных работ согласно договоренностям.',
    id: '8',
    label: 'Оплата выполненных работ',
  },
  {
    description: 'Выдача отремонтированного агрегата с гарантией качества и эффективности работы.',
    id: '9',
    label: 'Выдача агрегата',
  },
]

export type Advantage = {
  description: string
  key: string
  label: string
  src: StaticImageData
}

export type Service = {
  key: string
  label: string
  src: StaticImageData
  typesCar: string[]
}

export type StepOfProcess = {
  description: string
  id: string
  label: string
}
