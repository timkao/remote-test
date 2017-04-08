var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var MainContainer = require('../containers/MainContainer');
var Home = require('../component/Home');
var PromptContainer = require('../containers/PromptContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <Route path='home' component={Home} />
      <Route path='weatherWeek' component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
