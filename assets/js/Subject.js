/**
 * Any element that when changed, calls a list of observers and notifies them
 * that they need to be updated.
 * @module Subject
 */

define(function(){
  /**
   * @constructor
   * @alias module: Subject
   * @param {String} elem The id of the element that initiates changes.
   * @param {Array} observers A list of Observer objects to be updated when notify is called.
   */
  function Subject(elem, observers) {

    this._elem = document.getElementById(elem);
    this._observers = observers;
  }

  Subject.prototype.notify = function(observers){
    /**This method is contained within a closure so that it can be used for event listeners.
     * @param {Array} observers An array of observers to be notified of a change.
     */
    return function() {
      for(i=0; i<observers.length; i++) {
        observers[i].update();
      }
    };

  };

  return Subject;
});
