import Image, { ImageProps } from 'next/image'
import Atropos from 'atropos/react'
import 'atropos/atropos.min.css'

export const Image3D = (props: ImageProps) => {
  /* transform: rotate3d(0, 1, 0, 180deg); */
  return (
    <Atropos>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />
    </Atropos>
  )
}
