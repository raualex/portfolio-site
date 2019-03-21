import React from 'react';
import { LandingPage, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('LandingPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPage selectedNav={''} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with selected Navigation object', () => {
    const mockState = {
      selectedNav: 'Landing Page',
      somethingElse: 'Rock Onnn'
    }
    const expected = {
      selectedNav: 'Landing Page'
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