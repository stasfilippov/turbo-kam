'use client'

import React from 'react';
import bg_turbine_repair from '@/public/turbine_rep.jpg'
import 'react-phone-number-input/style.css'
import { z } from "zod"
import {parsePhoneNumber} from 'libphonenumber-js';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Image from 'next/image';
import PhoneInput from "react-phone-number-input"

//TODO - handling form error
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

export const ContactUs = () => {

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
		<section className='bg-gradient-to-b from-[#1e1e1ef4] rounded-t-5xl relative'>
			<Image className='object-cover object-center -z-10 rounded-t-5xl' fill={true} src={bg_turbine_repair} alt={'turbine_repair'}/>
			<div className='max-container flex flex-col justify-center items-center min-h-[800px]'>
				<h2 className='mb-6 max-w-[600px] text-center inline-block medium-64 text-primary-white leading-[50px] tracking-[2px]'>Ответим на все ваши вопросы</h2>
				<p className='mb-12 inline-block text-center max-w-[400px] text-primary-white medium-16'>Оставьте заявку, и мы свяжемся с вами, чтобы обсудить все ваши вопросы</p>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-8">
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
						<Button className='min-w-[220px] h-[54px] flex items-center justify-center bg-primary-pink text-primary-white medium-16 rounded-2xl hover:bg-primary-pinkHovers' type="submit">Отправить</Button>
					</form>
				</Form>
			</div>
		</section>
	);
};

