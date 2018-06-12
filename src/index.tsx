import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css'

const App = () => {
    return (
        <div>
            <p>Hello World!</p>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));