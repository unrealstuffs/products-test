import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { cartActions } from '../store/slices/cartSlice'
import { favsActions } from '../store/slices/favSlice'

const allActions = {
	...cartActions,
	...favsActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(allActions, dispatch)
}
