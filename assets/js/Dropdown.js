/**
 * @file Dropdown.js
 * @author Daniel Miller
 */
define(['Subject'], function(Subject){
  /*
   * This is a child of the subject class that will update the posts of the page
   * when the user changes the value of the subject.
   *
   * @param String elem The id of the title element to be changed.
   * @param Array observers A list of Observer objects to be updated when notify is called.
   * @return ThemeTitle Returns the ThemeTitle constructor
   */
  Dropdown.prototype = new Subject();
  function Dropdown(elem, observers) {
    var self = this;
    Subject.call(this, elem, observers);
    this._elem.addEventListener('change', self.notify(this._observers));
  }
  return Dropdown;
});
