import FacebookIcon from '../../../../public/icons/facebook.svg'
import InstagramIcon from '../../../../public/icons/instagram.svg'
import YoutubeIcon from '../../../../public/icons/youtube.svg'
export const SocialMediaLinks = () => {
  return (
		<ul className="flex justify-center items-center gap-4 py-2">
			<li>
				<a href="https://www.facebook.com/DurvillFoodsUSA">
          <FacebookIcon/>
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/durvillfoods">
          <InstagramIcon />
				</a>
			</li>
			<li>
				<a href="">
					<YoutubeIcon/>
				</a>
			</li>
		</ul>
	);
}