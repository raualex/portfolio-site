export const setSelectedNav = (state = '', action) => {
  switch(action.type) {
    case 'SELECTED_NAV':
      return action.selectedNav
    default:
      return state
  }
}

export const setSelectedProj = (state = '', action) => {
  switch(action.type) {
    case 'SELECTED_PROJECT':
      return action.selectedProj
    default:
      return state
  }
}