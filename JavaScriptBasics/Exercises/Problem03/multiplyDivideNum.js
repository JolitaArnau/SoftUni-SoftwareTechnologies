function multiplyOrDivide(nums) {
     let firstNum = Number(nums[0]);
     let secondNum = Number(nums[1]);

     let result;

     if (secondNum >= firstNum) {
         result = secondNum * firstNum;
     }
     else {
         result = firstNum / secondNum;
     }

    console.log(result);
 }
