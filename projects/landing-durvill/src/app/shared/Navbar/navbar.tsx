import { SocialMediaLinks } from '../SocialMediaLinks/socialmedialinks';

export const Navbar = () => {
	return (
		<header>
			<div className="container mx-auto max-w-[1400px] bg-slate-700 flex justify-between align-center">
				<div>LogoImage</div>
				<nav>
					<ul className="flex justify-center items-center gap-4 py-2">
						<li>HOME</li>
						<li>ABOUT</li>
						<li>PRODUCTS</li>
						<li>RECIPIES</li>
						<li>CONTACT</li>
					</ul>
				</nav>

				<div>
					<SocialMediaLinks />
				</div>
			</div>
		</header>
	);
};




