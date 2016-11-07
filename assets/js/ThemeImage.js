/**
 * This is a child of the observer class that will change an image on the page
 * when the user chages the value of the subject.
 * @module ThemeImage
 */

define(['Observer'], function(Observer){
  /**
   * @constructor
   * @alias module: ThemeImage
   * @param {String} elem The id of the image to be changed.
   */
  function ThemeImage(elem) {
    this.prototype = new Observer(elem);
  }

  ThemeImage.prototype = {
    /** Changes the image when notified. */
    update: function() {
      console.log('image updated');
    }
  };

  return ThemeImage;
});
