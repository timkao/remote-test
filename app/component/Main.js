var React = require('react');
var styles = require('../styles/index');
var Link = require('react-router').Link;

var Main = React.createClass({

  render: function(){
    return (
      <div className="main-container">
        <div className="row text-center" style={styles.topBar}>
          <div className="col-sm-7">{this.props.header}</div>
          <div className="col-sm-5">
            <form className='form-inline'>
              <input className='form-control' type='text' placeholder='City' onChange={this.props.onUpdateCity}/>
                <button type='submit' className='btn btn-danger' onClick={this.props.onStartSearch}>Get Weather</button>
            </form>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
