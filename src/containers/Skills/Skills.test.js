import React from 'react';
import { Skills, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Skills', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Skills selectedNav={'Skills'} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with selected Navigation object', () => {
    const mockState = {
      selectedNav: 'Skills',
      somethingElse: 'Something More'
    }
    const expected = {
      selectedNav: 'Skills'
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