import { Header } from './Components/Header'
import { Post } from './Components/Post'
import './global.css'
import styles from './app.module.css'
import { Sidebar } from './Components/Sidebar'

export function App() {
	return (
		<>
			<div>
				<Header />
				<div className={styles.wrapper}>
					<Sidebar />
					<main>
						<Post
							author="Gabriel Santos"
							imgProfile="http://github.com/gabrielsantos1101.png"
							content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
						/>
						<Post
							author="Diego Fernades"
							imgProfile="http://github.com/diego3g.png"
							content="Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 "
						/>
					</main>
				</div>
			</div>
		</>
	)
}
