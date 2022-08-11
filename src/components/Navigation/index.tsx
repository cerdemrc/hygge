import './index.scss';
import { blogCategoryItem } from '../Form/blogCategoryItem';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogTitle } from '../../features/blog/blogSlice';

type Props = {
	showMobileMenu: boolean;
};

const Navigation: React.FC<Props> = ({ showMobileMenu }) => {
	const blogID = useSelector((state: RootState) => state.blog.id);
	const dispatch = useDispatch();

	return (
		<div className='navigation'>
			<button onClick={() => dispatch(getBlogTitle('BLOG TITLE'))}>
				get title
			</button>
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
