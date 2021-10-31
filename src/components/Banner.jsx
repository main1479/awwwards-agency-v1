import { useContext } from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import { MouseContext } from '../context/mouseContext';
export default function Banner() {
	const { cursorType, cursorChangeHandler } = useContext(MouseContext);

	return (
		<section className="banner">
			<div className="container">
				<div className="row">
					<h2 className="heading">
						<div className="line">
							<span>Creating unique brands is</span>
						</div>
						<div className="line">
							<span>what we do.</span>
						</div>
					</h2>
					<a
						href="/"
						className="btn"
						onMouseEnter={() => cursorChangeHandler('hovered')}
						onMouseLeave={() => cursorChangeHandler('')}
					>
						More about us
						<span>
							<RightArrow />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
