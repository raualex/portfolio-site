import React from 'react';
import { ProjectModal } from './';
import { shallow } from 'enzyme';

describe('ProjectModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectModal />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})