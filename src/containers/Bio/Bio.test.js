import React from 'react';
import { Bio, mapStateToProps, mapDispatchToProps } from './';
import { shallow } from 'enzyme';

describe('Bio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Bio selectedNav={'Bio'} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});