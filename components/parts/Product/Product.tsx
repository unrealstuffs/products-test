import Image from 'next/image'

import { ProductType } from '../../../types/Product'
import { formatCurrency } from '../../../utils/numberFormatter'
import Label from '../../ui/Label/Label'
import Stars from '../../ui/Stars/Stars'
import styles from './Product.module.scss'
import ProductActions from './ProductActions/ProductActions'

const Product = ({ product }: { product: ProductType }) => {
	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<Image
					alt={product.title}
					src={product.image}
					fill
					style={{ objectFit: 'contain' }}
				/>
				{product.rating.count > 300 && (
					<div className={styles.hit}>
						<Label>Хит</Label>
					</div>
				)}
			</div>
			<div className={styles.info}>
				<span className={styles.category}>{product.category}</span>
				<div className={styles.reviews}>
					<Stars rate={Math.round(product.rating.rate)} />
					<span className={styles.count}>
						{product.rating.count} отзывов
					</span>
				</div>
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{formatCurrency.format(product.price * 70)} <span>/шт.</span>
			</div>
			<ProductActions id={product.id} />
		</div>
	)
}

export default Product
