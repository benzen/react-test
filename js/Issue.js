var React = require("react");

var Issue = React.createClass({
  render: function() {
    return (
      <div className="issue">
        <div>Title: {this.props.issue.title}</div>
        <div>Code: {this.props.issue.code}</div>
        <div>Status: {this.props.issue.status}</div>
        <div>Labels: {this.props.issue.labels}</div>
        <div>Reporter: {this.props.issue.reporter}</div>
        <div>Description: {this.props.issue.description}</div>
      </div>
    );
  }
});
module.exports = Issue;
