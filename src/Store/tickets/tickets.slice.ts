/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

import { ITicketsState } from './../../Types/types'

const initialState: ITicketsState = {
  tickets: [],
  isLoading: false,
  error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTickets: (state, action) => {
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
      }
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setTickets, setError } = ticketsSlice.actions
export default ticketsSlice.reducer
