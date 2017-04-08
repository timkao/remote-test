var React = require('react');

function getStyles (props) {
  return {
    display: '-webkit-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    maxWidth: 300,
    alignSelf: 'right',
  }
}


var GetCity = React.createClass({
  render: function(){
    return (
      <div style={getStyles(this.props)}>
        <h1>Enter a City</h1>
        <form className='form-inline'>
          <input className='form-control' type='text' placeholder='City' onChange={this.props.onUpdateCity}/>
            <button type='submit' className='btn btn-danger' onClick={this.props.onStartSearch}>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = GetCity;
