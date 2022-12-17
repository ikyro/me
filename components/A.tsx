import { AnchorHTMLAttributes } from 'react'

export const A = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a target='_blank' rel='noopener noreferrer' {...props}>
      {props.children}
    </a>
  )
}
