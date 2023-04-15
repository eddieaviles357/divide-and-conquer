/**
* returns the number of zeroes in an array
* @param {Array} array
* time constraints O(log n)
*/
function countZeroes(arr) {
  // left index and right index
    let left = 0;
    let right = arr.length - 1;

    // all 0's in array
    if( arr[left] === 0) return arr.length;
    // all 1's in array
    if( arr[right] === 1) return 0;

    while(left <= right) {
        let middle = Math.floor((left + right) / 2);

        // is there a 1 to the left and current is a 0 if so count the current 0 and to the right
        if( ( arr[middle] === 0 && arr[middle - 1] === 1 ) ) {
            return arr.length - middle;
        } 
        // is there a 0 to the right and the current is a 1 then count all 0's to the right
        else if( ( arr[middle] === 1) && (arr[middle + 1] === 0 ) ) {
            return arr.length - (middle + 1);
        } 
        // update left
        else if( arr[middle] === 1 ) {
            left = middle + 1;
        } 
        // must be a 0 update right
        else {
            right = middle - 1;
        }
    }

  return 0;
}

module.exports = countZeroes