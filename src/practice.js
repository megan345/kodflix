










// function getAverageScore(...arr) {
// 	var numbers = [];
// 	var name = [];
// 	arr.forEach(function(element) {
// 		if (typeof element != 'string') {
// 			numbers.push(element);
// 		} else {
// 			name.push(element);
// 		}
// 	});
//     console.log(numbers);
//     console.log(name);
    
// 	let aver = Math.round(numbers.reduce((average, value) => {
//         return average + value / numbers.length}, 0));

//     console.log(aver);
	
// 	console.log (`The average score for ${name[0]} is ${aver}`);
// }

// getAverageScore('John', 85, 43, 78, 59);

// IF YOU KNOW YOU WILL REDUCE ARRAY DOWN TO ONE VALUE
// YOU CAN USE REDUCE AND JUST USE A CONDITION TO 
// ONLY AFFECT SOME NUMBERS IN THE ARRAY
// function addPositiveNumbers(numbers) {
// 	return numbers.reduce((total, number) => {
// 		return number > 0 ? total + number : total;	
// 	}
// }

// ARE CONSECUTIVE NUMBERS
// function areConsecutiveNumbers(array) {
// 	let sum = array.reduce(function(acc, value){
// 		return acc + value;
// 	}) 
// 	let average = sum / array.length;
	
// 	let position = Math.round(array.length/ 2)-1;
		
// 	// if (average == array[position]){
// 	// 	return true;
// 	// 	} else {
// 	// 	return false;
// 	// 	}
	
// 	(average == array[position]) ? console.log(true) : console.log(false);

// 	}

// areConsecutiveNumbers([4, 5, 6]);

// function squareDigits(num) {
// 	let numbers = num.toString().split('');
// 	console.log(numbers);

// 	let numbersSquared = [];

// 	numbers.forEach(number => 
// 		numbersSquared.push(number * number));
// 	console.log(numbersSquared);

// 	console.log( numbersSquared.join('') );
// }

// squareDigits(39);

// // DESCENDING ORDER
// function descendingOrder(arrayOfNums) {
// 	return Number(arrayOfNums.sort().reverse().join(''));
// }

// function getDivisibleValues(endingnumber) {
// 	let numbers = [];

// 	for (var i = 1; i<= endingnumber; i++){
// 		numbers.push(i);
// 	}
// 	console.log(numbers);

// 	let answer = numbers.filter(number =>
// 		endingnumber % number === 0);

// 	console.log(answer);
// }

// getDivisibleValues(12);

// function addPositiveNumbers(arrayOfNums) {
// 	let positiveNumbers = arrayOfNums.filter(
// 		numbers => number >= 0);

// 	let sum = positiveNumbers.reduce(function(acc, value){
// 		return acc + value;
// 	}, 0);
	
// 	console.log (sum);
// }

// addPositiveNumbers([-1, 2, 3, -4]);

// function getGrandSlamCount(obj) {
// 	return Object
// 		.values(obj.report)
// 		.reduce((acc, value) =>
// 			acc + value); 
// }


// getGrandSlamCount({
// 	firstName: 'Roger',
// 	report: {
// 		australianOpen: 6,
// 		frenchOpen: 1,
// 		wimbledon: 8,
// 		USOpen: 5
// 	}
// });












// function swap(obj) {
//     let keys = Object.keys(obj);
//     console.log(keys);
// 	let values = Object.values(obj);
//     console.log(values);
// 	let newobj = {};

// 	keys.forEach(function(key) {
// 		values.forEach(function(value) {
// 			newobj[value] = key;
// 		});
// 	});
// 	console.log(newobj);
// }

// swap(
// 	{ firstName: 'Joseph', lastName: 'Blatter' }
// );


















// function getAverage(nums){
//     let answer = nums.reduce((average, num) => { 
//         return average + num;
//     }) / nums.length;

//     console.log(answer);
// }

// getAverage([1,2,3]);

// // 1. Brackets around the average and num arguments
// // 2. No return
// // 3. The nums.length has to be outside of the statement
// // 4. Square bracket at the end