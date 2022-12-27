import { colors } from '../../../styles/colors'
import styles from './Button.module.scss'

interface ButtonProps {
	children: string
	backgroundColor?: string
	onClick: () => void
}

const Button = ({
	children,
	backgroundColor = colors.light,
	...rest
}: ButtonProps) => {
	return (
		<button {...rest} className={styles.button} style={{ backgroundColor }}>
			{children}
		</button>
	)
}

export default Button
