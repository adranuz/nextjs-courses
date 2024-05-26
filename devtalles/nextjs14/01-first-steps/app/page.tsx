import Link from "next/link";

export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center">
			<span className="text-5xl">Hola mundo!!</span>

			<Link href={'/about'}>About Page</Link>
		</main>
	);
}
