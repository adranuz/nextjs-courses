import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];


export const Navbar = () => {
  return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link href='/' className='flex items-center gap-2'>
        <HomeIcon />
        <span>Home</span>
      </Link>

			<div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.href} path={item.href} text={item.label} />
      ))}
		</nav>
	);
}
