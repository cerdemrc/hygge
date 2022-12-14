import DefaultLayout from '../../layouts/DefaultLayout';
import BlogList from '../../components/Blog/list';

const Home: React.FC = () => {
	return (
		<>
			<DefaultLayout>
				<BlogList />
			</DefaultLayout>
		</>
	);
};

export default Home;
