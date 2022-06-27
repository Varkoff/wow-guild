import React from 'react';
import './reset.css';

function App() {
	return (
		<div className='App'>
			<section id='welcome-wrapper'>
				<div id='welcome-inner'>
					<h1>Army of Shadows recrute !</h1>
					<p>
						Rejoins une guilde présente sur Ysondre depuis vanilla, une
						communauté Discord active, des activités organisées tous les jours
						comme des raids, champs de bataille et concours de transmo !
					</p>
					<p>
						Rejoins notre groupe dynamique et progresse dans la bonne humeur !
					</p>
				</div>
			</section>

			<div id='effect'></div>

			<section id='goals-wrapper'>
				<div id='goals-inner'>
					<h1>Nos valeurs</h1>
					<p>
						La santé et le bien-être de nos membres est une priorité pour Army
						of Shadows. Nous jouons tous à World of Warcraft pour le plaisir et
						la bonne ambiance n'est pas négociable.
					</p>
					<br />
					<p>
						Cependant, on souhaite également défoncer des boss et looter des
						trésors ! Nous recherchons des profils motivés et investis, avec une
						bonne connaissance et maîtrise de leur classe.
					</p>
				</div>
			</section>
			<section id='progress-wrapper'>
				<div id='progress-inner'>
					<div className='title'>
						<h1>Progression</h1>
						<span>8/8 M</span>
					</div>
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
			<section id='offer-wrapper'>
				<div id='offer-inner'>
					<div className='title'>
						<h1>Ce que tu seras amené à faire</h1>
					</div>
					<div id='offer'>
						<div className='offer-item'>
							<h3>Raids</h3>
							<img src='raid2-icon.jpg' />
							<p>
								Viens t'optimiser avec nous en venant à bout des derniers boss.
							</p>
						</div>
						<div className='offer-item'>
							<h3>Transmogs</h3>
							<img src='transmog-icon.png' />
							<p>
								Soigne ton apparence et gagne des prix avec nos concours de
								transmos.
							</p>
						</div>
						<div className='offer-item'>
							<h3>RBG</h3>
							<img src='pvp-icon.png' />
							<p>
								Représente ta faction et prouve ton honneur sur les champs de
								bataille.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id='planning-wrapper'>
				<div id='planning-inner'>
					<div className='title'>
						<h1>Les horaires</h1>
					</div>
					<div id='planning'>
						<ul>
							<li>
								<p>Lundi 20h45-23h30</p>
								<span className='badge-raid'>Raid</span>
							</li>
							<li>
								<p>Mardi 20h45-23h30</p>
								<span className='badge-raid'>Raid</span>
							</li>
							<li>
								<p>Mercredi 14h00-17h00</p>
								<span className='badge-pvp'>RBG </span>
								<span className='badge-transmog'>Transmos</span>
							</li>
							<li>
								<p>Jeudi 20h45-23h30</p>
								<span className='badge-raid'>Raid</span>
							</li>
							<li>
								<p>Vendredi 20h45-23h30</p>
								<span className='badge-dungeon'>Donjons</span>
							</li>
							<li>
								<p>Samedi 14h00-17h00</p>
								<span className='badge-pvp'>RBG</span>
							</li>
							<li>
								<p>Dimanche 18h00-21h00</p>
								<span className='badge-dungeon'>Donjons</span>
							</li>
						</ul>
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
