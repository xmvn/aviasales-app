/* eslint-disable @typescript-eslint/no-unused-vars */
import './TicketSortingPanel.scss'
import { useDispatch, useSelector } from 'react-redux'

import { setSortPanelActive } from '../../Store/sortingPanel/sortingPanel.slice'
import { ISortingPanelState, IFlightClass } from '../../Types/types'

const TicketSortingPanel = () => {
  const sortingPanelState = useSelector(
    (state: { sortingPanelReducer: ISortingPanelState }) => state.sortingPanelReducer
  )
  const dispatch = useDispatch()

  const handleItemClick = (clickedIndex: number) => {
    dispatch(setSortPanelActive(clickedIndex))
  }

  return (
    <div className='sorting-panel'>
      {sortingPanelState.flightClasses.map((flightClass: IFlightClass, index: number) => (
        <div
          key={index}
          onClick={() => handleItemClick(index)}
          className={`sorting-panel__item ${flightClass.isActive ? 'item-active' : ''}`}
        >
          {flightClass.flightClass}
        </div>
      ))}
    </div>
  )
}

export default TicketSortingPanel
