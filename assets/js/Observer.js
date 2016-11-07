/**
 * Any element that needs to be notified when a subject object is changed.  Any child class
 * class of this object should override the update method.
 * @module Observer
 */
define(function(){
  /**
   * @constructor
   * @alias module: Observer
   * @param {String} elem The id of the HTML node to be updated.
   */

  function Observer(elem) {

    this._elem = document.getElementById(elem);
  }

  Observer.prototype.update = function() {
    /** Stub method for updating HTML node. */
    return true;
  };

  return Observer;
});
