interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<main>
			<nav>Navegación de las categorías</nav>
			{children}
		</main>
	);
}
