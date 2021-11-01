import { useEffect, useState } from 'react';
import { pageAnimation } from '../App';
import Overlay from '../components/Overlay';

export default function Approach() {
	const [animationCompleted, setAnimationCompleted] = useState(false);
	function animationComplete() {
		setAnimationCompleted(true);
	}
	const title = 'This is the Approach page';
	useEffect(() => {
		pageAnimation(animationComplete);
	}, []);
	return (
		<>
			{animationCompleted ? null : <Overlay />}
			<div className="page">
				<div className="container">
					<div className="row">
						<h3>
							{title.split(' ').map((letter) => (
								<span key={letter}>{letter}</span>
							))}
						</h3>
					</div>
				</div>
			</div>
		</>
	);
}
