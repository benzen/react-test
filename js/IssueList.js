var React = require("react");
var Issue = require("./Issue");
var IssueStore = require("./IssueStore");
var IssueList  = React.createClass({
  getInitialState: function() {
    return {issues: IssueStore.getIssues()};
  },
  componentDidMount: function(){
    IssueStore.addChangeListener(this.onChange);
  },
  componentDidUnmount: function(){
    IssueStore.removeChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState({issues: IssueStore.getIssues()});
  },
  render: function(){
    var elements = this.state.issues.map(function(issue){
      return <li key={issue.id}>
        <Issue issue={issue}/>
      </li>
    })
    return <ul>
      {elements}
    </ul>
  }
});
module.exports = IssueList;
