import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import 'todomvc-app-css/index.css';
const store = createStore(reducer);
render(
    <Provider
        store={store}
    >
        <App />
    </Provider>
    ,
    document.getElementById('app')
);