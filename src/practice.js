{   
    function removeNumberProps(obj) {
        var entries = Object.entries(obj);
        var result;
        console.log(entries);
        entries.forEach(function(pair, index){
            pair.forEach(function(item, index){
                console.log("in loop");
                if (Number.isInteger(item)){
                    console.log("true");
                    pair.splice(index, 1)
                    result = true;
                }
                console.log(`Resulting pair: ${pair}`);
            })
            if (result){
                entries.splice(index, 1);
            }
            console.log(`Entries: ${entries}`);
        })
        console.log (obj);
    }

    function removeNumberProps2(obj) {
        var entries = Object.entries(obj);
        console.log(entries);

        for (const [key, value] of entries){
            if (Number.isInteger(value)){
                entries.splice(entries.indexOf(value), 1);
            }
        }

        console.log(entries);

        var newobj = {};

        entries.forEach(function(pair){
            newobj[pair[0]] = pair[1];
        })

        console.log(newobj);
        // return newobj;
    }

    removeNumberProps2({
        born: 1993, age: 25
    }) === {};
    
    

    // function findWordInCapitals(string) {
    //     var words = string.split(' ');
    //     var result;
    //     var count = 0;
    //     words.some(function(word){
    //         var letters = word.split('');
    //         letters.forEach(function(letter){
    //             if (letter !== letter.toUpperCase()){
    //                 result = '';
    //                 console.log(letter);
    //                 console.log("Not Upper: " + result);
    //             } else {
    //                 result = "upper";
    //                 console.log("Else: " + result);
    //             }
    //         })
    //             if (result == "upper"){
    //                 return true;
    //             }
    //         count++;
    //         return result;
    //     })
    //     if (result == "upper"){
    //         console.log( "Word in array: " + words[count] );
    //     } else {
    //         console.log( "Empty string");
    //     }
    // }

    // findWordInCapitals(
    //     'No capital words here...'
    // );




    // // let fruits = [
    // //     {
    // //         name: 'Apple',
    // //         color: 'Green',
    // //         price: 1.99
    // //     },
    //     {
    //         name: "banana",
    //         color: "yellow",
    //         price: 0.99
    //     },
    //     {
    //         name: "pear",
    //         color: "green",
    //         price: 2.99
    //     }
    // ]

    // let yellowFruit = fruits.find(function(fruit){
    //     return fruit.color == "yellow";
    // });

    // console.log(yellowFruit);

    // // function findShortest(str) {
    // //     arrayofwords = str.split(' ');
    // //     var lengthofwords = [];

    //     arrayofwords.forEach(function(word){
    //         lengthofwords.push(word.length);
    //     })
    //     console.log(lengthofwords);

    //     let result = Math.min(...lengthofwords);
    //     console.log(result);

    //     var final = arrayofwords.filter(function(word){
    //         return word.length == result;
    //     })

    //     console.log( final[0] );
    // }

    // findShortest('Coding is the new literacy');






    // function getWorstRecentMovie(array) {
    //     array.forEach(function(movie){
    //         let scores = movie.scores;
    //         console.log(scores);
    //         scores = scores.reduce(
    //             (total, score) => (total + score)) / scores.length;
    //             console.log(scores);
    //         movie.scores = scores;
    //         return movie;
    //         });
    
    //     array.sort((a, b) => b.scores - a.scores);
    //     console.log(array);
    // }

    // getWorstRecentMovie([
    //     { name: 'Movie 43', scores: [0.5, 0.3, 0.7]	}, 
    //     { name: 'Humshakals', scores: [0.9, 1.1, 1] }, 
    //     { name: 'Fateful Findings', scores: [0.3, 0.1] }
    // ])

    // var scores = [ 0.5, 0.3, 0.7];

    // scores = scores.reduce(
    //     (total, score) => (total + score)) / scores.length;
    
    // console.log(scores);
    
    
    
    
    // let s = "It was a dark and stormy night";

    // // Split the array into words and remove all words less than 2 in length

    // let words = s.split(/\W+/).filter(word => word.length > 2);

    // // Sort by increasing length of words

    // words.sort((a, b) => a.length - b.length);

    // // console.log(words);

    // var library = [ 
    //     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    //     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    //     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    //     ];

    // library.sort(compare);

    // function compare(x , y){
    //     if (x.title < y.title){
    //         return -1;
    //     } else if (x.title > y.title) {
    //         return 1;
    //     } else {
    //         return 0;
    //     }
    // }

    // console.log(library);
}