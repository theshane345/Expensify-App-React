import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense,
    addExpense, editExpense,
    removeExpense,
    setExpenses,
    startEditExpense,
    startSetExpenses,
    startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


const uid = 'thisismytestuid'
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(( {id,description,note,amount,createdAt}) => {
        expensesData[id] = {description,note,amount,createdAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});


test('Should set up remove expese object', () => {
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('should remove expense from firebase', () => {
    const store = createMockStore({auth:{uid}});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        
    });
});

test('Should set up edit expese object', () => {
    const action = editExpense('123abc',undefined);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:undefined
    })
});

test('should update expense from firebase', () => {
    const store = createMockStore({auth:{uid}});
    const id = expenses[2].id;
    const updates = {amount:32131};
    store.dispatch(startEditExpense(id,updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).tobe(updates.amount);
        ;
    });
});

test('should setup add expense action object with provided values', () => {
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', () => {
    const store = createMockStore({auth:{uid}});
    const expenseData = { 
        description:'mouse',
        amount:3000,
        note:'this one is good',
        createdAt:68762678
    };
    
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
    });
});


test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({auth:{uid}});
    const expenseDefaults = { 
        description:'',
        amount:0,
        note:'',
        createdAt:0
    };
    
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('should set up set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expoenses from firebase', (done) => {
    const store = createMockStore({auth:{uid}});
    store.dispatch(startSetExpenses()).then(() => {
        const actions =store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
        done();
    });
});