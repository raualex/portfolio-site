import { setSelectedNav } from './selection-reducers.js';

describe('setSelectedNav action', () => {
  
  it('should return selected Nav', () => {
    let expected = 'Bio'
    let mockAction = {
      type: 'SELECTED_NAV',
      selectedNav: 'Bio'
    }
    let result = setSelectedNav('',mockAction)

    expect(result).toEqual(expected)
  });

  it('should return default state', () => {
    let mockAction = {
      selectedNav: 'Bio'
    }
    let result = setSelectedNav('', mockAction)

    expect(result).toEqual('')
  });
})