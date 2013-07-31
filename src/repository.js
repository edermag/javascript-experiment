/* Another approach to encapsulate and define operations in JavaScript.
 * (Based: http://www.onextrapixel.com/2013/02/21/improve-your-code-with-smart-javascript-techniques-and-patterns/)
 * @author Eder Magalhães
 */

(function (win) {
    function Repository(data) {
	    this.data = data;
		this.length = data.length;
	}
	
	function store(data) {
	    return new Repository(data);
	}
	
	function _extend(obj, target) {
		for (var o in obj) target[o] = obj[o];
		return target;
	}
	
	Repository.prototype = {
	    _new: function(result) {
            result = result.map(function(o) { return _extend(o, {}); });
            this.length = this.data.length;
            return store(result);
        },
		
        // Filter the current data property with a function.
        // The property is passed as parameter into the 'fn' callback
        _filter: function(fn) {
            return this._new(this.data.filter(function(user, i) {
                return fn.call(this, user[this.prop], i);
            }.bind(this)));
        },
		
        // Get an array with a specific prop from each object
        // or return the data collection otherwise
        get: function(prop) {
            if (prop) return this.map(function() { return this[prop]; });
            return this.data;
        },
		
		// Set the property to filter or compare to
        where: function(prop) {
            return this.prop = prop, this; 
        },
		
		// A shortcut for semantics
        and: function(prop) {
            return this.where(prop);
		},
		
		// Compare the current property to a given condition
        is: function(condition) {
            // Filter by regular expression or string/number
            var regex = condition instanceof RegExp ? condition : new RegExp('^'+ condition +'$');
			
            // Extracts the symbol in cases like '>50' and '<=10'.
            // 'null' and '0' are given as default values if
            // the string doesn't contain a symbol
            var symbol = (/^([<>=%]+)([\d.]+)/.exec(condition) || [0,null,0]);
			
            // Process the symbol if present
            if (symbol[1]) return this[symbol[1]](+symbol[2]);
			
            return this._filter(function(prop) { 
                return regex.test(prop); 
            });
        }
	};
	win.store = store;
}(window));
