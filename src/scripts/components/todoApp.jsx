/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var TodoListStore = require('../stores/store.js');
var TodoHeader = require('./todoHeader.jsx');
var TodoFooter = require('./todoFooter.jsx');
var TodoMain = require('./todoMain.jsx');

// Renders the full application
// activeRouteHandler will always be TodoMain, but with different 'showing' prop (all/completed/active)
var TodoApp = React.createClass({
    // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
    mixins: [Reflux.connect(TodoListStore,"list")],

    render: function() {
        return (
            <div>
                <TodoHeader />
                <this.props.activeRouteHandler list={this.state.list} />
                <TodoFooter list={this.state.list} />
            </div>
        );
    }
});

module.exports = TodoApp;
