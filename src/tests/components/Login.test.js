import { shallow } from 'enzyme';
import React from 'react';
import {Login} from '../../components/Login';


test('should render login' , () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin}/>)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});