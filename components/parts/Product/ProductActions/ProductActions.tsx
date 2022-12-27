import Image from 'next/image'
import { useState } from 'react'

import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { colors } from '../../../../styles/colors'
import Button from '../../../ui/Button/Button'
import styles from './ProductActions.module.scss'

const ProductActions = ({ id }: { id: number }) => {
	const { addToCart, addToFavs, removeFromFavs } = useActions()
	const { cart } = useTypedSelector(state => state.cart)
	const { favs } = useTypedSelector(state => state.favs)
	const [count, setCount] = useState(1)

	return (
		<div className={styles.actions}>
			<div className={styles.cart}>
				{cart.includes(id) ? (
					<Button onClick={() => {}} backgroundColor={colors.success}>
						Добавлено
					</Button>
				) : (
					<>
						<Button
							onClick={() => addToCart({ id, count })}
							backgroundColor={colors.secondary}
						>
							В корзину
						</Button>
						<div className={styles.amount}>
							<span
								className={styles.sign}
								onClick={() => setCount(state => state - 1)}
							>
								-
							</span>
							<span className={styles.digit}>{count}</span>
							<span
								className={styles.sign}
								onClick={() => setCount(state => state + 1)}
							>
								+
							</span>
						</div>
					</>
				)}
			</div>
			<div className={styles.fav}>
				{favs.includes(id) ? (
					<Image
						width={40}
						height={40}
						alt='remove from favs'
						src='/heart-active.svg'
						onClick={() => removeFromFavs(id)}
					/>
				) : (
					<Image
						width={40}
						height={40}
						alt='add to favs'
						src='/heart-inactive.svg'
						onClick={() => addToFavs(id)}
					/>
				)}
			</div>
		</div>
	)
}

export default ProductActions
