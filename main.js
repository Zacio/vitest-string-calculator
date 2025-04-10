function separator(numbers){
    let separatorperso = ",";
    if(numbers.startsWith("//")){
        separatorperso = "";
        if( numbers.charAt(2) == "["){
            let i = 3;
            while(numbers.charAt(i) != "]"){
                separatorperso += numbers.charAt(i);
                i++;
            }

        }else{
            separatorperso = numbers.charAt(2);
        }
    }
    return separatorperso;
}

export function add(numbers){
    if (numbers.length == "") {
        return 0;
    }

    let separatorperso = separator(numbers);

    if(numbers.startsWith("//")){
        if(numbers.charAt(2) == "["){
            let i = 3;
            while(numbers.charAt(i) != "]"){
                i++;
            }
            numbers = numbers.substring(i + 1);
        }else{
            numbers = numbers.substring(2); 
        }
        }

    numbers = numbers.replace(/\n/g, separatorperso);
    numbers = numbers.split(separatorperso).map(Number);

    let sum = 0;
    
    let negativeNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] < 0) {
            negativeNumber.push(numbers[i]);
        }
        if (numbers[i] < 1000) {
            sum += numbers[i];
        }
    }
    if (negativeNumber.length > 0) {
        return "negatives not allowed: " + negativeNumber.join(",");
    }
    return sum;
}