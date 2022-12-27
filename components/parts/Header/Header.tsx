import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useTypedSelector } from '../../../hooks/useTypedSelector'
import styles from './Header.module.scss'

const Header = () => {
	const { cart } = useTypedSelector(state => state.cart)

	return (
		<header className={styles.header}>
			<div className={styles.logo}>Products List</div>
			<div className={styles.cart}>
				<AiOutlineShoppingCart width={30} height={30} size={30} />
				{cart.length > 0 && (
					<span className={styles.badge}>{cart.length}</span>
				)}
			</div>
		</header>
	)
}

export default Header
