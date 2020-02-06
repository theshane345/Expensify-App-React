import React from 'react';
import {shallow } from  'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount ={sortByAmount}
            setStartDate ={setStartDate}
            setEndDate ={setEndDate}
        />)
});


test('this should test that expense list filters renders',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('this should test that expense list filters renders with alt data',()=>{
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const value = 'rent'
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('should sort by date',()=>{
    const value = 'date'
    wrapper.setProps({
        filters:altFilters
    });
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenLastCalledWith(value)
});

test('should sort by amount',()=>{
    const value = 'amount'
    wrapper.setProps({
        filters:filters
    });
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenLastCalledWith(value)
});

test('should handle date changes',()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate});
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
});

test('should test on focus change',()=>{
    const calanderFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calanderFocused')).toBe(calanderFocused)
});