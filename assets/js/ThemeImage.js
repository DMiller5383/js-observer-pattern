define(['Observer'], function(Observer){

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
