/**
 * @param {Array} rotated array
 * Time Complexity: O(log N)
 */
function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
    let middle = null;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if ( arr[middle] < arr[middle - 1] ) {
            return middle;
        } else if ( arr[middle] > arr[middle + 1] ) {
            return middle + 1;
        } else if ( arr[left] > arr[right] ) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    };
    return 0;
};

module.exports = findRotationCount