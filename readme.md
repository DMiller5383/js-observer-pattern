# Observer Pattern in Javascript

The Observer pattern is very useful in programming to the DOM.  The code in this repository is written with Javascript using a module loading library called [RequireJS]("http://requirejs.org/").  [Zurb Foundation]("http://foundation.zurb.com/") was used as a css framework.

## The Code

There are two parent classes: Observer.js and Subject.js.

The following Class extends Subject.js:

* Dropdown.js

The following classes extend Observer.js:

* ThemeImage.js
* ThemePosts.js
* ThemeTitle.js

All classes are loaded in the "main.js" file.  This is the module loader, which is included with require.js.  The functions "require" or "define" are part of this library.  For more information on how this libary works: visit [requirejs.org]("http://requirejs.org").

## How it works

This pattern is useful when several objects are dependent on another object's state.  In this example in particular, there is a dropdown, which is the "Subject".  When changed, the method "notify" is called, which will update a "ThemeImage", a "ThemePosts", and a "ThemeTitle".  The three objects that are notified are children of the "Observer" class.  Each of these items has a method called "update", which overrides the method of the same name in the parent.  Each of these child classes "update" method has its own unique process.
