var React = require('react');
var GetCity = require('../component/GetCity');


var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
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
  render: function () {
    console.log(this.props.direction);
    return (
      <GetCity
      direction={this.props.direction}
      onUpdateCity={this.handleUpdateCity}
      onStartSearch={this.handleStartSearch} />
    )
  }
});

module.exports = GetCityContainer;
