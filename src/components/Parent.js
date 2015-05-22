var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FriendsStore = require('../stores/FriendsStore');
var ShowList = require('./Child');

var FriendsContainer = React.createClass({
  getInitialState: function() {
    return {
      name: 'Steph Curry',
      friends: FriendsStore.getAll()
    };
  },

  componentDidMount: function() {
    FriendsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FriendsStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <h1>React Starter Kit!</h1>
        <h3>Name: {this.state.name}</h3>
        <ShowList names={this.state.friends} />
        <form onSubmit={this._handleSubmit}>
          <input type="text" placeholder="Add a friend" ref="name"/>
          <input type="submit" />
        </form>
      </div>
    )
  },

  _onChange: function() {
    this.setState({friends: FriendsStore.getAll()});
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    if (!name) return;
    
    AppDispatcher.dispatch({
      actionType: 'addFriend',
      friendName: name
    });    
    
    React.findDOMNode(this.refs.name).value = '';
    return;
  }
});

module.exports = FriendsContainer;
