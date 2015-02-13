var React  = require("react");
var IssueList = require("./IssueList");
var NewIssueForm = require("./NewIssueForm");
var IssueActionCreator = require("./IssueActionCreator");

React.render(
  React.createElement(IssueList),
  document.getElementById('issueList')
);

React.render(
  React.createElement(NewIssueForm),
  document.getElementById('newIssueForm')
); 

IssueActionCreator.fetchIssues();
