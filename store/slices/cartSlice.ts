import { createSlice } from '@reduxjs/toolkit'

interface ICart {
	cart: number[]
}

const initialState: ICart = {
	cart: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			for (let i = 0; i < action.payload.count; i++) {
				state.cart.push(action.payload.id)
			}
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
