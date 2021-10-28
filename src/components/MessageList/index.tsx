import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
	return (
		<div className={styles.messageListWrapper}>
			<img src={logoImg} alt='DoWhile 2021' />

			<ul className={styles.messageList}>
				<li className={styles.message}>
					<p className={styles.messageContent}>
						Não vejo a hora de começar esse evento, com certeza vai ser top
						<div className={styles.messageUser}>
							<div className={styles.userImage}>
								<img
									src='https://github.com/leomiranda.png'
									alt='Leo Miranda'
								/>
							</div>
							<span>Leo Miranda</span>
						</div>
					</p>
				</li>
				<li className={styles.message}>
					<p className={styles.messageContent}>
						Não vejo a hora de começar esse evento, com certeza vai ser top
						<div className={styles.messageUser}>
							<div className={styles.userImage}>
								<img
									src='https://github.com/leomiranda.png'
									alt='Leo Miranda'
								/>
							</div>
							<span>Leo Miranda</span>
						</div>
					</p>
				</li>
				<li className={styles.message}>
					<p className={styles.messageContent}>
						Não vejo a hora de começar esse evento, com certeza vai ser top
						<div className={styles.messageUser}>
							<div className={styles.userImage}>
								<img
									src='https://github.com/leomiranda.png'
									alt='Leo Miranda'
								/>
							</div>
							<span>Leo Miranda</span>
						</div>
					</p>
				</li>
			</ul>
		</div>
	);
}
