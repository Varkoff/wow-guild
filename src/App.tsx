import React from 'react';
import './reset.css';

function App() {
	return (
		<div className='App'>
			<section id='welcome-wrapper'>
				<div id='welcome-inner'>
					<h1>Army of Shadows recrute !</h1>
					<p>Penses-tu être à la hauteur ?</p>
					<p>
						Emploi du temps - progression - objectifs - description des membres
						- ce que vous pouvez faire - fun
					</p>
				</div>
			</section>
			{/* <div id='effect'></div> */}

			<section id='goals-wrapper'>
				<div id='goals-inner'>
					<h1>Nos valeurs</h1>
					<p>
						La santé et le bien-être de nos membres est une priorité pour Army
						of Shadows. Nous jouons tous à World of Warcraft pour le plaisir et
						la bonne ambiance n'est pas négociable.
					</p>
					<p>
						Cependant, on souhaite également défoncer des boss et looter des
						trésors ! Nous recherchons des profils motivés et investis, avec une
						bonne connaissance et maîtrise de leur classe.
					</p>
				</div>
			</section>
			<section id='progress-wrapper'>
				<div id='progress-inner'>
					<h1>Progression</h1>
					<div id='progress'>
						<BossIcon name='Taloc' source='/uldir-boss1.jpg' />
						<BossIcon name='MOTHER' source='/uldir-boss2.jpg' />
						<BossIcon name="Zek'Voz" source='/uldir-boss3.jpg' />
						<BossIcon name='Dévoreur' source='/uldir-boss4.jpg' />
						<BossIcon name='Vectis' source='/uldir-boss5.jpg' />
						<BossIcon name='Zul' source='/uldir-boss6.jpg' />
						<BossIcon name='Mythrax' source='/uldir-boss7.jpg' />
						<BossIcon name="G'huun" source='/uldir-boss8.jpg' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;

const BossIcon: React.FC<{ source?: string; name: string }> = ({
	source = '/uldir-boss1.jpg',
	name,
}) => (
	<div className='boss-card'>
		<b className='boss-name'>{name}</b>
		<div className='boss-details'>
			<img src='/youtube-logo.png' />
		</div>
		<img src={source} />
	</div>
);
