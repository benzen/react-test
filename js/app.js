var React  = require("react");
var IssueList = require("./IssueList");
var NewIssueForm = require("./NewIssueForm");

var issues = [
  {id:1, title:"YO meeen", code:"REACT-1", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},
  {id:2, title:"YO meeen", code:"REACT-2", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},        
];

React.render(
  React.createElement(IssueList, {issues: issues}),
  document.getElementById('content')
);

React.render(
  React.createElement(NewIssueForm),
  document.getElementById('content')
); 


