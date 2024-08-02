'use client'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/shared/Map/map'), { ssr: false })

export default function MapSection() {
  return (
    <>
      <div>
        <Map />
      </div>
    </>
  )
}
