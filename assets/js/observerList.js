define(function(){
  var _observerList;

  var init = function() {
    _observerList = [];

  }

  var observerList = function() {
    return _observerList;
  }

  var addToObserverList = function(obj) {

    _observerList.push(obj);
  }

  var emptyObserverList = function() {
    _observerList = [];
  }

  var listLength = function() {
    return observerList.length;
  }

  return {
    init: init,
    observerList: observerList,
    addToObserverList: addToObserverList,
    emptyObserverList: emptyObserverList,
    listLength: listLength
  }
});
