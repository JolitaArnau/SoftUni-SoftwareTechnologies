function multipleValuesForAKey(arr) {
    let pairs = {};
    for(let i = 0; i<arr.length-1; i++) {
        let tokens = arr[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];
        if(!pairs.hasOwnProperty(key)) {
            pairs[key] = new Array();
        }
        pairs[key].push(value);
    }

    let key = arr[arr.length-1];
    if(pairs.hasOwnProperty(key)) {
        for(let value of pairs[key]) {
            console.log(value);
        }
    } else {
        console.log("None");
    }
}