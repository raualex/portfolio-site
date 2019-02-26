import { setSelectedNav, setSelectedProj } from './selection-reducers.js';

describe('setSelectedNav reducer', () => {
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
});

describe('setSelectedProj reducer', () => {
  it('should return selected project', () => {
    let expected = 'Mentor Match'
    let mockAction = {
      type: 'SELECTED_PROJECT',
      selectedProj: 'Mentor Match'
    }
    let result = setSelectedProj('', mockAction)

    expect(result).toEqual('Mentor Match')
  });

  it('should return default state', () => {
    let mockAction = {
      selectedProj: 'Mentor Match'
    }
    let result = setSelectedProj('', mockAction)

    expect(result).toEqual('')
  });
});