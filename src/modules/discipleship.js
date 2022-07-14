import Snap from 'snapsvg';
export function animateGather() {
	const icon = Snap('#Gather');
	const l = icon.select('#gatherLeft');
	Snap.animate(
		0,
		20,
		function (val) {
			l.attr({ x: val });
		},
		1000,
	);
}
