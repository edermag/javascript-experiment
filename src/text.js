/* Same text manipulations with JavaScript 
 * @author Eder Magalhães
 */

var data = "simple text content. capitalize the first letter. using javascript approachs.";

var regexData = data.replace(/([^.]+\.\s?)/g, function(_, paragraph) {
    return paragraph.replace(/^\w/, function(first) {
        return first.toUpperCase();
    });
});

var allClients = "Name: Joshua, age: 30, from: USA. Name: Mary, age: 24, from: England. Name:Carlos, age: 31, from: Brazil.";

var names = [];
//closure for each replace element found according with regex
allClients.replace(/Name:\s?([\w\-]+)/g, function(_, name) {
    names.push(name);
});

var ages = [];
allClients.replace(/age:\s?([\d\-]+)/g, function(_, age) {
    ages.push(age);
});

//'define' a function in String type using prototype
String.prototype.countryMatch = function(regex) {
    var result = [];
    this.replace(regex, function() {
        var matches = [].slice.call(arguments, 1).slice(0,-2);
        result.push.apply(result, matches);
    });
    return result;
};

//call the custom function of String
var countries = allClients.countryMatch(/from:\s?([\w\-]+)/g);
