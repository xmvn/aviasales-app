export interface IFilterState {
  all: boolean
  noTransfer: boolean
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
