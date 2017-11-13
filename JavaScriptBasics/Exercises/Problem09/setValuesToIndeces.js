/*3
 5
 0 - 3
 3 - -1
 4 - 2*/

 function setValues(index, inputArray) {

     let resultArray = [];

     for(let i = 0; i < index; i++) {
         let args = inputArray[i].split(" - ");
         let arrayIndex = args[0];
         let arrayValue = args[1];

         resultArray[arrayIndex] = arrayValue;
     }

     for (let value of resultArray) {
         if (value === undefined) {
             console.log("0");
         } else {
             console.log(value);
         }
     }
 }