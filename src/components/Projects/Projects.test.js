import React from 'react';
import { Projects } from './';
import { shallow } from 'enzyme';

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Projects />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})