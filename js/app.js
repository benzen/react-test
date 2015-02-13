var React  = require("react");
var IssueList = require("./IssueList");
var NewIssueForm = require("./NewIssueForm");

var issues = [
  {title:"YO meeen", code:"REACT-1", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},
  {title:"YO meeen", code:"REACT-2", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},        
];

React.render(
  React.createElement(IssueList, {issues: issues}),
  document.getElementById('issueList')
);
React.render(
  React.createElement(NewIssueForm),
  document.getElementById('newIssueForm')
); 


