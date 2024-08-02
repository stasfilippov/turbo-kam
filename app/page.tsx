import { Advantages, ContactUs, Favors, Hero, WorkProcess } from '@/components/shared'
import MapSection from '@/components/shared/Map/mapSection'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className={'rounded-5xl bg-silver-10'}>
          <Advantages />
          <Favors />
        </div>
        <WorkProcess />
        <ContactUs />
        <div className={'-mt-[35px] rounded-t-5xl bg-silver-10'}>
          <MapSection />
        </div>
      </main>
    </>
  )
}
