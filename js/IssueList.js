var React = require("react");

var IssueList  = React.createClass({
  render: function(){
    var elements = this.props.issues.map(function(issue){
      return <li>
        <Issue issue={issue}/>
      </li>
    })
    return <ul>
      {elements}
    </ul>
  }
});
module.exports = IssueList;
