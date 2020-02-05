import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/404Page';


test('should render 404page', ()=>{
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});