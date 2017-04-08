var React = require('react');
var Main = require('../component/Main');
var apiHelper = require('../utils/apiHelper');

var MainContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      city: ''
    }
  },
  handleStartSearch: function(){
    this.context.router.push({
      pathname: '/weatherWeek',
      state: {
        city: this.state.city
      }
    });
  },
  handleUpdateCity: function(e){
    if(e.target.value !== null){
      this.setState({
        city: e.target.value
      });
    }
  },
  render: function(){
    return (
      <Main header='pass to Main'
      onStartSearch={this.handleStartSearch}
      onUpdateCity={this.handleUpdateCity}>
        {this.props.children}
      </Main>
    )
  }
});

module.exports = MainContainer;
