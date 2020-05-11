import { createSelector } from 'reselect'

const selectApp = state => state.app

export const selectAppAlert = createSelector(selectApp, app => app.alert)