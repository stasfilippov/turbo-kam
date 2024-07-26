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
            'rounded-[10px] border-[1px] border-solid border-gray-500 bg-transparent px-3 py-2 transition-all medium-16 hover:border-gray-500 hover:bg-gray-500'
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
        'bg-primary-pink transition-all flexCenter medium-16 hover:bg-primary-pinkHover',
        className
      )}
    >
      {children}
    </Button>
  )
}
