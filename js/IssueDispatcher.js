var _ = require("underscore");
var Dispatcher = require("flux").Dispatcher;

var IssueDispatcher = _.extend( new Dispatcher(), {});

module.exports = IssueDispatcher;  
