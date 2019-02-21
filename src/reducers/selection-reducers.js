export const setSelectedNav = (state = 'Bio', action) => {
  switch(action.type) {
    case 'SELECTED_NAV':
      return action.selectedNav
    default:
      return state
  }
}