
const findCombinations = (arr: any[], index: number,
    num: number, reducedNum: number) => {

    if (reducedNum < 0)
        return;

    // If combination is
    // found, print it
    if (reducedNum == 0) {
        for (let i = 0; i < index; i++)
            document.write(arr[i] + " ");
        document.write("<br/>");
        return;
    }

    let prev = (index == 0) ?
        1 : arr[index - 1];

    for (let k = prev; k <= num; k++) {
        arr[index] = k;
        findCombinations(arr, index + 1, num,
            reducedNum - k);
    }

}

export default findCombinations;
