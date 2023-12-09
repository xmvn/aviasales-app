import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISortingPanelState } from '../../Types/types'

const initialState: ISortingPanelState = {
  flightClasses: [
    { flightClass: 'Самый дешевый', isActive: true },
    { flightClass: 'Самый быстрый', isActive: false },
  ],
}
const sortingPanelSlice = createSlice({
  name: 'sortingPanel',
  initialState,
  reducers: {
    setSortPanelActive: (state, action: PayloadAction<number>) => {
      const updatedFlightClasses = state.flightClasses.map((flightClass, index) => ({
        ...flightClass,
        isActive: index === action.payload,
      }))

      return {
        ...state,
        flightClasses: updatedFlightClasses,
      }
    },
  },
})

export default sortingPanelSlice.reducer
export const { setSortPanelActive } = sortingPanelSlice.actions
