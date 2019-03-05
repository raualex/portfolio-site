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
})