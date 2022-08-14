import { useAppSelector } from '../../app/store';
import { BlogState } from '../../types';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import { useEffect } from 'react';

const BlogDetail: React.FC = () => {
	const { id } = useParams();
	const blogList = useAppSelector((state) => state.blog.blogList);
	const selectedBlog = blogList.find((blog: BlogState) => blog.id == id);

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div className='blog-detail'>
			<BackButton />
			<div className='blog-detail__top'>
				<img src={selectedBlog.image} />
				<div className='blog-detail__title'>
					<span>{selectedBlog.category}</span>
					<h1>{selectedBlog.title}</h1>
				</div>
			</div>
			<div
				className='blog-detail__content'
				dangerouslySetInnerHTML={{ __html: selectedBlog.content }}></div>
			<h3 className='blog-detail__author'>{selectedBlog.author}</h3>
		</div>
	);
};

export default BlogDetail;
