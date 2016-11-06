define(['Observer'], function(Observer){

  function ThemePosts(elem) {
    Observer.call(this, elem);
  }

  ThemePosts.prototype = {

    update: function() {
      console.log('posts updated');
    }
  };

  return ThemePosts;
})
