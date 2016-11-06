define(['Observer'], function(Observer){

  function ThemeTitle(elem) {
    Observer.call(this, elem);
  }

  ThemeTitle.prototype = {

    update: function() {
      console.log('title updated');
    }
  };

  return ThemeTitle;
})
