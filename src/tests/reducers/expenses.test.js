import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('this tests set default state ' , () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})


test('this tests the add expense' , () => {
    const expense = {
        id:'109',
        description:'Phone',
        note:'',
        amount:295000,
        createdAt:200001
    };
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});


test('this tests the edit expense' , () => {
    const amount = 195000
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toEqual(amount);
});


test('this tests the edit expense doesnt exsist' , () => {
    test('this tests the edit expense' , () => {
        const amount = 195000
        const action = {
            type:'EDIT_EXPENSE',
            id:expenses[4].id,
            updates: {
                amount
            }
        };
        const state = expensesReducer(expenses, action);
        expect(state[1].amount).toEqual(undefined);
    });
    
});

test('this tests the remove expense by id' , () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('this tests the remove expense by id but doesnt exsist' , () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
});

test('should set expenses', () => {
    const action = {
        type:'SET_EXPENSES',
        expenses:expenses[1]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses[1]);
});

