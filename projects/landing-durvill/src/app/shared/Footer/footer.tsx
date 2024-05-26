import Image from 'next/image';
import DurvillIcon from '../../../../public/icons/logo.svg'
import { SocialMediaLinks } from '../SocialMediaLinks/socialmedialinks';
export const Footer = () => {
  return (
		<footer className="container mx-auto max-w-[1400px]">
      <div className='flex justify-center'>
			<DurvillIcon />
      </div>
			<hr className='my-12 bg-black-400' />
			<div>
				<div>
					<h3>Contact</h3>
					<h4>Address</h4>
					<p>3305 E. Broadway Rd. Phoenix, AZ 85040</p>

					<h4>Sales</h4>
					<p>(602) 243 7579</p>

					<h4>Inquiries</h4>
					<p>sales@durvillfoods.com</p>

					<p>2023© Durvill Foods LLC. All rights reserved.</p>
				</div>
			</div>
      <div>
        <iframe className='' src="https://www.instagram.com/durvillfoods/embed/?cr=1&v=14&wp=435&rd=https%3A%2F%2Fwww.durvill.com&rp=%2Fproducts%2Fhot-drinks-atole-de-nuez-y-avena%2F#%7B%22ci%22%3A0%2C%22os%22%3A1435%2C%22ls%22%3A624%2C%22le%22%3A1427%7D" frameBorder="0"></iframe>
      </div>
      <div>
        <h3>Follow Us</h3>
        <SocialMediaLinks />
        <h3>Hour of Operation</h3>
        <h4>Monday - Friday</h4>
        <p>8:00am - 5:00pm</p>
        <h4>Saturdays</h4>
        <p>By appointment only</p>
        <Image
          src="/icons/tilde.a77af450.svg"
          alt="TIDLE"
          width={70}
          height={37}
          priority
          />
      </div>
		</footer>
	);
}
