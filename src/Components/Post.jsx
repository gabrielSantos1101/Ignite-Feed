import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
	const publishedDateFormated = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBr,
		}
	)
	const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
		locale: ptBr,
		addSuffix: true,
	})

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormated}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativetoNow}
				</time>
			</header>
			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p>{line.content}</p>
					} else if (line.type === 'link') {
						return (
							<p>
								<a href="$">{line.content}</a>
							</p>
						)
					}
				})}
			</div>

			<form className={styles.feedback}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentario" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentBox}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	)
}
