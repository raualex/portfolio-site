import { selectNavBtn, selectProject } from './selection-actions.js';

describe('selectNavBtn action', () => {
  it('should return an object with a type of SELECTED_NAV', () => {
    let mockSelectedNav = 'Bio'
    let expected = {
      type: 'SELECTED_NAV',
      selectedNav: 'Bio'
    }
    let result = selectNavBtn(mockSelectedNav)

    expect(result).toEqual(expected)
  });
});

describe('selectProject action', () => {
  it('should return an object with a type of SELECTED_PROJECT', () => {
    let mockSelectedProject = 'Mentor Match'
    let expected = {
      type: 'SELECTED_PROJECT',
      selectedProj: 'Mentor Match'
    }
    let result = selectProject(mockSelectedProject)

    expect(result).toEqual(expected)
  });
});