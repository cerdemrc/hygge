import { IoMdArrowRoundBack } from 'react-icons/io';
import './index.scss';

const BackButton: React.FC = () => {
	return (
		<div className='back-button'>
			<a href='/'>
				<IoMdArrowRoundBack /> Back
			</a>
		</div>
	);
};

export default BackButton;
