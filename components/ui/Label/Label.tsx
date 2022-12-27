import { colors } from '../../../styles/colors'
import styles from './Label.module.scss'

interface LabelProps {
	children: string
	backgroundColor?: string
	color?: string
}

const Label = ({
	children,
	backgroundColor = colors.primary,
	color = colors.white,
}: LabelProps) => {
	return (
		<div className={styles.label} style={{ backgroundColor, color }}>
			<span>{children}</span>
		</div>
	)
}

export default Label
