import DefaultLayout from '../../layouts/DefaultLayout';
import BlogList from '../../components/BlogList';

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
