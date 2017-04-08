var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var styles = require('../styles/index');

var Home = React.createClass({
  render: function(){
    return (
      <div style={styles.homeBg}>
        <GetCityContainer />
      </div>
    )
  }
});

module.exports = Home;
