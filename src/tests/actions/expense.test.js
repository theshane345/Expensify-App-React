import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should set up remove expese object', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('Should set up edit expese object', () => {
    const action = editExpense('123abc',undefined);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:undefined
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData = { 
        description:'rent',
        amount:10900,
        createdAt:1000,
        note:'this was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    });
});


test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    });
})

