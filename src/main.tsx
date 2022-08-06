import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';

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
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	</React.StrictMode>
);
