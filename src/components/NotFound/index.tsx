import NotFoundImage from '../../assets/img/not-found.png';
import './index.scss';

const NotFound: React.FC = () => {
	return (
		<div className='not-found'>
			<img src={NotFoundImage} />
			<h1 className='not-found__title'>Not Found</h1>
		</div>
	);
};

export default NotFound;
