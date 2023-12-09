import Ticket from './../Ticket/Ticket'

import './TicketList.scss'

const TicketList = () => {
  return (
    <>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <div className='show-more_button'>показать ещё 5 билетов</div>
    </>
  )
}
export default TicketList
