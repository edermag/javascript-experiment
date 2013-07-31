/* Code shows how use a module, or something to encapsulate blocks of code (Closure).
 * @author Eder Magalhães
 */

var ConcatModule = (function() {
    var isEmpty = function(content) { //private function
	    return content == null || typeof content == 'undefined';
	}
	
	doConcat = function (prefix) { //private function
		return function (suffix) {
		    if (isEmpty(suffix))
			    suffix = "nothing to say";
			return prefix + " " + suffix;
		}
	}
	
	return {
	    concat: doConcat //public function
	}
})();
  
  