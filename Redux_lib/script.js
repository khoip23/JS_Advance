import { createStore } from 'https://cdn.skypack.dev/redux';

const initState = 0

//reducer
function reducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
            break;
        case 'WITHDRAW':
            return state - action.payload;
            break;
        case 'RESET':
            return state - state;
            break;
        default:
            return state;
    }
}

const store = window.store = createStore(reducer)

function actionDeposit(payload) {
    return {
        type : 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type : 'WITHDRAW',
        payload
    }
}

function actionReset(){
    return{
        type: 'RESET',
    }
}

//dom event
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')
const reset = document.querySelector('#reset')

//even handler
deposit.onclick = function() {
    store.dispatch(actionDeposit(10))
} 

withdraw.onclick = function() {
    store.dispatch(actionWithdraw(10))
}

reset.onclick = function() {
    store.dispatch(actionReset())
}

//Listener
store.subscribe(() => {
    render()
})


// console.log(store.getState())
//render
function render() {
    const output = document.querySelector('#output')
    output.innerText = store.getState()
}

render()