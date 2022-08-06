import './index.scss';

type Props = {
	showMobileMenu: boolean;
};

const Navigation: React.FC<Props> = ({ showMobileMenu }) => {
	return (
		<div className='navigation'>
			<ul className='navigation__desktop'>
				<li className='navigation__desktop-item'>
					<a>Sport</a>
				</li>
				<li className='navigation__desktop-item'>
					<a>Test</a>
				</li>
				<li className='navigation__desktop-item'>
					<a>News</a>
				</li>
				<li className='navigation__desktop-item'>
					<a>Magazine</a>
				</li>
			</ul>
			{showMobileMenu ? (
				<div className='navigation__mobile'>
					<ul className='navigation__mobile-list'>
						<li className='navigation__mobile-item'>
							<a>Sport</a>
						</li>
						<li className='navigation__mobile-item'>
							<a>Test</a>
						</li>
						<li className='navigation__mobile-item'>
							<a>News</a>
						</li>
						<li className='navigation__mobile-item'>
							<a>Magazine</a>
						</li>
					</ul>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Navigation;
