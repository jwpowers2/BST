//var BST = require('./BinarySearchTree');
var BSA = require('./BinarySearchArray');
var bubbleSort = require('./bubbleSort');


var to_sort = bubbleSort([1,5,4,7,9,20,534,1056,22,45,283]);

var bsa = new BSA(to_sort);

console.log(bsa.search(534));