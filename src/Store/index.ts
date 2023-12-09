import { configureStore } from '@reduxjs/toolkit'

import asideFilterReducer from './asideFilter/asideFilter.slice'
import sortingPanelReducer from './sortingPanel/sortingPanel.slice'

export const store = configureStore({
  reducer: {
    asideFilterReducer,
    sortingPanelReducer,
  },
})
export type TypeRootState = ReturnType<typeof store.getState>
