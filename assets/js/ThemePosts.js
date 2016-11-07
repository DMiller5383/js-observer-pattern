/**
 * This is a child of the observer class that will update the posts of the page
 * when the user changes the value of the subject.
 * @module ThemeTitle
 */

define(['Observer'], function(Observer){
  /**
   * @constructor
   * @alias module: ThemePosts
   * @param {String} elem The id of the posts container to be updated.
   */

  function ThemePosts(elem) {
    Observer.call(this, elem);
  }

  ThemePosts.prototype = {
    /** Filters posts for the new theme */
    update: function() {
      console.log('posts updated');
    }
  };

  return ThemePosts;
});
