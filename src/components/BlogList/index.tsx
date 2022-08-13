import './index.scss';
import BlogItem from '../BlogItem';
import { BlogState } from '../../types';
import { useAppSelector } from '../../app/store';

const BlogList: React.FC = () => {
	const blogList = useAppSelector((state) => state.blog.blogList);

	return (
		<div className='blog-list'>
			{blogList.map((blog: BlogState, index: number) => (
				<BlogItem key={index} blog={blog} />
			))}
		</div>
	);
};

export default BlogList;
