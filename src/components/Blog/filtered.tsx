import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { getFilteredBlogList } from '../../features/blog/blogSlice';
import BlogItem from './item';
import { BlogState } from '../../types';
import './index.scss';

const FilteredBlogList: React.FC = () => {
	const { category } = useParams();
	const dispatch = useAppDispatch();
	const filteredBlogList = useAppSelector(
		(state) => state.blog.filteredBlogList
	);

	useEffect(() => {
		dispatch(getFilteredBlogList(category));
	}, []);

	return (
		<>
			{filteredBlogList.length > 0 ? (
				<div className='blog-list'>
					{filteredBlogList.map((blog: BlogState, index: number) => (
						<BlogItem key={index} blog={blog} />
					))}
				</div>
			) : (
				<h1 className='blog-info'>
					whattttt???? no blog posts for this category were found.
				</h1>
			)}
		</>
	);
};

export default FilteredBlogList;
