import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

test('this should test the expoense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});