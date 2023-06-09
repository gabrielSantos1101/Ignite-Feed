import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { Trash, ThumbsUp } from '@phosphor-icons/react'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment() {
		onDeleteComment(content)
	}

	function handleLikeCount() {
		setLikeCount((state) => {
			return state + 1
		})
	}

	return (
		<div className={styles.comment}>
			<div className={styles.commentBox}>
				<Avatar hasBorder={false} src="http://github.com/valdemirfilho.png" />
				<aside>
					<div className={styles.commentContent}>
						<header>
							<div className={styles.authorAndTime}>
								<strong>Valdemir Filho</strong>
								<time
									title="6 de maio de às 8:20"
									dateTime="2023-05-06 8:20:30"
								>
									cerca de 2h atrás
								</time>
							</div>
							<button onClick={handleDeleteComment} title="Deletar comentario">
								<Trash size={20} />
							</button>
						</header>
						<p>{content}</p>
					</div>
					<footer>
						<button onClick={handleLikeCount} className={styles.like}>
							<ThumbsUp size={20} />
							Aplaudir <span>{likeCount}</span>
						</button>
					</footer>
				</aside>
			</div>
		</div>
	)
}
