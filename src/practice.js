function getAverage(nums){
    let answer = nums.reduce((average, num) => { 
        return average + num;
    }) / nums.length;

    console.log(answer);
}

getAverage([1,2,3]);

// 1. Brackets around the average and num arguments
// 2. No return
// 3. The nums.length has to be outside of the statement
// 4. Square bracket at the end