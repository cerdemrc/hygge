import './index.scss';
import { BlogCategory } from '../../types';
import { Link } from 'react-router-dom';
interface IProps {
	showMobileMenu: boolean;
}

const Navigation: React.FC<IProps> = ({ showMobileMenu }) => {
	return (
		<div className='navigation'>
			<ul className='navigation__desktop'>
				{BlogCategory.map((category, index) => (
					<li className='navigation__desktop-item' key={index}>
						<Link to={category}>{category}</Link>
					</li>
				))}
			</ul>
			{showMobileMenu ? (
				<div className='navigation__mobile'>
					<ul className='navigation__mobile-list'>
						{BlogCategory.map((category, index) => (
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
