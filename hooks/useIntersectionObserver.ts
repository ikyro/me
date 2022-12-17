import { RefObject, useCallback, useEffect, useState } from 'react'

export const useIntersectionObserver = ({
  ref,
}: {
  ref: RefObject<HTMLElement>
}) => {
  const [intersecting, setIntersecting] = useState<boolean>(false)

  const callback = useCallback<IntersectionObserverCallback>(
    ([{ isIntersecting }]) => {
      setIntersecting(isIntersecting)
    },
    []
  )

  useEffect(() => {
    const observerRefValue = ref.current
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 1,
    })

    if (observerRefValue) {
      observer.observe(observerRefValue)
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue)
      }
    }
  }, [ref, callback])

  return {
    intersecting,
  }
}
