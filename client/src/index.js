import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
 import {startGetUser } from './actions/userAction'
//  import {startGetProfile } from './actions/userAction'


const store= configureStore()


store.subscribe(()=>{
    console.log('store value', store.getState())
})

//handle page reloads
if(localStorage.getItem('tokenAssessment1')){
    store.dispatch(startGetUser())
    // store.dispatch(startGetProfile())
}
 
const ele = (
    <Provider store={store}>
        <App/>
    </Provider>     
) 

ReactDOM.render(ele, document.getElementById('root'))