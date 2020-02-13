import selectExpenseTotal from '../../selectors/expenses-total';
import moment from 'moment';

const expenses = [{
    id:'1',
    description:'Gum',
    note:'',
    amount:195,
    createrdAt:0
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:109500,
    createrdAt:moment(0).subtract(4, 'days').valueOf()
},{
    id:'1',
    description:'Credit Card',
    note:'',
    amount:4500,
    createrdAt:moment(0).add(4, 'days').valueOf()
}]

const total = getExpensesTotal(expenses);
console.log(total);