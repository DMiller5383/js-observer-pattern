define(['Subject'], function(Subject){

  Dropdown.prototype = new Subject();
  function Dropdown(elem, observers) {
    var self = this;
    Subject.call(this, elem, observers);
    this._elem.addEventListener('change', self.notify(this._observers));
  }
  return Dropdown;
});
