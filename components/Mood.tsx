'use client'
import { useMouseRotate } from '../hooks/useMouseRotate'

export const Mood = () => {
  const { rotateX } = useMouseRotate({ initialPosition: 90 })

  return (
    <div className='absolute top-4 left-0 right-0 text-center'>
      <p className='rotate-on-cursor text-3xl select-none'>{':)'}</p>
      <style jsx>{`
        .rotate-on-cursor {
          transform: rotate(${rotateX}deg);
          transition-property: transform;
          transition-duration: 100ms;
          transition-timing-function: linear;
        }
      `}</style>
    </div>
  )
}
