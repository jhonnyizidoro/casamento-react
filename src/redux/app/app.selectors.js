import { createSelector } from 'reselect'

const selectApp = state => state.app

export const selectAppAlert = createSelector(selectApp, app => app.alert)
export const selectNavBarState = createSelector(selectApp, app => app.navBarState)
export const selectSubmitting = createSelector(selectApp, app => app.submitting)