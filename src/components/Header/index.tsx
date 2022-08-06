import { useState } from 'react';
import {
	FaMedium,
	FaTwitter,
	FaInstagram,
	FaAlignJustify,
} from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import './index.scss';
import Navigation from '../Navigation';

const Header: React.FC = () => {
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	const mobileMenuHandler = (state: boolean) => {
		setShowMobileMenu(state);
	};

	return (
		<>
			<header className='header__wrapper'>
				<div className='header'>
					<a href='#' className='header__form'>
						<HiPlus />
						<span>Write</span>
					</a>

					<a href='/' className='header__title'>
						DaBBa
					</a>
					{showMobileMenu ? (
						<IoCloseOutline
							className='header__close-icon'
							onClick={() => mobileMenuHandler(false)}
						/>
					) : (
						<FaAlignJustify
							className='header__hamburger-icon'
							onClick={() => mobileMenuHandler(true)}
						/>
					)}
					<div className='header__social-icons'>
						<FaMedium />
						<FaTwitter />
						<FaInstagram />
					</div>
				</div>
			</header>
			<Navigation showMobileMenu={showMobileMenu} />
		</>
	);
};

export default Header;
