// import { Article } from '@phosphor-icons/react'
import styles from './Post.module.css'

export function Post(Props) {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img src={Props.imgProfile} />
					<div className={styles.authorInfo}>
						<strong>{Props.author}</strong>
						<span>{Props.role}</span>
					</div>
				</div>

				<time title="6 de maio de às 8:20" dateTime="2023-05-06 8:20:30">
					Publicado à 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					👉 <a href="#">jane.design/doctorcare</a>
				</p>
				<p className={styles.tags}>
					<a href="#">#novoprojeto</a>
					<a href="#">#nlw</a>
					<a href="#">#rocketseat</a>
				</p>
			</div>

			<form className={styles.feedback}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentario" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
		</article>
	)
}
