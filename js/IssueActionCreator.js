var IssueDispatcher = require("./IssueDispatcher");

var IssueActionCreator = {
  createNewIssue:function(issue){
    IssueDispatcher.dispatch({
      type:"issue:add",
      payload: issue
    });
  },
  fetchIssues:function(){
    var issues = [
      {id:1, title:"YO meeen", code:"REACT-1", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},
      {id:2, title:"YO meeen", code:"REACT-2", reporter:"Benjamin Dreux", status:"TODO", description:"WTF", labels:"ASAP"},        
    ]; 
    
    IssueDispatcher.dispatch({
      type:'issue:fetch',
      payload: issues
    });
  }
};

module.exports = IssueActionCreator
