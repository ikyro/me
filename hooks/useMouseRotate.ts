import { useEffect, useState } from 'react'

export const useMouseRotate = ({
  initialPosition,
}: {
  initialPosition: number
}) => {
  const [rotateX, setRotateX] = useState<number>(initialPosition)

  const handleMouseMove = (e: MouseEvent) => {
    const positionX = e.clientX / (window.innerWidth / 2) - 1
    const porcentageX = positionX * (initialPosition * 2)

    setRotateX(porcentageX + initialPosition)
  }

  const handleMouseOut = (e: MouseEvent) => {
    const outY = e.clientY <= 0 || e.clientY >= window.innerHeight
    const outX = e.clientX <= 0 || e.clientX >= window.innerWidth

    if (outY || outX) {
      setRotateX(90)
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  })

  useEffect(() => {
    window.addEventListener('mouseout', handleMouseOut)

    return () => window.removeEventListener('mouseout', handleMouseOut)
  })

  return {
    rotateX,
  }
}
