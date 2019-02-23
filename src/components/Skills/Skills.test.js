import React from 'react';
import { Skills } from './';
import { shallow } from 'enzyme';

describe('Skills', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Skills />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})