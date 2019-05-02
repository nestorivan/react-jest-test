import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should contain 1 p element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').length).toBe(1);
  })

  //class sintax selector
  it('a element should exist', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App-link').exists()).toBe(true)
  })

  //element sintax select
  it('a element should have class', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('a').hasClass('App-link')).toBe(true)
  })

  //object property selector
  it('logo should exists', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find({alt: 'logo'}).exists()).toBe(true)
  })


});
