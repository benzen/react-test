var EventEmitter = require('events'),
  _ = require('underscore')
  IssueDispatcher = require('./IssueDispatcher');

var CHANGE_EVENT = 'changed';

var IssueStore = _.extend({}, EventEmitter.prototype, {

  issues: [
  ], 

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getIssues: function(){
    return this.issues
  },
  
  addIssue:function(issue){
    this.issues.push(issue);
    this.emitChange();
  },

  set:function(newIssues){
    this.issues = newIssues;
    this.emitChange();
  }

});

IssueDispatcher.register(function(action){
  switch(action.type){
    case 'issue:add':
      IssueStore.addIssue(action.payload)
    break;
    case 'issue:fetch':
      IssueStore.set(action.payload)
    break;
  }
});

module.exports = IssueStore;
