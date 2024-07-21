'use client'

import React, { ReactNode } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SuperButton } from '../button/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { parsePhoneNumber } from 'libphonenumber-js'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PhoneInput from "react-phone-number-input"
import { cn } from '@/lib/utils'


type Props = {
	children: ReactNode
	className?: string
}

export const zPhoneNumber = z.string().transform((value, ctx) => {
	const phoneNumber = parsePhoneNumber(value, {
		defaultCountry: "RU",
	});

	if (!phoneNumber?.isValid()) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: "Invalid phone number",
		});
		return z.NEVER;
	}

	return phoneNumber.formatInternational();
});

const formSchema = z.object({
	username: z.string().min(2).max(50),
	phone: zPhoneNumber
})

export const Modal = ({children, className} : Props) => {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {

		console.log(values)
	}

	return (
		<Dialog>
			<DialogTrigger className={className}>
				{children}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-center'>
						Оставьте свой номер, и мы перезвоним Вам
					</DialogTitle>
					<DialogDescription className='text-center'>
						Заполните форму, мы свяжемся с Вами и обсудим детали
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input className='min-w-[220px] h-[54px] rounded-2xl' placeholder="Ваше имя" {...field} />
									</FormControl>
									{/* <FormMessage className='text-red-600 font-medium max-w-[220px]' /> */} 
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormControl
									>
										<PhoneInput
											placeholder={'999 999-99-99'}
											defaultCountry="RU"
											{...field}
											className='flex w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-w-[220px] h-[54px] rounded-2xl'
										/>
									</FormControl>
									{/* <FormMessage className='text-red-500 font-medium max-w-[220px]' /> */}
								</FormItem>
							)}
						/>
						<Button className='min-w-[220px] h-[54px] flex items-center justify-center bg-primary-pink text-primary-white medium-16 rounded-2xl hover:bg-primary-pinkHovers' type="submit">
							Отправить
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
