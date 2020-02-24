import { shallow } from 'enzyme';
import React from 'react';
import {NavHeader} from '../../components/Header';


test('should render header' , () => {
    const wrapper = shallow(<NavHeader startLogout={() =>{}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<NavHeader startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});