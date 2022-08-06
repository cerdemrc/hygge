import { FaMedium, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import './index.scss';

const Header: React.FC = () => {
	return (
		<header className='header__wrapper'>
			<div className='header'>
				<a href='#' className='header__form'>
					<HiPlus />
					<span>Write</span>
				</a>
				<a href='/' className='header__title'>
					DaBBa
				</a>
				<div className='header__social-icons'>
					<FaMedium />
					<FaTwitter />
					<FaInstagram />
				</div>
			</div>
		</header>
	);
};

export default Header;
