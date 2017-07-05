// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //


	var mapArr = []; // creates new empty array called doubles 

 	for (var i = 0; i < arr.length; i++) { // for loop gets all values from array
		callback(arr[i], i, arr); // create callback of arr value, arr index and whole arr in callback
		mapArr.push(callback(arr[i], i, arr)); // get empty array and push callback into new doubles array * 2
	//	doubles([i] * 2); // multiply doubles arr * 2
	}
	return mapArr;
}

function double(arr) {
	var doubles = [];
	myMap(arr, function(item) {
	doubles.push(item * 2);
	});
	return doubles;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/





// export this function (you can ignore this for now)
module.exports = myMap;
