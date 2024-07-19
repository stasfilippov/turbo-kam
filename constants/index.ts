import carMaitenance from '@/public/car-maitenance.svg'
import shield from '@/public/shield.svg'
import equipment from '@/public/equipment.svg'
import lock from '@/public/lock.svg'
import time from '@/public/time.svg'
import repair from '@/public/service-1.png'
import diagnostic from '@/public/service-2.png'
import removal_insertion from '@/public/service-3.png'
import sale from '@/public/service-3.png'
import turbine1 from '@/public/turbine1.jpeg'
import turbine2 from '@/public/turbine2.jpeg'
import turbine3 from '@/public/turbine3.jpeg'
import turbine4 from '@/public/turbine4.jpeg'
import turbine5 from '@/public/turbine5.jpeg'
import {StaticImageData} from 'next/image';



// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'catalog', label: 'Каталог' },
  { href: '/', key: 'services', label: 'Услуги' },
  { href: 'about', key: 'about', label: 'O нас' },
  { href: '/', key: 'contacts', label: 'Контакты' },
];

//ADVANTAGES
export const ADVANTAGES: Advantage[] = [
  { src: shield, key: 'shield', label: 'Гарантия 6 месяцев', description: 'Гарантия на работу до 12 месяцев без ограничения пробега.' },
  { src: equipment, key: 'equipment', label: 'Ремонтное оборудование', description: 'Во время выполнения ремонта мы используем оборудование и инструменты от ведущих мировых производителей.' },
  { src: carMaitenance, key: 'car_maitenance', label: 'Высококвалифицированные специалисты', description: 'Все наши мастера с многолетним опытом работы.' },
  { src: lock, key: 'lock', label: 'Фиксированная стоимость', description: 'Мы гарантируем, что наши мастера не будут навязывать вам лишние услуги, вписывать в смету несуществующие материалы.' },
  { src: time, key: 'time', label: 'Выполнение ремонта за 3 часа', description: 'Мы являемся одними из лидеров рынка по ремонту и восстановлению турбин. ' },
];

//SERVICES
export const SERVICES: Service[] = [
  { src: repair, key: 'repair', label: 'Ремонт турбин', typesCar: ['легковые', 'коммерческие', 'грузовые'] },
  { src: diagnostic, key: 'diagnostic', label: 'Диагностика турбин', typesCar: ['легковые', 'коммерческие', 'грузовые'] },
  { src: removal_insertion, key: 'removal_insertion', label: 'Снятие установка', typesCar: ['легковые', 'коммерческие', 'грузовые'] },
  { src: sale, key: 'sale', label: 'Продажа турбин', typesCar: ['легковые', 'коммерческие', 'грузовые'] },
];

//PHOTOS
export const PHOTOS = [
  { src: turbine1 },
  { src: turbine2 },
  { src: turbine3 },
  { src: turbine4 },
  { src: turbine5 },
];

//STEPS_OF_PROCESS 
export const  STEPS_OF_PROCESS: StepOfProcess[] = [
  {id: '1', label: 'Консультация по телефону', description: 'Оставьте заявку или позвоните нам, и наш  менеджер моментально приступит к её обработке.' },
  {id: '2', label: 'Расчёт стоимости', description: 'Мы производим расчёт стоимости учитывая затраты на материалы и сложность выполнения работы.' },
  {id: '3', label: 'Прибытие к нам в  центр', description: 'Вы приезжаете к нам в центр для диагностики и ремонта.' },
  {id: '4', label: 'Приемка турбины мастером', description: 'Прием турбины мастером для подробной оценки состояния.' },
  {id: '5', label: 'Диагностика состояния', description: 'Диагностика состояния для выявления неисправностей и проблем.' },
  {id: '6', label: 'Выполнение работы', description: 'Выполнение необходимых ремонтных работ для восстановления ункциональности.' },
  {id: '7', label: 'Итоговое тестирование', description: 'Итоговое тестирование для проверки работоспособности и качества ремонта.' },
  {id: '8', label: 'Оплата выполненных работ', description: 'Оплата выполненных работ согласно договоренностям.' },
  {id: '9', label: 'Выдача агрегата', description: 'Выдача отремонтированного агрегата с гарантией качества и эффективности работы.' },
]


export type Advantage = {
  key: string
  src: StaticImageData
  label: string
  description: string
}

export type Service = {
  src: StaticImageData
  key: string
  label: string
  typesCar: string[]
}

export type StepOfProcess = {
  id: string
  label: string
  description: string
}