jest.dontMock('../js/NewIssueForm.js');

describe('NewIssueForm', function() {
  it("is true", function() {
    var React = require('react/addons');
    var NewIssueForm = require('../js/NewIssueForm.js');
    var TestUtils = React.addons.TestUtils;

    form = TestUtils.renderIntoDocument(
      <NewIssueForm/>
    );

    var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');

    expect(button).isTruthy()

    }
  );
});
