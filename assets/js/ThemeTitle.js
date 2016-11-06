/**
 * @file ThemeTitle.js
 * @author Daniel Miller
 */

define(['Observer'], function(Observer){
  /*
   * This is a child of the observer class that will change the title of the page
   * when the user chages the value of the subject.
   *
   * @param String elem The id of the title element to be changed.
   * @return ThemeTitle Returns the ThemeTitle constructor
   */

  function ThemeTitle(elem) {
    Observer.call(this, elem);
  }

  ThemeTitle.prototype = {

    update: function() {
      console.log('title updated');
    }
  };

  return ThemeTitle;
});
