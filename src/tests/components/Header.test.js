import React from 'react';
import {shallow} from 'enzyme';
import Header from './../../components/Header';

describe('Test: Header component', () => {
  it('Header component rendered properly', () => {
    let component = shallow(<Header/>);

    expect(component.length).toEqual(1);
    expect(component.contains('Media Library')).toEqual(true);
  });
});