import { Image3D } from './Image3D'
import useSWRImmutable from 'swr/immutable'
import { useEffect } from 'react'

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => URL.createObjectURL(blob))

export const ImageObserver = ({
  observer,
  url,
}: {
  observer: boolean
  url: string
}) => {
  const { data, isLoading, mutate } = useSWRImmutable(
    `/api/screenshots?url=${url}&w=375&h=667`,
    fetcher,
    {
      revalidateOnMount: false,
    }
  )

  useEffect(() => {
    if (observer) {
      mutate()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observer])

  console.log({ data, isLoading, mutate, observer })

  return (
    <>
      {/*       {isLoading || !observer ? (
        <div className='h-[534px] w-[300px] animate-pulse bg-gray-300' />
      ) : (
        <Image3D
          src={data as string}
          alt={`screenshot of ${url}`}
          width={300}
          height={300}
          className='select-none'
        />
      )} */}

      {(isLoading || !data) && (
        <div className='h-[534px] w-[300px] animate-pulse bg-gray-300' />
      )}
      {Boolean(data) && (
        <Image3D
          src={data as string}
          alt={`screenshot of ${url}`}
          width={300}
          height={300}
          className='select-none'
        />
      )}
      {/* <Image3D
        src={`/ctrl-v.png`}
        alt={`screenshot of ${url}`}
        width={300}
        height={300}
        className='select-none'
      /> */}
      {/* <div className='h-[534px] w-[300px] animate-pulse bg-gray-300' /> */}
    </>
  )
}
