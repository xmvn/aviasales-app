export interface IFilterState {
  all: boolean
  noTransfers: boolean
  oneTransfer: boolean
  twoTransfers: boolean
  threeTransfers: boolean
}

export type TypeFilterOption = keyof IFilterState

export interface IFlightClass {
  flightClass: string
  isActive: boolean
}

export interface ISortingPanelState {
  flightClasses: IFlightClass[]
}

export interface ITicket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string | Date
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
  ]
}

export interface ITicketsState {
  tickets: ITicket[]
  isLoading: boolean
  error: string | null
}

export interface IFilterMapping {
  noTransfers: number
  oneTransfer: number
  twoTransfers: number
  threeTransfers: number
}

export interface ITicketProps {
  ticket: ITicket
}
