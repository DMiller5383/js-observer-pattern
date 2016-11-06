define(function(){

  function Subject(elem, observers) {

    this._elem = document.getElementById(elem);
    this._observers = observers;
  }

  Subject.prototype.notify = function(observers){

    return function() {
      for(i=0; i<observers.length; i++) {
        observers[i].update();
      }
    }

  }

  return Subject;
});
