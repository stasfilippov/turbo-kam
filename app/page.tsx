import { Advantages } from './components/sections/Advantages/advantages'
import { ContactUs } from './components/sections/ContactUs/contactUs'
import { Footer } from './components/sections/Footer/footer'
import { Hero } from './components/sections/Hero/hero'
import { Services } from './components/sections/Services/services'
import { WorkProcess } from './components/sections/WorkProcess/workProcess'

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
      <Footer />
    </>
  )
}
