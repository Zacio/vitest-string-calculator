function separator(numbers) {
    let separatorperso = ",";
    if (numbers.startsWith("//")) {
        separatorperso = [];
        if (numbers.charAt(2) == "[") {
            let currentSep = "";
            let i = 3;
            while (i < numbers.length) {
                if (numbers.charAt(i) == "]") {
                    if (currentSep) {
                        separatorperso.push(currentSep);
                        currentSep = "";
                    }
                    i++;
                    if (i < numbers.length && numbers.charAt(i) == "[") {
                        i++;
                        continue;
                    }
                } else {
                    currentSep += numbers.charAt(i);
                    i++;
                }
            }
        } else {
            separatorperso.push(numbers.charAt(2));
        }
    }
    return separatorperso;
}

export function add(numbers) {
    if (numbers.length == "") {
        return 0;
    }

    let separatorperso = separator(numbers);

    if (numbers.startsWith("//")) {
        let startIndex = numbers.indexOf("\n");
        if (startIndex === -1) {
            startIndex = numbers.indexOf(separatorperso[0]);
        }
        numbers = numbers.substring(startIndex + 1);
    }

    if (typeof separatorperso === "string") {
        numbers = numbers.replace(/\n/g, separatorperso);
        numbers = numbers.split(separatorperso).map(Number);
    } else {
        for (let sep of separatorperso) {
            numbers = numbers.split(sep).join(",");
            console.log(numbers);
        }
        numbers = numbers.split(",").map(Number);
    }

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