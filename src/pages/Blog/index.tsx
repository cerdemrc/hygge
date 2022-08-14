import DefaultLayout from '../../layouts/DefaultLayout';
import BlogDetail from '../../components/Blog/detail';

const Blog: React.FC = () => {
	return (
		<>
			<DefaultLayout>
				<BlogDetail />
			</DefaultLayout>
		</>
	);
};

export default Blog;
