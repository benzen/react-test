var React = require("react"),
IssueStore = require("./IssueStore"),
_ = require("underscore")
IssueActionCreator = require("./IssueActionCreator");

var NewIssueForm = React.createClass({
  addIssue:function(e){
    var issue = {
      id: IssueStore.getIssues().length + 1,
      title: this.refs.title.getDOMNode().value,
      code: this.refs.code.getDOMNode().value,
      status: this.refs.status.getDOMNode().value,
      labels: this.refs.labels.getDOMNode().value,
      reporter: this.refs.reporter.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
    };
    IssueActionCreator.createNewIssue(issue);

    this.clean();

    e.stopPropagation();
    e.preventDefault();
  },

  clean:function(){
    this.refs.title.getDOMNode().value = "";
    this.refs.code.getDOMNode().value = "";
    this.refs.status.getDOMNode().value = "";
    this.refs.labels.getDOMNode().value = "";
    this.refs.reporter.getDOMNode().value = "";
    this.refs.description.getDOMNode().value = "";
  },
    
  render: function() {
    return (
      <form className="new-issue-form" onSubmit={this.addIssue}>
        <div className="form-group">
          <label > Title: </label>
          <input className="form-control" ref="title" />
        </div>
        <div className="form-group">
          <label > Code:  </label>
          <input className="form-control" ref="code"/>
        </div>
        <div className="form-group">
          <label > Status:  </label>
          <input className="form-control" ref="status"/>
        </div>
        <div className="form-group">
          <label > Labels:  </label>
          <input className="form-control" ref="labels"/>
        </div>
        <div className="form-group">
          <label > Reporter:  </label>
          <input className="form-control" ref="reporter"/>
        </div>
        <div className="form-group">
          <label > Description: </label>
          <input className="form-control" ref="description"/>
        </div>
        <button>Add</button>
    </form>
    );
  }
});

module.exports = NewIssueForm;
