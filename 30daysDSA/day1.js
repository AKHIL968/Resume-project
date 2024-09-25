let sortArray = (numbers) => {
    numbers.sort((a, b) => a - b); // Use the correct parameter name
    return numbers; // Return the sorted array
}

let numbers = [2, 1, 5, 3, 7]; // Define numbers before using them
// console.log(sortArray(numbers)); // Call the function and log the sorted array


// Maximum and Minimum in an Array
let maxAndMinNum = (nums) => {
    let max = nums[0]
    let min = nums[0]

    for(let i =0; i < nums.length; i++){
        if(nums[i] > max) max = nums[i]
        if(nums[i] < min) min = nums[i]
    }
    return [max,min]
}
// console.log(maxAndMinNum([2,5,8,1]));


// Reverse Array

let reverseArray = (arr) => {
    let left = 0
    let right = arr.length - 1
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }
    return arr
}

// console.log(reverseArray([2, 4, 6, 8, 10]));  

// Contains Duplicate

let containDuplicate = (arr) => {
        let s = new Set()

        for(let ar of arr){
            if(s.has(ar)){
                return true
            }
            s.add(ar)
        }
        return false
}
// console.log(containDuplicate([1,2,4,6]));

// Remove Duplicate

let removeDuplicate = (arr) => {
    let map = new Set(arr)
    return map
}
// console.log(removeDuplicate([1,2,1,3,5,6,5]));


// Missing Number

let missingNumber = (arr) => {
    let totalSum = (arr.length * (arr.length+1)) / 2
    // console.log(totalSum);
    let sum = 0
    for(let ar of arr){
            sum+=ar
    }
    return totalSum - sum
}
console.log(missingNumber([1,0,4,2]));