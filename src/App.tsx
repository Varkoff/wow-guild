import React from 'react';
import './reset.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<section id='welcome'>
				<div>
					<h1>Army of Shadows recrute !</h1>
					<p>Penses-tu être à la hauteur ?</p>
					<p>
						Emploi du temps - progression - objectifs - description des membres
						- ce que vous pouvez faire - fun
					</p>
				</div>
			</section>
			{/* <div id='effect'></div> */}

			<section id='progress'>
				<div>
					<BossIcon />
					<BossIcon />
					<BossIcon />
					<BossIcon />
					<BossIcon />
					<BossIcon />
					<BossIcon />
					<BossIcon />
				</div>
			</section>
		</div>
	);
}

export default App;

const BossIcon: React.FC<{ source?: string }> = ({
	source = '/uldir-boss1.jpg',
}) => (
	<div className='boss-card'>
		<img src={source} />
	</div>
);
