import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { MouseContext } from '../context/mouseContext';
export default function Banner() {
	const { cursorChangeHandler } = useContext(MouseContext);

	return (
		<section className="banner">
			<div className="container">
				<div className="row">
					<h2 className="heading">
						<div className="line">
							<span>I Create Amazing Websites</span>
						</div>
						<div className="line">
							<span>That Looks And Performs Well.</span>
						</div>
					</h2>
					<Link
						to="/about"
						className="btn"
						onMouseEnter={() => cursorChangeHandler('hovered')}
						onMouseLeave={() => cursorChangeHandler('')}
					>
						More about me
						<span>
							<RightArrow />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
