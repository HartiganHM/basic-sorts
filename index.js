const bubbleSort = require('./bubble.js');
const insertionSort = require('./insertion.js');

module.exports = {
	bubbleSort, 
	insertionSort
};

//Initial install of our node

//npm install basic-sorts
//app.js

// If someone else needed to access this module
//in a different file:

// const basicSorts = require('basic-sorts');
// const bubbleSort = basicSorts.bubbleSort;
// const insertionSort = basicSorts.insertionSort;