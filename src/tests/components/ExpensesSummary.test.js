import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpensesSummary';

test('should correctly render expenses sumamry with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal ={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses sumamry with multiple expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal ={221343123535}/>);
    expect(wrapper).toMatchSnapshot();
});