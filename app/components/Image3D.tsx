'use client'
import Image, { ImageProps } from 'next/image'
import Atropos from 'atropos/react'
import 'atropos/atropos.min.css'

export const Image3D = (props: ImageProps) => {
  return (
    <Atropos rotateXMax={25}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...props} />
    </Atropos>
  )
}
