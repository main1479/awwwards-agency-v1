import React, { useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import './styles/App.scss';

function App() {
	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// const mouse = window.addEventListener('mousemove', (e) => {
		// 	document.documentElement.style.setProperty('--c-top', `${e.offsetY}px`);
		// 	document.documentElement.style.setProperty('--c-left', `${e.offsetX}px`);
		// });
		// return window.removeEventListener('mousemove', mouse);
	}, []);

	return (
		<div className="App">
			<Cursor />
			<Header />
			<Home />
		</div>
	);
}

export default App;
