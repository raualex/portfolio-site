import React from 'react';
import { ProjectModal, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('ProjectModal', () => {
  let wrapper;
  let mockFunc = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<ProjectModal setSelectedProj={mockFunc} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('resetProject function', () => {
    it('should fire setSelectedProj with the correct params', () => {
      wrapper.instance().resetProject()
      expect(mockFunc).toHaveBeenCalledWith('')
    });
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with the selected Project', () => {
    const mockState = {
      selectedProj: 'Mentor Match',
      somethingElse: 'yaaaassssss!'
    }
    const expected = {
      selectedProj: 'Mentor Match'
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps function', () => {
  let mockDispatch = jest.fn()
  let mappedProps;

  beforeEach(() => {
    mappedProps = mapDispatchToProps(mockDispatch)
  });

  it('should call dispatch when setSelectedProj is fired', () => {
    mappedProps.setSelectedProj()
    expect(mockDispatch).toHaveBeenCalled()
  });
});