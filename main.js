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
    
    let negativeNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] < 0) {
            negativeNumber.push(numbers[i]);
        }
        sum += numbers[i];
    }
    if (negativeNumber.length > 0) {
        return "negatives not allowed: " + negativeNumber.join(",");
    }
    return sum;
}