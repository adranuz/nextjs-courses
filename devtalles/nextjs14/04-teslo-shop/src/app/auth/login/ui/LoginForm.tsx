"use client";

import clsx from "clsx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline, IoInformationOutline } from "react-icons/io5";
import { authenticate } from "@/actions";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
	email: z.string().email().min(2, {
		message: "email must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

export const LoginForm = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	// const [errorMessage, formAction] = useFormState(authenticate, undefined);
	const [errorMessage, setErrorMessage] = useState("");
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const formData: FormData = new FormData();
		formData.append("email", values.email);
		formData.append("password", values.password);
		const response = await authenticate(undefined, formData);
		console.log(response)
		if (!response) {
			return window.location.replace("/");
		} else {
			setErrorMessage(response);
		}
	}

	const { toast } = useToast();
	const runToast = (
		message: string,
		variant: "default" | "destructive" | null | undefined
	) => {
		toast({
			variant,
			title: "Uh oh! Something went wrong.",
			description: message,
			// action: <ToastAction altText="Try again">Try again</ToastAction>,
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{/* email */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} type="email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* email */}
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} type="password" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<LoginButton pending={form.formState.isLoading} />

				<div
					className="flex h-8 items-end space-x-1"
					aria-live="polite"
					aria-atomic="true"
				>
					{errorMessage && (
						<>
							<IoInformationOutline className="h-5 w-5 text-red-500" />
							<p className="text-sm text-red-500">{errorMessage}</p>
						</>
					)}
				</div>
			</form>
			{/* divisor l ine */}
			<div className="flex items-center my-5">
				<div className="flex-1 border-t border-gray-500"></div>
				<div className="px-2 text-gray-800">O</div>
				<div className="flex-1 border-t border-gray-500"></div>
			</div>

			<Link href="/auth/new-account" className="btn-secondary text-center">
				Crear una nueva cuenta
			</Link>
		</Form>
	);
};

function LoginButton({ pending }: any) {
	return (
		<Button
			type="submit"
			className={clsx("w-full", {
				"btn-primary": !pending,
				"btn-disabled": pending,
			})}
			// disabled={pending}
		>
			Log in <IoArrowForwardOutline className="ml-auto h-5 w-5 text-gray-50" />
		</Button>
	);
}
