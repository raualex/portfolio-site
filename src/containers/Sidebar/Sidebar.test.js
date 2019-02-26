import React from 'react';
import { Sidebar, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Sidebar', () => {
  let wrapper;
  let mockFunc = jest.fn();
  let mockFunc2 = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Sidebar setSelectedNav={mockFunc} selectedProj={''} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('setNav function', () => {
    it('should fire setSelectedNav with the correct params if no project selected', () => {
      let mockEvent = { target: { innerHTML: 'Bio' } }
      wrapper.instance().setNav(mockEvent)
      expect(mockFunc).toHaveBeenCalledWith('Bio')
    });

    it('should prevent the default action if there is a project selected', () => {
      wrapper = shallow(<Sidebar setSelectedNav={mockFunc} selectedProj={'Bio'} />)
      let mockEvent = { preventDefault: mockFunc2, target: { innerHTML: 'Bio' } }
      wrapper.instance().setNav(mockEvent)
      expect(mockFunc2).toHaveBeenCalled()
    });
  });
});

describe('mapStateToProps function', () => {
  
  it('should return object with selected Navigation item', () => {
    const mockState = {
      selectedNav: 'Bio',
      somethingElse: 'Not Bio'
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

  it('should call dispatch when setSelectedNav is called', () => {
    mappedProps.setSelectedNav()
    expect(mockDispatch).toHaveBeenCalled()
  });
});