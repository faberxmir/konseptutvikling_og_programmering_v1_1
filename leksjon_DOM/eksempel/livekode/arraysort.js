let numbers = [4,6,3,1,8,4];

function sortArray(array, isAscending){
    let temp;
    let runlength = array.length-1;

    for(let i = 0; i < runlength; ++i){
        for(let y = i+1; y < runlength; ++y){
            if(array[i]  > array[y]){
                temp = array[i];
                array[i] = array[y];
                array[y] = temp;
            }
        }
    }
    console.log(array);
}

sortArray(numbers, true);

console.log(numbers);