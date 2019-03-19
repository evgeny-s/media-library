import React from 'react';
import {shallow} from 'enzyme';


import Header from './../../components/Header';

describe('Header component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('should be rendered properly', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains('Media Library')).toEqual(true);
  });
});
