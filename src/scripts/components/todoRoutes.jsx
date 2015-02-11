/** @jsx React.DOM */
var React = require('react');
var ReactRouter = require('react-router');
var TodoMain = require('../components/todoMain.js');

var TodoRoutes = (
    <ReactRouter.Routes location="hash">
        <ReactRouter.Route handler={TodoApp}>
            <ReactRouter.Route name="All" path="/" handler={TodoMain} showing="all" />
            <ReactRouter.Route name="Completed" path="/completed" handler={TodoMain} showing="completed" />
            <ReactRouter.Route name="Active" path="/active" handler={TodoMain} showing="active" />
        </ReactRouter.Route>
    </ReactRouter.Routes>
);

module.exports = TodoRoutes;
