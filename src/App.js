import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import gsap from 'gsap';
// Components
import Header from './components/Header';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
// Pages
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import Services from './pages/Services';
import About from './pages/About';
import './styles/App.scss';

// Routes
const routes = [
	{ path: '/case-studies', name: 'caseStudies', Component: CaseStudies },
	{ path: '/approach', name: 'approach', Component: Approach },
	{ path: '/services', name: 'services', Component: Services },
	{ path: '/about', name: 'about', Component: About },
	{ path: '/', name: 'Home', Component: Home },
];

gsap.to('body', 0, { css: { visibility: 'visible' } });
export const pageAnimation = (animationComplete) => {
	const tl = gsap.timeline();

	tl.to('.overlay-top', 1.6, {
		height: 0,
		ease: 'expo.inOut',
		delay: 1,
		stagger: 0.4,
	})
		.to('.overlay-bottom', 1.6, {
			height: 0,
			ease: 'expo.inOut',
			delay: -0.8,
			stagger: {
				amount: 0.4,
			},
		})
		.to('.intro-overlay', 0, { css: { display: 'none' } })
		.from('.page h3 span', 1.8, {
			y: 200,
			ease: 'power4.out',
			opacity: 0,
			delay: -1,
			skewY: 7,
			stagger: {
				amount: 0.5,
			},
			onComplete: animationComplete,
		});
};

function debounce(fn, ms) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

function App() {
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const vh = dimensions.height * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}, 1000);

		window.addEventListener('resize', debouncedHandleResize);
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	});

	return (
		<>
			<Cursor />
			<Header dimensions={dimensions} />
			<div className="App">
				<Switch>
					{routes.map(({ path, Component }) => (
						<Route key={path} exact path={path}>
							<Component />
						</Route>
					))}
				</Switch>
			</div>
			<Navigation />
		</>
	);
}

export default App;
