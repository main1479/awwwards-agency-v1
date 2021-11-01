import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';

import gsap from 'gsap';
import { MouseContext } from '../context/mouseContext';
let tl = gsap.timeline();

export const openMenu = (width) => {
	tl.to('nav.site-nav', 0, {
		css: { display: 'block' },
	})
		.to('body', 0, { css: { overflowY: 'hidden' } })
		.to('.App', 1, {
			y: width >= 768 ? '80vh' : '60vh',
			ease: 'expo.inOut',
		})
		.to('.hamburger-menu span', 0.6, {
			delay: -1,
			scaleX: 0,
			transformOrigin: '50% 0%',
			ease: 'expo.inOut',
		})
		.to('#Path_1', 0.4, {
			delay: -0.6,
			css: {
				strokeDashoffset: 10,
				strokeDasharray: 5,
			},
		})
		.to('#Path_2', 0.4, {
			delay: -0.6,
			css: {
				strokeDashoffset: 10,
				strokeDasharray: 20,
			},
		})
		.to('#Line_1', 0.4, {
			delay: -0.6,
			css: {
				strokeDashoffset: 40,
				strokeDasharray: 18,
			},
		})
		.to('#circle', 0.6, {
			delay: -0.8,
			css: {
				strokeDashoffset: 0,
			},
			ease: 'expo.inOut',
		})
		.to('.hamburger-menu-close', 0.6, {
			delay: -0.8,
			css: { display: 'block' },
		});
};

export const closeMenu = () => {
	tl.to('.App', 1, {
		y: 0,
		ease: 'expo.inOut',
	})
		.to('#circle', 0.6, {
			delay: -0.6,
			css: {
				strokeDashoffset: -193,
				strokeDasharray: 227,
			},
		})
		.to('#Path_1', 0.4, {
			delay: -0.6,
			css: {
				strokeDashoffset: 10,
				strokeDasharray: 10,
			},
		})
		.to('#Path_2', 0.4, {
			delay: -0.6,
			css: {
				strokeDashoffset: 10,
				strokeDasharray: 10,
			},
		})
		.to('#Line_1', 0.4, {
			delay: -0.6,
			css: {
				strokeDashoffset: 40,
				strokeDasharray: 40,
			},
		})
		.to('.hamburger-menu span', 0.6, {
			delay: -0.6,
			scaleX: 1,
			transformOrigin: '50% 0%',
			ease: 'expo.inOut',
		})
		.to('.hamburger-menu-close', 0, {
			delay: -0.1,
			css: { display: 'none' },
		})
		.to('body', 0, { css: { overflowY: 'auto' } })
		.to('nav.site-nav', 0, {
			css: { display: 'none' },
		});
};
// Define reducer

const Header = ({ history, dimensions }) => {
	const [menuState, setMenuState] = useState({ menuOpened: false });
	const { cursorChangeHandler } = useContext(MouseContext);
	useEffect(() => {
		//Listening for page changes.
		history.listen(() => {
			setMenuState({ menuOpened: false });
		});
		if (menuState.menuOpened === true) {
			openMenu(dimensions.width);
		} else if (menuState.menuOpened === false) {
			closeMenu();
		}
	});

	return (
		<div className="header">
			<div className="container">
				<div className="row v-center space-between">
					<div className="logo">
						<NavLink to="/" exact>
							Mainul.
						</NavLink>
					</div>
					<div
						className="nav-toggle"
						onMouseEnter={() => cursorChangeHandler('hovered')}
						onMouseLeave={() => cursorChangeHandler('')}
					>
						<div onClick={() => setMenuState({ menuOpened: true })} className="hamburger-menu">
							<span></span>
							<span></span>
						</div>
						<div
							className="hamburger-menu-close"
							onClick={() => setMenuState({ menuOpened: false })}
						>
							<UpArrow />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default withRouter(Header);
