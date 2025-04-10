function separator(numbers){
    let separatorperso = ",";
    if(numbers.startsWith("//")){
        separatorperso = numbers.charAt(2);
    }
    return separatorperso;
}

export function add(numbers){
    if (numbers.length == "") {
        return 0;
    }

    let separatorperso = separator(numbers);

    if(numbers.startsWith("//")){
        numbers = numbers.substring(3); 
        console.log(numbers);
        }

    numbers = numbers.replace(/\n/g, separatorperso);
    numbers = numbers.split(separatorperso).map(Number);

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            return("negatives not allowed: " + numbers[i]);
        }
        sum += numbers[i];
    }
    return sum;
}