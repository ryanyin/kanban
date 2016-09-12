/**
 * Created by z673820 on 2016/9/7.
 */

/*require('./main.css');
var component=require('./component');
var app=document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());*/

import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />,document.getElementById('app'));
