/* Code shows aproach to use inheritance (prototype based) in JavaScript. 
 * @author Eder Magalhães
 */

var Vehicle = {
    createNew: function(plate) {
	    var vehicle = {};
		vehicle.plate = plate;
		vehicle.drive = function(){
			return "Drive ...";
		};
		
		return vehicle;
	}
}

var Car = {
    createNew: function(plate, color) {
	    var car = Vehicle.createNew(plate); //make and use a vehicle object
		car.color = color; //with custom property
		car.drive = function() {
		    return "Car ["+ this.plate +" - "+ this.color +"] walk on streets";
		}
		
		return car;
	}
}

var Truck = {
    createNew: function(plate, size) {
	    var truck = Vehicle.createNew(plate);
		truck.size = size;
		truck.drive = function() {
		    return "Truck ["+ this.plate +" - "+ this.size +"] walk on route 66";
		}
		
		return truck;
	}
}