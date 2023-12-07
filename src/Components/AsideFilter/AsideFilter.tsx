import React from 'react'
import './AsideFilter.scss'

function AsideFilter() {
  const transfers: string[] = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  return (
    <div className='aside-filter'>
      <form className='aside-filter__form'>
        <fieldset className='transfer-group'>
          <p className='transfer-group__title'>Количество пересадок</p>
          <ul className='transfer-group__list'>
            {transfers.map((option, index) => (
              <li key={option} className='transfer-group__item'>
                <label className='custom-checkbox__label' htmlFor={`transfer-${index}`}>
                  <input className='custom-checkbox__input' type='checkbox' id={`transfer-${index}`} />
                  <span className='custom-checkbox__icon'></span>
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>
    </div>
  )
}

export default AsideFilter
