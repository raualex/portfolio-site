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