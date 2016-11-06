/**
 * @file ThemeImage.js
 * @author Daniel Miller
 */

define(['Observer'], function(Observer){
  /*
   * This is a child of the observer class that will change an image on the page
   * when the user chages the value of the subject.
   *
   * @param String elem The id of the image element to be changed.
   * @return ThemeImage Returns the ThemeImage constructor
   */
  function ThemeImage(elem) {
    this.prototype = new Observer(elem);
  }

  ThemeImage.prototype = {

    update: function() {
      console.log('image updated');
    }
  };

  return ThemeImage;
});
