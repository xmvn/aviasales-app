/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

import { ITicket, ITicketsState } from './../../Types/types'

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
        isLoading: true,
      }
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setSortedTickets: (state, action) => {
      let sortingFunction
      if (action.payload === 0) {
        sortingFunction = (a: ITicket, b: ITicket) => a.price - b.price
      } else {
        sortingFunction = (a: ITicket, b: ITicket) =>
          a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      }
      const sortedTickets = [...state.tickets].sort(sortingFunction)
      return {
        ...state,
        tickets: sortedTickets,
      }
    },
  },
})

export const { setTickets, setError, setSortedTickets, setLoading } = ticketsSlice.actions
export default ticketsSlice.reducer
