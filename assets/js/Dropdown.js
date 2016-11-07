/**
 * This is a child of the subject class that will update the posts of the page
 * when the user changes the value of the subject.
 * @module Subject
 */
define(['Subject'], function(Subject){

  Dropdown.prototype = new Subject();
  /**
   * @constructor
   * @alias module: Dropdown
   * @param {String} elem The id of the title element to be changed.
   * @param {Array} observers A list of Observer objects to be updated when notify is called.
   */

  function Dropdown(elem, observers) {
    var self = this;
    Subject.call(this, elem, observers);
    //Add an additional event listener when the dropdown changes and pass list of observers.
    this._elem.addEventListener('change', self.notify(this._observers));
  }
  return Dropdown;
});
