import { BlogState } from '../../types';
import { Link } from 'react-router-dom';

interface IProps {
	blog: BlogState;
}

const BlogItem: React.FC<IProps> = ({ blog }) => {
	return (
		<Link to={`/blog-detail/${blog.id}`} className='blog-item'>
			<img src={blog.image} />
			<div className='blog-item__content'>
				<span>
					{blog.category} | {blog.author}
				</span>
				<h1 className='blog-item__title'>{blog.title}</h1>
			</div>
		</Link>
	);
};

export default BlogItem;
