import React from 'react';
import {shallow} from 'enzyme';


import Content from './../../components/Content';
import LibraryView from './../../containers/LibraryView';
import Item from './../../containers/Item';
import Form from './../../containers/Form';

describe('Content component', () => {
  it('list rendered properly', () => {
    let wrapper = shallow(<Content view={'list'}/>);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<LibraryView/>)).toEqual(true);
  });

  it('edit rendered properly', () => {
    let wrapper = shallow(<Content view={'show'}/>);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<Item/>)).toEqual(true);
  });

  it('show rendered properly', () => {
    let wrapper = shallow(<Content view={'edit'}/>);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains(<Form />)).toEqual(true);
  });
});