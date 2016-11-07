/**
 * This is a child of the observer class that will change the title of the page
 * when the user chages the value of the subject
 * @module ThemeTitle
 */

define(['Observer'], function(Observer){
  /**
   * @constructor
   * @alias module: ThemeTitle
   * @param {String} elem The id of the title element to be changed.
   */

  function ThemeTitle(elem) {
    Observer.call(this, elem);
  }

  ThemeTitle.prototype = {
    /** Updates the page title. */
    update: function() {
      console.log('title updated');
    }
  };

  return ThemeTitle;
});
