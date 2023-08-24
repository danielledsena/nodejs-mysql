function bubbleSort(array) {
    let trocou = false;

    for (let x = 0; x < array.length - 1; x++) {
        for (let y = 0; y < array.length - x - 1; y++) {
            if (array[y] > array[y + 1]) {
                let temp = array[y];
                array[y] = array[y + 1]
                array[y + 1] = temp;
                trocou = true;
            }
        }
        if (!trocou) {
            break
        }
    }

    console.log('Array ordenado: ' + array);
}

var nums = [7, 1, -2, 3];
bubbleSort(nums);