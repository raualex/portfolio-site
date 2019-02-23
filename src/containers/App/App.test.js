import React from 'react';
import { App, mapStateToProps } from './';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  
  it('should return with selected Navigation Item', () => {
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