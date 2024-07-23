'use client'

import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { parsePhoneNumber } from 'libphonenumber-js'
import { z } from 'zod'

import { SuperButton } from '../button/button'

type Props = {
  children: ReactNode
  className?: string
}

export const zPhoneNumber = z.string().transform((value, ctx) => {
  const phoneNumber = parsePhoneNumber(value, {
    defaultCountry: 'RU',
  })

  if (!phoneNumber?.isValid()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Invalid phone number',
    })

    return z.NEVER
  }

  return phoneNumber.formatInternational()
})

const formSchema = z.object({
  phone: zPhoneNumber,
  username: z.string().min(2).max(50),
})

export const Modal = ({ children, className }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: '',
    },
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger className={cn(className)}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'text-center'}>
            Оставьте свой номер, и мы перезвоним Вам
          </DialogTitle>
          <DialogDescription className={'text-center'}>
            Заполните форму, мы свяжемся с Вами и обсудим детали
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className={'flex flex-col gap-5'} onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name={'username'}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className={'h-[54px] min-w-[220px] rounded-2xl'}
                      placeholder={'Ваше имя'}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage className='text-red-600 font-medium max-w-[220px]' /> */}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={'phone'}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInput
                      defaultCountry={'RU'}
                      placeholder={'999 999-99-99'}
                      {...field}
                      className={
                        'flex h-[54px] w-full min-w-[220px] rounded-2xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      }
                    />
                  </FormControl>
                  {/* <FormMessage className='text-red-500 font-medium max-w-[220px]' /> */}
                </FormItem>
              )}
            />
            <Button
              className={
                'hover:bg-primary-pinkHovers flex h-[54px] min-w-[220px] items-center justify-center rounded-2xl bg-primary-pink text-primary-white medium-16'
              }
              type={'submit'}
            >
              Отправить
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
