import { Input, Select, Textarea, Button, Container } from '@chakra-ui/react';
import './index.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { blogCategoryItem } from './blogCategoryItem';

const Form: React.FC = () => {
	const [blog, setBlog] = useState({
		blogID: uuidv4(),
		blogTitle: '',
		blogAuthor: '',
		blogImage: '',
		blogCategory: '',
		blogContent: '',
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
		console.log(blog);
	};

	return (
		<Container maxW='3xl'>
			<div className='form__wrapper'>
				<Input
					placeholder='Blog Title'
					name='blogTitle'
					value={blog['blogTitle']}
					onChange={(e) => handleAddBlog(e)}
				/>
				<Input
					placeholder='Author'
					name='blogAuthor'
					value={blog['blogAuthor']}
					onChange={(e) => handleAddBlog(e)}
				/>
				<Input
					placeholder='Image URL'
					name='blogImage'
					value={blog['blogImage']}
					onChange={(e) => handleAddBlog(e)}
				/>
				<Select
					placeholder='Category'
					value={blog['blogCategory']}
					name='blogCategory'
					onChange={(e) => handleAddBlog(e)}>
					{blogCategoryItem.map((category, index) => (
						<option key={index} value={category}>
							{category}
						</option>
					))}
				</Select>

				<Textarea
					placeholder='Blog Content'
					value={blog['blogContent']}
					name='blogContent'
					onChange={(e) => handleAddBlog(e)}
				/>

				<Button colorScheme='facebook' onClick={handleSubmitBlog}>
					Send
				</Button>
			</div>
		</Container>
	);
};

export default Form;
