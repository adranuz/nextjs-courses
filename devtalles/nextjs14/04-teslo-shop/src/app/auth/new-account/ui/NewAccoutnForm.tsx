"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { login, registeruser } from "@/actions";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
  email: z.string().email().min(2, {
		message: "email must be at least 2 characters.",
	}),
  password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

export const NewAccoutnForm = () => {
  const { toast } = useToast()
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
      email: "",
      password: ""
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const response = await registeruser(values)
    console.log(response)
    if(!response.ok) {
      runToast(response.message, "destructive")
      return;
    }
    const responseLogin = await login(values.email.toLowerCase(), values.password)
    if(!responseLogin.ok) {
      runToast(responseLogin.message, "destructive")
      return;
    }
    window.location.replace('/')

	}

  const runToast = (message:string, variant:"default" | "destructive" | null | undefined) => {
    toast({
      variant,
      title: "Uh oh! Something went wrong.",
      description: message,
      // action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>


        {/* email */}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="..." {...field} type="email"/>
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
								<Input placeholder="..." {...field} type="password"/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit">Create User</Button>
			</form>
		</Form>
	);
};
