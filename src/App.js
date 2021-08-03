import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import './App.css';
import Counter from './component/Counter'
import reducer from './reducers/counterReducer';


const store=createStore(reducer)
function App() {
  return (
 <Provider store={store}>
   <Counter />
 </Provider>
  );
}

export default App;
