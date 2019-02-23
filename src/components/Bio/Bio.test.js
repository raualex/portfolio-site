import React from 'react';
import { Bio } from './';
import { shallow } from 'enzyme';

describe('Bio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Bio />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})