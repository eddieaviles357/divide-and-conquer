function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = null;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        
        if(arr[middle] === num) {
            return middle;
        } 

        if(arr[middle] > num && arr[right] < num) {
            right = middle - 1;
        } else if(arr[middle] < num && arr[left] < num) {
            left = middle + 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}


module.exports = findRotatedIndex