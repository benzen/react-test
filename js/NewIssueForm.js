var React = require("react");
var IssueStore = require("./IssueStore");
var _ = require("underscore");

var NewIssueForm = React.createClass({
  getInitialState:function(){
    return {
      id: IssueStore.getIssues().length,
      title: "",
      code: "",
      status: "",
      labels: "",
      description: "",      
    };
  },
  addIssue:function(){
    IssueStore.addIssue(_.extend({},this.state));
    this.setState(this.getInitialState());
  },
    
  render: function() {
    return (
      <form className="new-issue-form" onSubmit={this.addIssue}>
        <div className="form-group">
          <label > Title: </label>
          <input className="form-control" name="title" />
        </div>
        <div className="form-group">
          <label > Code:  </label>
          <input className="form-control" name="code"/>
        </div>
        <div className="form-group">
          <label > Status:  </label>
          <input className="form-control" name="status"/>
        </div>

        <div className="form-group">
          <label > Labels:  </label>
          <input className="form-control" name="labels"/>
        </div>
        <div className="form-group">
          <label > Reporter:  </label>
          <input className="form-control" name="reporter"/>
        </div>
        <div className="form-group">
          <label > Description: </label>
          <input className="form-control" id="description"/>
        </div>
        <button>Add</button>
    </form>
    );
  }
});

module.exports = NewIssueForm;
