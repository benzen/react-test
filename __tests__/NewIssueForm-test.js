var moduleUnderTest = '../js/NewIssueForm' 
jest.dontMock(moduleUnderTest);

var Testutils, React, NewIssueForm

describe('NewIssueForm', function() {

  beforeEach(function(){
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    NewIssueForm = require(moduleUnderTest);
  });

  it("has a button", function() {
    var form = TestUtils.renderIntoDocument(
      <NewIssueForm/>
    );

    var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');

    expect(button).toBeTruthy()

    }
  );
  it("has 5 input", function() {
    var form = TestUtils.renderIntoDocument(
      <NewIssueForm/>
    );
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(form, 'input');

    expect(inputs.length).toBe(6)

  });
  describe("when clicking on the button", function(){
    var IssueActionCreator, IssueStore;

    beforeEach(function(){
      IssueActionCreator = require("../js/IssueActionCreator");
      IssueStore = require("../js/IssueStore");
      IssueStore.getIssues.mockReturnValue({length:0});      
    });
    
    it("it calls action creator with the new issue", function() {

      var form = TestUtils.renderIntoDocument(
        <NewIssueForm/>
      );
    
      var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');
      TestUtils.Simulate.submit(button)
      
      expect(IssueActionCreator.createNewIssue.mock.calls.length).toBe(1)

    });
  });
});
