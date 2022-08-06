import Header from '../components/Header';

type Props = {
	children: JSX.Element;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default DefaultLayout;
