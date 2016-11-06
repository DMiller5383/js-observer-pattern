define(function(){

  function Observer(elem) {

    this._elem = document.getElementById(elem);
  }

  Observer.prototype.update = function() {
    return true;
  }

  return Observer;
});
