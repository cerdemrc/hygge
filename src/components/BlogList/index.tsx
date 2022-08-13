import './index.scss';
import BlogItem from '../BlogItem';
import { useAppSelector } from '../../app/store';

const BlogList: React.FC = () => {
	const blogList = useAppSelector((state) => state.blog);

	return (
		<div className='blog-list'>
			{blogList.map((blog) => (
				<BlogItem key={blog.id} blog={blog} />
			))}
		</div>
	);
};

export default BlogList;
