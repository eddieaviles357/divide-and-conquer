function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let middle = null;
    let start = null;
    let end = null;
    if(arr[right] < num) return -1;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if(arr[middle] === num) {
            // handle left side
            tempLeft = left;
            tempRight = middle;
            tempMiddle = null;

            while(tempLeft <= tempRight) {
                tempMiddle = Math.floor((tempLeft + tempRight) / 2);
                if(arr[tempMiddle - 1] !== num && arr[tempMiddle] === num) {
                    start = tempMiddle;
                };

                (arr[tempMiddle] === num) ? tempRight = tempMiddle - 1 : tempLeft = tempMiddle + 1;
            };

            // handle right side
            tempLeft = middle;
            tempRight = right;
            tempMiddle = null;

            while(tempLeft <= tempRight) {
                tempMiddle = Math.floor((tempLeft + tempRight) / 2);
                if(arr[tempMiddle + 1] !== num && arr[tempMiddle] === num) {
                    end = tempMiddle;
                };

                (arr[tempMiddle] === num) ? tempLeft = tempMiddle + 1 : tempRight = tempMiddle - 1;
            };
            
            return end - start + 1;
        };//end if

        (arr[middle] > num) ? right = middle - 1 : left = middle + 1;
    }
    return -1;
};

module.exports = sortedFrequency