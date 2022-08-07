import './index.scss';
import { blogCategoryItem } from '../Form/blogCategoryItem';

type Props = {
	showMobileMenu: boolean;
};

const Navigation: React.FC<Props> = ({ showMobileMenu }) => {
	return (
		<div className='navigation'>
			<ul className='navigation__desktop'>
				{blogCategoryItem.map((category, index) => (
					<li className='navigation__desktop-item' key={index}>
						<a>{category}</a>
					</li>
				))}
			</ul>
			{showMobileMenu ? (
				<div className='navigation__mobile'>
					<ul className='navigation__mobile-list'>
						{blogCategoryItem.map((category, index) => (
							<li className='navigation__mobile-item' key={index}>
								<a>{category}</a>
							</li>
						))}
					</ul>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Navigation;
