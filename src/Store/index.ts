import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import asideFilterReducer from './asideFilter/asideFilter.slice'
import sortingPanelReducer from './sortingPanel/sortingPanel.slice'
import ticketsReducer from './tickets/tickets.slice'

export const store = configureStore({
  reducer: {
    asideFilterReducer,
    sortingPanelReducer,
    ticketsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunk)
  },
  devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
