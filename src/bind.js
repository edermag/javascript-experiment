/* Use of bind function.
 * @author Eder Magalhães
 */

Function.prototype.bind = function(scope) {
  var _function = this;
  
  return function() {
    return _function.apply(scope, arguments);
  }
}

//2 kinds of objects, with name property
var people = {
    name: 'Mary',
	age: 30
};

var pet = {
    name: 'Zeca',
	breed: 'Dog'
};

var out = {
    print: function() {
	    //print property name of object (binding / this)
	    return "Hy this is "+this.name;
	}
};

