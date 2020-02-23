import React from 'react';
import {shallow} from 'enzyme';
import{EditExpense} from '../../components/EditExpense';
import expense from '../fixtures/expenses'

let startEditExpense,history,wrapper,startRemoveExpense;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push:jest.fn()};
    wrapper = shallow(<EditExpense startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expense[2]}/>);
});

test('should test that the edit expense page renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should test that handle editExpense renders correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense[2].id,expense[2]);
});

test('should test that handle remove expense renders correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id:expense[2].id
    });
});
