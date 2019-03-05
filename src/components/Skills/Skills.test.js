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
})