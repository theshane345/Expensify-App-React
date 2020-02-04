import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('Shoul generate set Start Date action object', () => { 
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SORT_BY_START_DATE',
        startDate:moment(0)
    })
});

test('Shoul generate set End Date action object', () => { 
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SORT_BY_END_DATE',
        endDate:moment(0)
    });
});

test('Should sort by amount', () => { 
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
});

test('Should sort by date', () => { 
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
});

test('should test filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    }) 
});

test('should test filter', () => {
    const action = setTextFilter('AMOUNT');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'AMOUNT'
    }) 
});