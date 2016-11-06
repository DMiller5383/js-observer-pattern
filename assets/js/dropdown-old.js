define(["observerList", "ThemeImage", "ThemeTitle", "posts", "Observer"], function(observerList, ThemeImage, ThemeTitle, Observer){

  var _observers;
  var _themeImage;
  var _themeTitle;


  var init = function(elem) {

    _themeImage = new ThemeImage('theme-image');
    _themeTitle = new ThemeTitle('theme-title');
    _observers = [_themeImage,_themeTitle];
    //observerList.init();

    _elem = document.getElementById(elem);
    addEventHandlers();
    //addObservers();
  }

  var addEventHandlers = function() {
    _elem.addEventListener('change', notifyObservers);
  }

  var addObservers = function() {
    observerList.addToObserverList();

  }

  var notifyObservers = function() {
    //console.log('asdf');
    for(i=0; i<_observers.length; i++) {
      _observers[i].update();
    }

  }
  return {
    init: init
  }
});
``
