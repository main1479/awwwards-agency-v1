import { useContext } from 'react';
import { MouseContext } from '../context/mouseContext';
import useMousePosition from '../hooks/useMousePosition';

const DotRing = () => {
	const { cursorType } = useContext(MouseContext);
	// 1.
	const { x, y } = useMousePosition();
	return (
		<>
			{/* 2. */}
			<div style={{ left: `${x}px`, top: `${y}px` }} className={'cursor ' + cursorType}>
				&nbsp;
			</div>
		</>
	);
};

export default DotRing;
