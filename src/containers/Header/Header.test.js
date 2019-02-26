import React from 'react';
import { Header, mapStateToProps } from './';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('should match the snapshot with no selected project', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with a project selected', () => {
    wrapper = shallow(<Header selectedProj={'Mentor Match'} />)
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps function', () => {
  it('should return object with selected Project', () => {
    const mockState = {
      selectedProj: 'Mentor Match',
      somethingElse: 'Booyah!'
    }
    const expected = {
      selectedProj: 'Mentor Match'
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
});