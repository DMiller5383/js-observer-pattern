/**
 * @file Observer.js
 * @author Daniel Miller
 */
define(function(){
  /*
   * Any element that needs to be notified when a subject object is changed.  Any child class
   * class of this object should override the update method.
   *
   * @param String elem The id of the element that needs to be notified.
   * @return Observer Returns the Observer constructor
   */

  function Observer(elem) {

    this._elem = document.getElementById(elem);
  }

  Observer.prototype.update = function() {
    return true;
  };

  return Observer;
});
