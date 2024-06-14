"use client";
import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { IoArrowForwardOutline, IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);

	const router = useRouter();

	useEffect(() => {
		if (errorMessage === "Success") {
			// redireccionar a la pagina de inicio
			router.replace("/");
		}
	}, [errorMessage]);
	
  
  return (
		<div className="">
			<form action={dispatch} className="flex flex-col">
				<label htmlFor="email">Correo electrónico</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="email"
					name="email"
				/>

				<label htmlFor="email">Contraseña</label>
				<input
					className="px-5 py-2 border bg-gray-200 rounded mb-5"
					type="password"
					name="password"
				/>

				<LoginButton />

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
		</div>
	);
};

function LoginButton() {
	const { pending } = useFormStatus();

	return (
		<button
			className={clsx("mt-4 w-full btn-primary flex", {
				"btn-disabled": pending,
			})}
			aria-disabled={pending}
			disabled={pending}
		>
			Log in <IoArrowForwardOutline className="ml-auto h-5 w-5 text-gray-50" />
		</button>
	);
}
