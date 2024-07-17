import {Header} from '@/app/components/Header/header';
import { Hero } from './components/Hero/hero'
import {Advantages} from '@/app/components/Advantages/advantages';
import {Services} from '@/app/components/Services/services';
import {ContactUs} from '@/app/components/ContactUs/contactUs';
import { WorkProcess } from './components/WorkProcess/workProcess'
import { Footer } from './components/Footer/footer'

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <div className='bg-gray-10 rounded-5xl '>
          <Advantages/>
          <Services/>
        </div>
        <WorkProcess/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
}
