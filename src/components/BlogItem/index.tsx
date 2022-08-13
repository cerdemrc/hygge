import { BlogState } from '../../types';

interface IProps {
	blog: BlogState;
}

const BlogItem: React.FC<IProps> = ({ blog }) => {
	return (
		<div className='blog-item'>
			<img src={blog.image} />
			<div className='blog-item__content'>
				<span>{blog.category} - NOV 11, 2022</span>
				<h1 className='blog-item__title'>{blog.title}</h1>
			</div>
		</div>
	);
};

export default BlogItem;
