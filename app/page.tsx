import { Advantages } from '../components/shared/Advantages/advantages'
import { ContactUs } from '../components/shared/ContactUs/contactUs'
import { Hero } from '../components/shared/Hero/hero'
import { Services } from '../components/shared/Services/services'
import { WorkProcess } from '../components/shared/WorkProcess/workProcess'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className={'rounded-5xl bg-silver-10'}>
          <Advantages />
          <Services />
        </div>
        <WorkProcess />
        <ContactUs />
      </main>
    </>
  )
}
