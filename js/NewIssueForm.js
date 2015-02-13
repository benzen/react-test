var React = require("react");

var NewIssueForm = React.createClass({
  render: function() {
    return (
      <form className="new-issue-form">
        <div class="form-group">
          <label > Title: </label>
          <input class="form-control" id="title"/>
        </div>
        <div class="form-group">
          <label > Code:  </label>
          <input class="form-control" id="code"/>
        </div>
        <div class="form-group">
          <label > Status:  </label>
          <input class="form-control" id="status"/>
        </div>

        <div class="form-group">
          <label > Labels:  </label>
          <input class="form-control" id="labels"/>
        </div>
        <div class="form-group">
          <label > Reporter:  </label>
          <input class="form-control" id="reporter"/>
        </div>
        <div class="form-group">
          <label > Description: </label>
          <input class="form-control" id="description"/>
        </div>
        <button>Add</button>
    </form>
    );
  }
});

module.exports = NewIssueForm;
