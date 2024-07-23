import { ReactNode } from 'react'

import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  children: ReactNode
  className?: string
  href?: string
  variant?: 'link'
}

export const SuperButton = ({ children, className, href = '/', variant }: Props) => {
  if (variant) {
    if (variant === 'link') {
      return (
        <Button
          className={
            'medium-16 border-[1px] border-gray-500 border-solid px-3 py-2 rounded-[10px] transition-all hover:bg-gray-500 hover:border-gray-500 bg-transparent'
          }
        >
          <Link href={href}>{children}</Link>
        </Button>
      )
    }
  }

  return (
    <Button
      className={cn(
        'flexCenter bg-primary-pink transition-all hover:bg-primary-pinkHover medium-16 ',
        className
      )}
    >
      {children}
    </Button>
  )
}
