import gsap from 'gsap';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Cases from '../components/Cases';
import Overlay from '../components/Overlay';

const homeAnimation = (animationComplete) => {
	const tl = gsap.timeline();

	tl.from('.line span', 1, {
		y: 100,
		ease: 'power4.out',
		delay: 1,
		skewY: 7,
		stagger: {
			amount: 0.3,
		},
	})
		.to('.overlay-top', 1.6, {
			height: 0,
			ease: 'expo.inOut',
			stagger: 0.4,
		})
		.to('.overlay-bottom', 1.6, {
			width: 0,
			ease: 'expo.inOut',
			delay: -0.8,
			stagger: {
				amount: 0.4,
			},
		})
		.to('.intro-overlay', 0, { css: { display: 'none' } })
		.from('.case-image img', 1.6, {
			scale: 1.4,
			ease: 'expo.inOut',
			delay: -2,
			stagger: {
				amount: 0.4,
			},
			onComplete: animationComplete,
		});
};

export default function Home() {
	const [animationCompleted, setAnimationCompleted] = useState(false);
	function animationComplete() {
		setAnimationCompleted(true);
	}
	useEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		gsap.to('body', 0, { css: { visibility: 'visible' } });

		homeAnimation(animationComplete);
	}, []);
	return (
		<>
			{animationCompleted ? null : <Overlay />}
			<Banner />
			<Cases />
		</>
	);
}
