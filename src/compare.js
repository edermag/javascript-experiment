/* Compare using regex and closure in JavaScript.
 * @author Eder Magalhães
 */

 //compare if value is D or X or W using regex
function testValuesDorXorW (value) {
    return /D|X|W/.test(value);
}

//function every, resolve multiple && compares
function checkElements(baseList, list) {
    return list.every(function(v,i){ return baseList[i] == v });
}
