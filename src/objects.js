/* Code shows how create objects in JavaScript, like OO programming language.
 * @author Eder Magalhães
 */

function Vehicle(plate) {
    this.plate = plate;
	
	function stop() {
	    return "Vehicle ["+ this.plate +"] stoped!";
	}
	
	//makes a reference to nested function
	this.onStop = stop;
}

Vehicle.prototype.drive = function () {
    return "Vehicle ["+ this.plate +"] walk on streets";
}

//another approach to define 'class', use Object.create() new objects
var Truck = {
    plate: "",
	size: 0,
	toString: function() {
	    return "Truck ["+ this.plate +"] - " + this.size;
	}
}

//other approach, 'class and constructor'
var Bike = {
    createNew: function(c, s) {
	    var bike = {};
		bike.color = c;
		bike.size = s;
		bike.toString = function() {
		    return "Bike "+this.color+" - "+this.size;
		}
		return bike;
	}
}
