/*
 * Javascript for the main page. As all the components are rendered at /components/App.js
 * here we only generate the App element which holds entire app. Also, we need to
 * have App.js present, so apart from react and react-dom modules we also require /components/App
 */
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
<App/>,
document.getElementById('app')
);
