import DefaultLayout from '../../layouts/DefaultLayout';
import FilteredBlogList from '../../components/Blog/filtered';

const FilteredBlog: React.FC = () => {
	return (
		<>
			<DefaultLayout>
				<FilteredBlogList />
			</DefaultLayout>
		</>
	);
};

export default FilteredBlog;
