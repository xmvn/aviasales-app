/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'

import { setTickets, setError } from './../Store/tickets/tickets.slice'

const API_URL = 'https://aviasales-test-api.kata.academy/'
const TICKETS_URL = `${API_URL}tickets?searchId=`

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
    console.log('Using searchId:', searchId)
    const response = await axios.get(`${TICKETS_URL}${searchId}`)
    if (!response.data.stop) {
      dispatch(setTickets(response.data))
      console.log(response.data)
      fetchTicketsData()(dispatch)
    } else {
      dispatch(setTickets(response.data))
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error) && error.response && error.response.status < 500) {
        dispatch(setError(error.response.data.message))
      } else {
        console.log('Retrying fetchTicketsData...')
        fetchTicketsData()(dispatch)
      }
    }
  }
}
