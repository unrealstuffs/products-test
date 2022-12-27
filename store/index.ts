import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slices/cartSlice'
import { favsReducer } from './slices/favSlice'

const rootReducer = {
	cart: cartReducer,
	favs: favsReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
