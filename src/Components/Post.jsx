import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(['Post Muito da hora hein!'])
	const [newCommentText, setNewCommentText] = useState('')
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

	function handleCreatenewComment() {
		event.preventDefault()

		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleCreateNewCommentChange() {
		setNewCommentText(event.target.value)
	}

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

			<form onSubmit={handleCreatenewComment} className={styles.feedback}>
				<strong>Deixe seu feedback</strong>
				<textarea
					name="comment"
					value={newCommentText}
					onChange={handleCreateNewCommentChange}
					placeholder="Deixe um comentario"
				/>
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentBox}>
				{comments.map((comment) => {
					return <Comment content={comment} />
				})}
			</div>
		</article>
	)
}
