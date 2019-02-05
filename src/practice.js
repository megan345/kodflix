












// function swap(person) {
// 	let keys = Object.keys(person);
// 	let values = Object.values(person);
//     let obj = {};
//     console.log(values);

//     console.log(obj);

//     console.log(keys);
//     console.log(keys[0]);

//     obj[keys[0]] = values[0];
//     obj[keys[1]] = values[1];
//     console.log(obj);
//     // console.log( obj.keys[0] );

// }

// swap(
// 	{ firstName: 'Joseph', lastName: 'Blatter' }
// );




// function getVowelCount(letters) {
// 	var vowels = 'aeiou';
//      let splitletters = letters.split('');
//      let count = 0;
    
//     console.log (splitletters.reduce((count, letter) => 
//         vowels.includes(letter) ? count + 1: count, 0));
        
// }

// getVowelCount('abracadabra');








// function getAverageScore(name, ...scores) {
// 	let average = getAverage (scores);
// 	return `The average score for ${name} is ${average}`;
// }

// function getAverage(values) {
// 	let total = values.reduce((total, value) {
// 		return total + value;
// 	})
// 	return total / values.length;
// }

// getAverageScore('John', 85, 43, 78, 59);













// function getAverage(values) {
// 	let total = values.reduce(function(total, value) {
// 		return total + value;
// 	});
// 	return Math.round(total / values.length);
// }

// getAverage([56, 85, 93]);

// function getTopCharacter(characters) {
// 	characters.forEach(function(character) {
// 		character.scores = getAverage(character.scores);
//     });
//     console.log(characters);
//     let sorted = characters.sort(function(char1, char2) {
// 		return char2.scores - char1.scores;
//     })
//     console.log(sorted);
// }





// function findRepeatedCity(arr) {
	
// 	var myObject = {};

// 	for (var key in arr) {
//     	if (myObject[arr[key]])
//       		return arr[key];
//     	else
//       		myObject[arr[key]] = true;
//   }
// 	return undefined;
// }




// function getVowelCount(string) {
// 	let vowels = 'aeiou';
// 	var count = 0;
// 	let splitstring = string.split('');
// 	console.log(splitstring);
// 	splitstring.forEach(function(value) {
// 			if (vowels.includes(value)) {
// 				count ++;
// 				console.log(count);
// 			}
// 		})
// 	console.log (count);

// }

// getVowelCount('abracadabra');



// function getConsecutiveChains(number) {
// 	let numbers = (number).toString(10).split("").map(Number);
// 	console.log(numbers);
// 	let count = numbers[0];
// 	let indexes = [];

// 	numbers.map(function(num, index) {
// 		if (num !== count) {
// 			indexes.push(index);
// 			count = num + 1;
// 		} else {
// 			count++;
// 		}
// 	})
// 	console.log(indexes);
// 	let answer = numbers.splice(0, indexes[0]);
// 	console.log(answer);
// 	answer = Number(answer.join(''));
// 	console.log(numbers);
// 	numbers = Number(numbers.join(''));
// 	console.log(answer, numbers);
// 	let answerArray = [answer, numbers];
// 	console.log(answerArray);
// }

// getConsecutiveChains(1235678);










// function findTokens(sentence, token) {
// 	let re = new RegExp(token, 'g');
// 	console.log(re);
// 	console.log(re.exec(sentence));
// }

// findTokens('Is it free?', 'e');



// function findMostPopulatedCountry(countries) {
//     let index = countries.length;
// 	let answer = countries
// 		.sort((a, b) => 
//             a.population - b.population)[index-1].name;
//     console.log (answer);
// }

// findMostPopulatedCountry([
// 	{ name: 'Ukraine', population: '44009214' }, 
// 	{ name: 'Italy', population: '59290969' },
// 	{ name: 'Bulgaria', population: '7036848' }
// ]);







// function findRepeatedCity(cityArray) {
//     let cities = []
//     let answer;
// 	cityArray
// 		.forEach(function(city) {
// 			return cities.includes(city) ? answer = city : 
// 				cities.push(city);
//         })
//     console.log(answer);
// }

// findRepeatedCity(
// 	['Lucerne', 'Valencia', 'Valencia', 'Salzburg']
// );

















// GET TOP CHARACTER
// function getTopCharacter(characters) {
	
// 	let answer = characters
// 		.map(character => {
// 			return {
// 				name: character.name,
// 				scores: getAverageScore(character.scores)
// 			};
//         })
//     console.log(answer);
//         answer = answer.sort((a, b) =>  a.scores - b.scores)[0].name;

//     console.log(answer);

//     function getAverageScore(scores){
// 		return scores.reduce((average, value) => average + value / 3, 0);
// 	}
// }

// getTopCharacter([
// 	{ name: 'Arnold', scores: [46, 57, 83] }, 
// 	{ name: 'Kevin', scores: [86, 95, 93] },
// 	{ name: 'Silvester', scores: [66, 46, 65] }
// ]);













// FIND WORD IN CAPTIALS
// function findWordInCapitals(string) {
//     let answer = string
//         .split(' ')
// 		.find(word => {
// 			return word === word.toUpperCase();
//         }) || '';
//     console.log(answer);
// }

// findWordInCapitals(
// 	'The MEMORY we shared is no longer COHERENT'
// );










// function getFruitNames(fruits) {
//     let answer = fruits.map(function(fruit) {
//         return {
//             name: fruit.colour
//         }
//     });
//     console.log(answer);
// }

// getFruitNames( [{
//     name: 'banana',
//     colour: 'yellow'
// }, {
//     name: 'apple',
//     colour: 'green'
// }])
















// function removeCharacters(str, chars) {
	
//     let letters = str.split('');

//     let filteredarray = letters.filter(function(letter) {
//         return letter != chars[0];
//     })
	
//     return filteredarray;

// }

// removeCharacters('a!b!c', ['!']);



















// function getAverageScore(...values) {
//     let numbers = [];
//     let arr = values;
// 	let name = [];
// 	arr.map((element) => {
// 		if (typeof element != 'string') {
// 			numbers.push(element);
// 		} else {
// 			name.push(element);
// 		}
// 	});
		
// 	let aver = Math.round(numbers.reduce((average, value) => {
// 		return average + value / numbers.length}, 0));

// 	console.log (`The average score for ${name[0]} is ${aver}`);

// }

// getAverageScore('Louise', 53, 29);








// {
//     function findLast(string) {
//         var words = string.split(' ');
//         console.log(words);
//         var reversedWords = words.reverse();
//         console.log(reversedWords);
    
//         let answer = reversedWords.find(function(word, index){
//             if (word[index] == word[index].toUpperCase()) {
//                 return word;
//             }
//         })

//         console.log(answer);
//     }

//     findLast(
//         'See Bradley Cooper make Lady Gaga a star',
//     );

// }


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