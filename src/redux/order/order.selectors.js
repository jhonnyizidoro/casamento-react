import { createSelector } from 'reselect'

const selectOrder = state => state.order

export const selectOrders = createSelector(selectOrder, order => order.orders)
export const selectUserOrders = createSelector(selectOrder, order => order.userOrders)
export const selectStates = createSelector(selectOrder, order => order.states)
export const selectCities = createSelector(selectOrder, order => order.cities)