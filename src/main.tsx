import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import Blog from './pages/Blog';
import FilteredBlog from './pages/FilteredBlog';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './app/store';
import { Provider } from 'react-redux';

const Routing = () => {
	return (
		<Routes>
			<Route path='' element={<Home />} />
			<Route path='form' element={<AddBlog />} />
			<Route path='blog-detail/:id' element={<Blog />} />
			<Route path='/:category' element={<FilteredBlog />} />
		</Routes>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<ChakraProvider>
				<BrowserRouter>
					<Routing />
				</BrowserRouter>
			</ChakraProvider>
		</React.StrictMode>
	</Provider>
);
