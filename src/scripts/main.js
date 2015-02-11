/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var TodoMain = require('../components/todoMain.js');
var TodoListStore = require('../stores/store.js');

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

var routes = (
    <ReactRouter.Routes location="hash">
        <ReactRouter.Route handler={TodoApp}>
            <ReactRouter.Route name="All" path="/" handler={TodoMain} showing="all" />
            <ReactRouter.Route name="Completed" path="/completed" handler={TodoMain} showing="completed" />
            <ReactRouter.Route name="Active" path="/active" handler={TodoMain} showing="active" />
        </ReactRouter.Route>
    </ReactRouter.Routes>
);

React.renderComponent(routes, document.getElementById('todoapp'));

