var EventEmitter = require('events'),
  _ = require('underscore');

var CHANGE_EVENT = 'changed';

var IssueStore = _.extend({}, EventEmitter.prototype, {

  issues: [
    {id:1, title:"YO meeen", code:"REACT-1", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},
    {id:2, title:"YO meeen", code:"REACT-2", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},        
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
    //breakpoint;
    this.issues.push(issue);
    this.emitChange();
  }

});

module.exports = IssueStore;
