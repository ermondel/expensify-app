import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const i = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return { count: state.count + i };
        case 'DECREMENT':
            const d = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - d };
        case 'SET':
            return { count: action.count }
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ 
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({ 
    type: 'DECREMENT',
});

store.dispatch({ 
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});
