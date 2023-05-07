import { Header } from './Components/Header'
import { Post } from './Components/Post'
import './global.css'
import styles from './app.module.css'
import { Sidebar } from './Components/Sidebar'

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'http://github.com/gabrielsantos1101.png',
			name: 'Gabriel Santos',
			role: 'I need a job',
		},
		content: [
			{ type: 'paragraph', content: 'Fala Galera 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'gabs.dev/doctorcare' },
		],
		publishedAt: new Date('2023-05-07 13:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'http://github.com/diego3g.png',
			name: 'Diego Fernandes',
			role: 'CTO @rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala Galera 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'fala.dev/ignite-feed' },
		],
		publishedAt: new Date('2023-04-03 15:00:00'),
	},
]

export function App() {
	return (
		<>
			<div>
				<Header />
				<div className={styles.wrapper}>
					<Sidebar />
					<main>
						{posts.map((post) => {
							return (
								<Post
									author={post.author}
									content={post.content}
									role={post.role}
									publishedAt={post.publishedAt}
								/>
							)
						})}
					</main>
				</div>
			</div>
		</>
	)
}
