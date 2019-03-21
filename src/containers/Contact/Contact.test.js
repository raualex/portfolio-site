import React from 'react';
import { Contact, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Contact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact selectedNav={'Contact'} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with selected Navigation object', () => {
    const mockState = {
      selectedNav: 'Contact',
      somethingElse: 'w00t!'
    }
    const expected = {
      selectedNav: 'Contact'
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