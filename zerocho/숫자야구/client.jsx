// class, import, export default
// import React from 'react';
// import ReactDom from 'react-dom';
// import Test from './Test';
// import NumberBaseballClass from './NumberBaseballClass';

// ReactDom.render(<NumberBaseballClass />, document.querySelector("#root"));

// hooks, require, module.exports
const React = require('react');
const ReactDom = require('react-dom');
const NumberBaseballHooks = require('./NumberBaseballHooks');

ReactDom.render(<NumberBaseballHooks />, document.querySelector("#root"));