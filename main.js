export function add(numbers){
    if (numbers.length == "") {
        return 0;
    }
    numbers = numbers.split(",").map(Number);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}