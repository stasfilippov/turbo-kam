import Script from 'next/script'

const MAP_API_KEY = process.env.NEXT_PUBLIC_YANDEX_MAP_KEY

export const YMapLoader = () => {
  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/3.0/?apikey=${MAP_API_KEY}&lang=ru_RU`}
        strategy={'beforeInteractive'}
        type={'module'}
      />
    </>
  )
}
