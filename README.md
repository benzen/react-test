REACT-test
------------------

Things that surprise us
-----------------------

* Stricter dom api (input tag must closed)
* React/Flux loop seem heavy, but based on simple blocks
* Syntaxe to access to real dom node is fucked up (this.refs.labels.getDOMNode().value && @ref) 
* Some dom attribute are counter intuituve (class vs. className)
* Events must be stopped (back to e.stopPropagation() & e.preventDefault())
* React test utils must be required on beforeEach and not top of testing module to avoid seeing error: `Cannot read property 'firstChild' of undefined`

How dispatcher is different from simple event emitter ?
--------------------------------------------------------

When registering to a dispatcher change. The Reigster function return a token.
This token can be used to `waitFor`.
Using this technique allow to decide is the event handler function is called synchronously or asynchronously.
it a kind of explicit/declarative dependecy between event handler functions.

-> see https://github.com/facebook/flux/blob/master/docs/Dispatcher.md

Moreover a single dispatcher can give it's payloads to multiple store, if there is a correlation between 
the kind of data they handle. Docs mention exemple of a FlightDispatcher linked to a CountryStore, a CityStore, and a FlightStoreStore.


Jest failing when building require's dependency graph
------------------------------------------------------

When building require's dependecy graph, jest will still require every module that are expected to make the app run.
It look like when using lib like `underscore`, jest will try to mock them out.
And in this exemple this will make things break:

```
JS
var _ = require("underscore");
var Dispatcher = require("flux").Dispatcher;
var IssueDispatcher = _.extend( {}, new Dispatcher());
module.exports = IssueDispatcher;  
```

Need to update jest config (in pakcage.json) to exclude underscore from mock dependecies

-> see https://github.com/facebook/jest/issues/216


Things to explore
--------------------

Test with Jest (https://facebook.github.io/jest/)
Dependecies between stores. Could be to for selected issue, unless you've got better idea
Is this crazyness working on IE 9
Working with CSX (coffee) instead of JSX
How does react work with selectbox ?

