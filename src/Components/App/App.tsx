import React from 'react'

import './App.scss'

import TicketList from './../TicketList/TicketList'
import TicketSortingPanel from './../TicketSortingPanel/TicketSortingPanel'
import AsideFilter from './../AsideFilter/AsideFilter'
import Header from './../Header/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-content'>
        <AsideFilter />
        <div className='main-content__list'>
          <TicketSortingPanel />
          <TicketList />
        </div>
      </div>
    </div>
  )
}

export default App
