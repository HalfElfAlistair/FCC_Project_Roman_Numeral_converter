function decimalToNumeral() {
        let decimalInputValue = Number(document.getElementById("decimal-input").value);
        let numeralArray = [];
        let oneFigureArray = [];
        let twoFigureArray = [];
        let threeFigureArray = [];
        let fourFigureArray = [];
        let num = decimalInputValue;
        let numberToConvert = num.toString().split("");
    
        // Assigns an index to a relative array based on multiples of 10.
    
        if (num < 10) {
            oneFigureArray.push(numberToConvert);
        } else if ((num >= 10) && (num < 100)) {
            twoFigureArray.push(numberToConvert[0]);
            oneFigureArray.push(numberToConvert[1]);
        } else if ((num >= 100) && (num < 1000)) {
            threeFigureArray.push(numberToConvert[0]);
            twoFigureArray.push(numberToConvert[1]);
            oneFigureArray.push(numberToConvert[2]);
        } else if ((num >= 1000) && (num < 4000)) {
            fourFigureArray.push(numberToConvert[0]);
            threeFigureArray.push(numberToConvert[1]);
            twoFigureArray.push(numberToConvert[2]);
            oneFigureArray.push(numberToConvert[3]);
        } else if (num >= 4000) {
            document.getElementById("numeral").innerHTML = 'undefined';
        }
    
    
        // Assigns a numeral for 1000 and multiples less than 4000.
    
        if (fourFigureArray <= 3) {
            for (let i = 0; i < fourFigureArray; i++) {
             numeralArray.unshift("M");
             }
        }
    
        // Assigns numerals for values between 100 and 1000.
    
        if (threeFigureArray <= 3) {
            for (let i = 0; i < threeFigureArray; i++) {
             numeralArray.push("C");
             }
         } else if (threeFigureArray == 4) {
             numeralArray.push("CD");
         } else if (threeFigureArray == 5) {
             numeralArray.push("D");
         } else if ((threeFigureArray > 5) && (threeFigureArray < 9)) {
                numeralArray.push("D");
                for (let i = 5; i < threeFigureArray; i++) {
                numeralArray.push("C");
         }
         } else if (threeFigureArray == 9) {
             numeralArray.push("CM");
         }
    
        // Assigns numerals for values between 10 and 100.
    
         if (twoFigureArray <= 3) {
            for (let i = 0; i < twoFigureArray; i++) {
             numeralArray.push("X");
             }
         } else if (twoFigureArray == 4) {
             numeralArray.push("XL");
         } else if (twoFigureArray == 5) {
             numeralArray.push("L");
         } else if ((twoFigureArray > 5) && (twoFigureArray < 9)) {
                numeralArray.push("L");
                for (let i = 5; i < twoFigureArray; i++) {
                numeralArray.push("X");
         }
         } else if (twoFigureArray == 9) {
             numeralArray.push("XC");
         }
    
        // Assigns numerals for values between 1 and 10.
    
         if (oneFigureArray <= 3) {
            for (let i = 0; i < oneFigureArray; i++) {
            numeralArray.push("I");
            }
        } else if (oneFigureArray == 4) {
            numeralArray.push("IV");
        } else if (oneFigureArray == 5) {
            numeralArray.push("V");
        } else if ((oneFigureArray > 5) && (oneFigureArray < 9)) {
               numeralArray.push("V");
               for (let i = 5; i < oneFigureArray; i++) {
               numeralArray.push("I");
        } 
        } else if (oneFigureArray == 9) {
            numeralArray.push("IX");
        }
    
        // produces result value to display, taken from inside Array.
    
        let result = numeralArray.join("");
    
    
        // displays result value on HTML pageXOffset.
    
        document.getElementById("numeral").innerHTML = result;
    
}