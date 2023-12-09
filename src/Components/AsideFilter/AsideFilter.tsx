/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { enableFilter } from '../../Store/asideFilter/asideFilter.slice'
import { IFilterState, TypeFilterOption } from '../../Types/types'
import './AsideFilter.scss'

const translations: Record<TypeFilterOption, string> = {
  all: 'Все',
  noTransfer: 'Без пересадок',
  oneTransfer: '1 пересадка',
  twoTransfers: '2 пересадки',
  threeTransfers: '3 пересадки',
}

function AsideFilter() {
  const filterState = useSelector((state: { asideFilterReducer: IFilterState }) => state.asideFilterReducer)

  const dispatch = useDispatch()

  const onHandleChange = (option: TypeFilterOption) => {
    dispatch(enableFilter(option))
  }

  const getCheckedState = (option: TypeFilterOption): boolean => {
    return option in filterState ? filterState[option] : false
  }

  return (
    <div className='aside-filter'>
      <form className='aside-filter__form'>
        <fieldset className='transfer-group'>
          <p className='transfer-group__title'>Количество пересадок</p>
          <ul className='transfer-group__list'>
            {Object.keys(translations).map((option) => (
              <li key={option} className='transfer-group__item'>
                <label className='custom-checkbox__label'>
                  <input
                    className='custom-checkbox__input'
                    type='checkbox'
                    id={option}
                    checked={getCheckedState(option as TypeFilterOption)}
                    onChange={() => onHandleChange(option as TypeFilterOption)}
                  />
                  <span className='custom-checkbox__icon'></span>
                  {translations[option as TypeFilterOption]}
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
