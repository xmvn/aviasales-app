import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'

import { setTickets, setError, setLoading } from './../Store/tickets/tickets.slice'

const API_URL = 'https://aviasales-test-api.kata.academy/'
const TICKETS_URL = `${API_URL}tickets?searchId=`

///for axios
const noop = (): void => {}

console.log = noop
console.error = noop
console.table = noop

export const getSearchId = async (): Promise<string> => {
  try {
    const response: AxiosResponse = await axios.get(`${API_URL}search/`)
    try {
      localStorage.setItem('searchId', response.data.searchId)
    } catch (error) {
      console.error('Error setting searchId in localStorage: ', error)
    }
    return response.data.searchId
  } catch (error) {
    console.error('SearchId Error:', error)
    throw error
  }
}

export const fetchTicketsData = () => async (dispatch: Dispatch) => {
  try {
    let searchId = localStorage.getItem('searchId')
    if (!searchId) {
      searchId = await getSearchId()
    }
    const response = await axios.get(`${TICKETS_URL}${searchId}`)
    if (!response.data.stop) {
      dispatch(setTickets(response.data))
      fetchTicketsData()(dispatch)
    } else {
      dispatch(setTickets(response.data))
      dispatch(setLoading(false))
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error) && error.response && error.response.status < 500) {
        dispatch(setError(error.response.data.message))
      } else {
        fetchTicketsData()(dispatch)
      }
    }
  }
}
