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

    it("the event sent to action creator contains a field for each input", function(){
      var form = TestUtils.renderIntoDocument(
        <NewIssueForm/>
      );
      Object.keys(form.refs).forEach(function(refName, index){ 
        var input = form.refs[refName].getDOMNode();
        input.value = index + 1
      });

      var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');
      TestUtils.Simulate.submit(button)

      var event = IssueActionCreator.createNewIssue.mock.calls[0][0];
      expect(event).toEqual({
        id: 1,
        title: '1',
        code: '2',
        status: '3',
        labels: '4',
        reporter: '5',
        description: '6',
      })
  
    });
  });
});
