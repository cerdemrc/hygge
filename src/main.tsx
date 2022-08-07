import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import { ChakraProvider } from '@chakra-ui/react';

const Routing = () => {
	return (
		<Routes>
			<Route path='' element={<Home />} />
			<Route path='form' element={<AddBlog />} />
		</Routes>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
