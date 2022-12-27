import { ReactNode } from 'react'

import styles from './Grid.module.scss'

interface GridProps {
	children: ReactNode
}

const Grid = ({ children }: GridProps) => {
	return <div className={styles.grid}>{children}</div>
}

export default Grid
