var React = require("react");
var Issue = require("./Issue");
var IssueList  = React.createClass({
  render: function(){
    var elements = this.props.issues.map(function(issue){
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
