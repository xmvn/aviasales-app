import React from 'react'
import './TicketSortingPanel.scss'
const TicketSortingPanel = () => {
  return (
    <div className='sorting-panel'>
      <div className='sorting-panel__item item-active'>Самый дешёвый</div>
      <div className='sorting-panel__item'>Самый быстрый</div>
      <div className='sorting-panel__item'>Оптимальный</div>
    </div>
  )
}

export default TicketSortingPanel
