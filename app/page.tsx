import { Advantages, ContactUs, Favors, Hero, WorkProcess } from '@/components/shared'

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
      </main>
    </>
  )
}
