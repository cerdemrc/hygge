import Header from '../components/Header';

interface IProps {
	children: JSX.Element;
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default DefaultLayout;
