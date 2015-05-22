var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ShowList = React.createClass({
  _unfriend: function(index){
    console.log('index', index);
    AppDispatcher.dispatch({
      actionType: 'unfriend',
      index: index
    });
  },

  render: function(){
    var listItems = this.props.names.map(function(friend, i){
      return (<li key={i}>{friend} <span><a href='#' key={i} onClick={this._unfriend.bind(this, i)}>Unfriend</a></span></li>);
    }.bind(this));
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = ShowList;
