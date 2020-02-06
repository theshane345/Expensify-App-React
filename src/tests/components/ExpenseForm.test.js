import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('this should test the expoense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('should render expense form with expense data', () =>{
    const wrapper = shallow(<ExpenseForm expenses = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault:() => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () =>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
    
});

test('should set note on input change', () =>{
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
    
});

test('should set amount on input change', () =>{
    const value = '12.12';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
    
});

test('should not set amount on input change, invalid value', () =>{
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
    
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault:() => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});

test('should test new date on date changed', () =>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
 });

 test('should test on focus changed', () =>{
    const focused = true
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calanderFocused')).toEqual(focused);
 });



