/* eslint-disable @typescript-eslint/no-unused-vars */
import './Ticket.scss'
import s7logo from '../../Assets/img/S7Logo.png'

import { ITicket } from './../../Types/types'

interface ITicketProps {
  ticket: ITicket
}

const Ticket: React.FC<ITicketProps> = ({ ticket }) => {
  const LOGO_URL = 'http://pics.avs.io/99/36/'
  const getFormattedTime = (date: string | Date): string => {
    const formattedDate = typeof date === 'string' ? new Date(date) : date
    const hours = formattedDate.getHours().toString().padStart(2, '0')
    const minutes = formattedDate.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const formatTimeRange = (startTime: string | Date, duration: number): string => {
    const startDate = typeof startTime === 'string' ? new Date(startTime) : startTime
    const endTime = new Date(startDate.getTime() + duration * 60 * 1000)
    return `${getFormattedTime(startDate)} – ${getFormattedTime(endTime)}`
  }
  const formatPrice = (price: number): string => `${price.toLocaleString('ru')} ₽`

  const renderSegments = () => {
    return ticket.segments.map(({ origin, destination, date, duration, stops }, index) => (
      <div className='ticket-content' key={index}>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>{`${origin} – ${destination}`}</span>
          <p className='ticket-content-info__value'>{`${formatTimeRange(date, duration)}`}</p>
        </div>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>В пути</span>
          <p className='ticket-content-info__value'>{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</p>
        </div>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>{`${stops.length} ${
            stops.length === 1 ? 'пересадка' : stops.length > 1 && stops.length < 5 ? 'пересадки' : 'пересадок'
          }`}</span>
          <p className='ticket-content-info__value'>{stops.join(', ')}</p>
        </div>
      </div>
    ))
  }

  return (
    <div className='ticket'>
      <div className='ticket-header'>
        <h2 className='ticket-header__price'>{`${formatPrice(ticket.price)}`}</h2>
        <img className='ticket-header__logo' src={`${LOGO_URL}${ticket.carrier}.png`} alt='Логотип авиакомпании' />
      </div>
      {renderSegments()}
    </div>
  )
}
export default Ticket
