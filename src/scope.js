/* Code shows how scope works in JavaScript.
 * The means of this depends of the context, example:
 *   - window reference;
 *   - function object;
 *   - argument of call/apply functions;
 */

var name; //window scope

function Person() {
    this.name = "John"; //Person scope
    
    function makeChild(n) {
        this.name = n; //window scope
	    if (typeof n == 'undefined') {
	        this.name = "John's sun";
	    }
	    return this.name;
    }
    
    this.firstChild = makeChild();
    
    // secondChild local variable, can't access outside function
    secondChild = makeChild('Joseph');
}

name = "Mary";

function getName() {
    //access window scope (pay attention)
    return this.name;
}

function getThis() {
    // window reference
    return this;
}

var _t = getThis();

var number = { 
    value: 15
};

function multiply(m) {
    return this.value * m; 
}

//'global' variavel
var Animal = {
    type: "",
    createNew: function() {
        var animal = {};
	    animal.name="";
	    
	    animal.toString = function() {
	       return "Animal ["+ Animal.type +"] "+ this.name;
	    }
	    
	    animal.changeType = function (newType) {
           //global property
	       Animal.type = newType;
        }
		
        return animal;
    }
}