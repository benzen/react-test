var moduleUnderTest = '../js/NewIssueForm' 
jest.dontMock(moduleUnderTest);

var Testutils, React, NewIssueForm

describe('NewIssueForm', function() {

  beforeEach(function(){
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    NewIssueForm = require(moduleUnderTest);
  });

  it("is true", function() {
    var form = TestUtils.renderIntoDocument(
      <NewIssueForm/>
    );

    var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');

    expect(button).toBeTruthy()

    }
  );
});
