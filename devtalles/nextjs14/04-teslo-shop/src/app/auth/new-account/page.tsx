import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { NewAccoutnForm } from "./ui/NewAccoutnForm";

export default function RegisterPage() {
	return (
		<main className="flex flex-col min-h-screen pt-32 sm:pt-52">
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva Cuenta</h1>

			<div className="flex flex-col">
        <NewAccoutnForm />


				{/* divisor l ine */}
				<div className="flex items-center my-5">
					<div className="flex-1 border-t border-gray-500"></div>
					<div className="px-2 text-gray-800">O</div>
					<div className="flex-1 border-t border-gray-500"></div>
				</div>

					<Link
						href="/auth/login"
						className="btn-secondary text-center text-primary "
					>
						Login
					</Link>

			</div>
		</main>
	);
}
