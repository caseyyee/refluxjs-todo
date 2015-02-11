/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var TodoRoutes = require('../components/todoRoutes.js');

React.renderComponent(TodoRoutes, document.getElementById('todoapp'));

