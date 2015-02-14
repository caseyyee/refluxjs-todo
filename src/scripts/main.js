var React = require('react');
var Reflux = require('reflux');
var ReactRouter = require('react-router');
var TodoMain = require('./components/todoMain.jsx');
var TodoApp = require('./components/todoApp.jsx');


var routes = (
        <ReactRouter.Route handler={TodoApp}>
            <ReactRouter.Route name="All" path="/" handler={TodoMain} showing="all" />
            <ReactRouter.Route name="Completed" path="/completed" handler={TodoMain} showing="completed" />
            <ReactRouter.Route name="Active" path="/active" handler={TodoMain} showing="active" />
        </ReactRouter.Route>
);


ReactRouter.run(routes, function (Handler) {
      React.render(<Handler/>, document.getElementById('todoapp'));
});

