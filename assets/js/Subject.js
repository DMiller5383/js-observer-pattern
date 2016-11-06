/**
 * @file Subject.js
 * @author Daniel Miller
 */

define(function(){
  /*
   * Any element that when changed, calls a list of observers and notifies them
   * that they need to be updated.
   *
   * @param String elem The id of the element that initiates changes.
   * @param Array observers A list of Observer objects to be updated when notify is called.
   * @return Subject Returns the Subject constructor
   */
  function Subject(elem, observers) {

    this._elem = document.getElementById(elem);
    this._observers = observers;
  }

  Subject.prototype.notify = function(observers){
    //This method is contained within a closure so that it can be used for event listeners.
    return function() {
      for(i=0; i<observers.length; i++) {
        observers[i].update();
      }
    };

  };

  return Subject;
});
