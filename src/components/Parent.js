var React = require('react');
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
        <h1> React Starter Kit! </h1>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  },

  _onChange: function() {
    this.setState({friends: FriendsStore.getAll()});
  }
});

module.exports = FriendsContainer;
