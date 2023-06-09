function findFloor(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = null;

    // last element is the floor of the array
    if(arr[right] <= num) return arr[right];
    // does not exist in array
    if(arr[left] > num) return -1;

    while(left <= right) {
        middle = Math.floor((left + right) / 2);

        if(arr[middle] === num) return arr[middle];
        
        // all possible halves has been exhausted must be the lowest floor
        if(left === right && arr[middle] < num) return arr[middle];

        if(arr[middle] > num) {
            if(arr[middle - 1] < num) return arr[middle - 1];
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    };
    return -1;
};

module.exports = findFloor