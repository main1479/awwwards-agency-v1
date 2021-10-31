import { useContext } from 'react';
import { MouseContext } from '../context/mouseContext';
export default function Header() {
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);
	return (
		<header className="header">
			<nav className="nav">
				<div className="container">
					<div className="row v-center space-between">
						<a
							href="/"
							className="logo"
							onMouseEnter={() => cursorChangeHandler('hovered')}
							onMouseLeave={() => cursorChangeHandler('')}
						>
							Agency.
						</a>
						<div
							className="nav__button"
							onMouseEnter={() => cursorChangeHandler('hovered')}
							onMouseLeave={() => cursorChangeHandler('')}
						>
							<span>&nbsp;</span>
							<span>&nbsp;</span>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
