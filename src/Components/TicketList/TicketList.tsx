/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Spin, Alert } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import { IFilterState, ITicket, ITicketsState, IFilterMapping } from '../../Types/types'
import { TypeRootState } from '../../Store'
import { fetchTicketsData } from '../../Services/ApiService'

import Ticket from './../Ticket/Ticket'

import './TicketList.scss'

const TicketList = () => {
  const dispatch: ThunkDispatch<TypeRootState, null, any> = useDispatch()
  const { tickets, error, isLoading } = useSelector((state: { ticketsReducer: ITicketsState }) => state.ticketsReducer)
  const filterState = useSelector((state: { asideFilterReducer: IFilterState }) => state.asideFilterReducer)
  const [visibleTickets, setVisibleTickets] = useState(5)

  const handleShowMore = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5)
  }

  const ticketsToShow = (tickets: ITicket[], filterState: IFilterState): ITicket[] => {
    const filterMapping: IFilterMapping = {
      noTransfers: 0,
      oneTransfer: 1,
      twoTransfers: 2,
      threeTransfers: 3,
    }

    const activeFilters = Object.keys(filterState).filter(
      (key) => filterState[key as keyof IFilterState] && key !== 'all'
    ) as (keyof IFilterMapping)[]

    return tickets.filter((ticket) => {
      const stopsLength = Math.min(ticket.segments[0].stops.length, ticket.segments[1].stops.length)
      const ticketFilter = activeFilters.find((filter) => filterMapping[filter] === stopsLength)
      return filterState.all || (ticketFilter !== undefined && activeFilters.includes(ticketFilter))
    })
  }

  useEffect(() => {
    localStorage.removeItem('searchId')
    dispatch(fetchTicketsData())
  }, [])

  const slicedTickets = ticketsToShow(tickets, filterState).slice(0, visibleTickets)

  return (
    <>
      {error ? (
        <div className='error-message'>
          <Alert message='Error' description={error} type='error' showIcon />
        </div>
      ) : (
        <>
          {isLoading && (
            <div className='loading'>
              <Spin size='large' />
            </div>
          )}
          {slicedTickets.length > 0 ? (
            slicedTickets.map((ticket) => <Ticket key={uuidv4()} ticket={ticket} />)
          ) : (
            <h2>Рейсов, подходящих под заданные фильтры, не найдено!</h2>
          )}
          {visibleTickets <= slicedTickets.length && (
            <div className='show-more_button' onClick={handleShowMore}>
              показать ещё 5 билетов
            </div>
          )}
        </>
      )}
    </>
  )
}
export default TicketList
