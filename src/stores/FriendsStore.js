var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _friends = ['Klay Thompson', 'Draymond Green', 'Andre Iguodala'];

var FriendsStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of friends.
   * @return {object}
   */
  getAll: function() {
    return _friends;
  },

  emitChange: function() {
    this.emit('change');
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case 'unfriend':
      var friendIndex = action.index;
      _friends.splice(friendIndex, 1);
      FriendsStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = FriendsStore;
