var React = require("react");
var IssueStore = require("./IssueStore");
var _ = require("underscore");

var NewIssueForm = React.createClass({
  //getInitialState:function(){
    //return {
      //id: IssueStore.getIssues().length,
      //title: "",
      //code: "",
      //status: "",
      //labels: "",
      //description: "",      
    //};
  //},
  addIssue:function(e){
    var issue = {
      id: IssueStore.getIssues().length,
      title: this.refs.title.getDOMNode().value,
      code: this.refs.code.getDOMNode().value,
      status: this.refs.status.getDOMNode().value,
      labels: this.refs.labels.getDOMNode().value,
      description: this.refs.description.getDOMNode().value,
    };
    IssueStore.addIssue(_.extend({},issue));
    //this.setState(this.getInitialState());
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
