import React from 'react';
import { App, mapStateToProps } from './';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot with no Project selected', () => {
    wrapper = shallow(<App selectedProj={''} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot if a Project is selected', () => {
    wrapper = shallow(<App selectedProj={'Projects'} />)
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  
  it('should return an object with selected Navigation Item', () => {
    const mockState = {
      selectedNav: 'Bio',
      somethingElse: "Not Bio"
    }
    const expected = {
      selectedNav: 'Bio'
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
});