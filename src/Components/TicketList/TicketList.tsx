/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { ITicketsState } from '../../Types/types'
import { TypeRootState } from '../../Store'
import { fetchTicketsData } from '../../Services/ApiService'

import Ticket from './../Ticket/Ticket'

import './TicketList.scss'
const TicketList = () => {
  const dispatch: ThunkDispatch<TypeRootState, null, any> = useDispatch()
  const { tickets, error } = useSelector((state: { ticketsReducer: ITicketsState }) => state.ticketsReducer)
  const [visibleTickets, setVisibleTickets] = useState(5)

  const handleShowMore = () => {
    // Увеличиваем количество видимых билетов на 5
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5)
  }

  useEffect(() => {
    localStorage.removeItem('searchId')
    dispatch(fetchTicketsData())
  }, [])

  return (
    <>
      {tickets.slice(0, visibleTickets).map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
      {visibleTickets < tickets.length && (
        <div className='show-more_button' onClick={handleShowMore}>
          показать ещё 5 билетов
        </div>
      )}
    </>
  )
}
export default TicketList
