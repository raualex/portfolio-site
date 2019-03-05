import React from 'react';
import { Projects, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Projects', () => {
  let wrapper;
  let mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Projects setSelectedProj={mockFunc} selectedNav={'Projects'} />)
  });

  it('should match the snapshot if no project is selected', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot if a project is selected', () => {
    wrapper = shallow(<Projects selectedProj={'Bio'} selectedNav={'Projects'}  />)
    expect(wrapper).toMatchSnapshot()
  });

  describe('setProject function', () => {
    it('should fire setSelectedProj with the correct params', () => {
      wrapper.instance().setProject('Mentor Match')
      expect(mockFunc).toHaveBeenCalledWith('Mentor Match')
    });
  });
});

describe('mapStateToProps function', () => {
  it('should return an object with the selected project', () => {
    const mockState = {
      selectedProj: 'Mentor Match',
      somethingElse: 'w00t!'
    }
    const expected = {
      selectedProj: 'Mentor Match'
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
});