import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFilterState } from '../../Types/types'

const initialState: IFilterState = {
  all: true,
  noTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
}

const asideFilterSlice = createSlice({
  name: 'asideFilter',
  initialState,
  reducers: {
    enableFilter: (state, action: PayloadAction<keyof IFilterState>) => {
      const { payload } = action

      if (payload === 'all') {
        const { all, ...rest } = state
        return { ...rest, all: !all, noTransfers: !all, oneTransfer: !all, twoTransfers: !all, threeTransfers: !all }
      }

      const newState = { ...state, [payload]: !state[payload] }
      const allFiltersEnabled = Object.values(newState).every(Boolean)

      return {
        ...newState,
        all:
          allFiltersEnabled ||
          (newState.noTransfers && newState.oneTransfer && newState.twoTransfers && newState.threeTransfers),
      }
    },
  },
})

export default asideFilterSlice.reducer
export const { enableFilter } = asideFilterSlice.actions
