var React = require("react");

var NewIssueForm = React.createClass({
  render: function() {
    return (
      <form className="new-issue-form">
        <div className="form-group">
          <label > Title: </label>
          <input className="form-control" id="title"/>
        </div>
        <div className="form-group">
          <label > Code:  </label>
          <input className="form-control" id="code"/>
        </div>
        <div className="form-group">
          <label > Status:  </label>
          <input className="form-control" id="status"/>
        </div>

        <div className="form-group">
          <label > Labels:  </label>
          <input className="form-control" id="labels"/>
        </div>
        <div className="form-group">
          <label > Reporter:  </label>
          <input className="form-control" id="reporter"/>
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
