var React  = require("react");
var IssueList = require("./IssueList");
var NewIssueForm = require("./NewIssueForm");

React.render(
  React.createElement(IssueList),
  document.getElementById('issueList')
);

React.render(
  React.createElement(NewIssueForm),
  document.getElementById('newIssueForm')
); 


