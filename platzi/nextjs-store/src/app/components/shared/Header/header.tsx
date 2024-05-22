import Link from "next/link";

export const Header = () => {
	return (
		<header>
			<nav>
				<ul className="flex justify-center items-center gap-4 py-2">
					<li>
						<Link className="hover:transition duration-200 hover:bg-gradient-to-r from-pink to-purple hover:bg-clip-text hover:text-transparent" href="/">Home</Link>
					</li>
					<li>
						<Link className="hover:transition duration-200 hover:bg-gradient-to-r from-pink to-purple hover:bg-clip-text hover:text-transparent" href="/store">Store</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
