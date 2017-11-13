function checkProduct(nums) {

    let x = Number(nums[0]);
    let y = Number(nums[1]);
    let z = Number(nums[2]);

    if(x==0 || y==0 || z==0) {
        console.log("Positive");
        return;
    }

    let negativeCounter = 0;
    if(x < 0) {
        negativeCounter++;
    }
    if(y < 0) {
        negativeCounter++;
    }
    if(z < 0) {
        negativeCounter++;
    }

    if(negativeCounter % 2 == 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

