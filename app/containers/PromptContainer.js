var React = require('react');
var Prompt = require('../component/Prompt');
var apiHelper = require('../utils/apiHelper');

var PromptContainer = React.createClass({
	componentDidMount: function(){
		console.log(this.props.location.state.city);
		apiHelper.getForecast(this.props.location.state.city);
	},
	componentDidUpdate: function(){
		console.log(this.props.location.state.city);
		apiHelper.getForecast(this.props.location.state.city);
	},
	render: function(){
		return (
			<Prompt />
		)
	}
});

module.exports = PromptContainer;
