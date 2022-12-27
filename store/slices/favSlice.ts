import { createSlice } from '@reduxjs/toolkit'

interface IFavs {
	favs: number[]
}

const initialState: IFavs = {
	favs: [],
}

export const favSlice = createSlice({
	name: 'favs',
	initialState,
	reducers: {
		addToFavs(state, action) {
			state.favs.push(action.payload)
		},
		removeFromFavs(state, action) {
			state.favs = state.favs.filter(e => e !== action.payload)
		},
	},
})

export const favsReducer = favSlice.reducer
export const favsActions = favSlice.actions
