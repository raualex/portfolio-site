import React from 'react';
import { Bio, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Bio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Bio selectedNav={'Bio'} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with selected Navigation item', () => {
    const mockState = {
      selectedNav: 'Bio',
      somethingElse: 'booyah'
    }
    const expected = {
      selectedNav: 'Bio'
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps function', () => {
  const mockDispatch = jest.fn()
  let mappedProps;

  beforeEach(() => {
    mappedProps = mapDispatchToProps(mockDispatch)
  });

  it('should call dispatch when setSelectedProj is called', () => {
    mappedProps.setSelectedProj()
    expect(mockDispatch).toHaveBeenCalled()
  });

  it('should call dispatch when setSelectedNav is called', () => {
    mappedProps.setSelectedNav()
    expect(mockDispatch).toHaveBeenCalled()
  });
});