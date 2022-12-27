import Image from 'next/image'

import { colors } from '../../../styles/colors'
import Label from '../../ui/Label/Label'
import styles from './Promo.module.scss'

const Promo = () => {
	return (
		<div className={styles.promo}>
			<h1 className={styles.title}>Всё для комфортной работы</h1>
			<Image
				src='/arrow.svg'
				width={40}
				height={16}
				alt='arrow'
				style={{ marginBottom: 25 }}
			/>

			<div className={styles.item}>
				<div className={styles.image}>
					<Image
						alt='Image 1'
						src='/image-1.jpg'
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className={styles.text}>
					<div className={styles.textMain}>
						<Label backgroundColor={colors.info} color='#000'>
							- 25%
						</Label>{' '}
						на товары для кабинета
					</div>
					<button className={styles.textButton}>Выбрать</button>
				</div>
			</div>

			<div className={styles.item}>
				<div className={styles.text}>
					<div className={styles.textMain}>
						Скидка{' '}
						<Label
							backgroundColor={colors.info}
							color={colors.dark}
						>
							10%
						</Label>{' '}
						на периферию для компьютера
					</div>
					<button className={styles.textButton}>Выбрать</button>
				</div>
				<div className={styles.image}>
					<Image
						alt='Image 2'
						src='/image-2.jpg'
						fill
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Promo
