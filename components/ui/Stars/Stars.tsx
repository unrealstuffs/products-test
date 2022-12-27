import Image from 'next/image'

import styles from './Stars.module.scss'

const Stars = ({ rate }: { rate: number }) => {
	return (
		<div className={styles.stars}>
			{[...Array(5)].map((_, index) => {
				index += 1

				return (
					<Image
						src={
							index <= rate
								? '/star-active.svg'
								: '/star-inactive.svg'
						}
						alt='star'
						width={14}
						height={14}
					/>
				)
			})}
		</div>
	)
}

export default Stars
