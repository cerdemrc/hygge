import { Input, Select, Textarea, Button, Container } from '@chakra-ui/react';
import './index.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BlogCategory } from '../../types';
import { addBlog } from '../../features/blog/blogSlice';
import { useAppDispatch } from '../../app/store';
import { IoMdArrowRoundBack } from 'react-icons/io';
import BackButton from '../BackButton';

const Form: React.FC = () => {
	const dispatch = useAppDispatch();

	const [blog, setBlog] = useState({
		id: uuidv4(),
		title: '',
		author: '',
		image: '',
		category: '',
		content: '',
	});

	const handleAddBlog = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setBlog({
			...blog,
			[name]: value,
		});
	};

	const handleSubmitBlog = () => {
		dispatch(addBlog(blog));
		window.location.replace('/');
	};

	return (
		<div className='form'>
			<BackButton />

			<Container maxW='3xl'>
				<div className='form__wrapper'>
					<Input
						placeholder='Blog Title'
						name='title'
						value={blog['title']}
						onChange={(e) => handleAddBlog(e)}
					/>
					<Input
						placeholder='Author'
						name='author'
						value={blog['author']}
						onChange={(e) => handleAddBlog(e)}
					/>
					<Input
						placeholder='Image URL'
						name='image'
						value={blog['image']}
						onChange={(e) => handleAddBlog(e)}
					/>
					<Select
						placeholder='Category'
						value={blog['category']}
						name='category'
						onChange={(e) => handleAddBlog(e)}>
						{BlogCategory.map((category, index) => (
							<option key={index} value={category}>
								{category}
							</option>
						))}
					</Select>

					<Textarea
						placeholder='Blog Content'
						value={blog['content']}
						name='content'
						onChange={(e) => handleAddBlog(e)}
					/>

					<Button colorScheme='facebook' onClick={handleSubmitBlog}>
						Send
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default Form;
