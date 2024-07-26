'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'

import { Button, Form, FormControl, FormField, FormItem, Input } from '@/components/ui'
import bg_turbine_repair from '@/public/turbine_rep.jpg'
import { zodResolver } from '@hookform/resolvers/zod'
import { parsePhoneNumber } from 'libphonenumber-js'
import Image from 'next/image'
import { z } from 'zod'

import 'react-phone-number-input/style.css'

//TODO - handling form error
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

export const ContactUs = () => {
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
    <section className={'relative rounded-t-5xl bg-gradient-to-b from-[#1e1e1ef4]'}>
      <Image
        alt={'turbine_repair'}
        className={'-z-10 rounded-t-5xl object-cover object-center'}
        fill
        src={bg_turbine_repair}
      />
      <div className={'max-container flex min-h-[800px] flex-col items-center justify-center'}>
        <h2
          className={
            'mb-6 inline-block max-w-[600px] text-center leading-[50px] tracking-[2px] text-primary-white medium-64'
          }
        >
          Ответим на все ваши вопросы
        </h2>
        <p className={'mb-12 inline-block max-w-[400px] text-center text-primary-white medium-16'}>
          Оставьте заявку, и мы свяжемся с вами, чтобы обсудить все ваши вопросы
        </p>
        <Form {...form}>
          <form className={'flex gap-8'} onSubmit={form.handleSubmit(onSubmit)}>
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
      </div>
    </section>
  )
}
