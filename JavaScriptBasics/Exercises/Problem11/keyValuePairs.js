function fillValues(arr) {

    let pairs = {};

    for (let i = 0; i < arr.length - 1; i++) {
        let tokens = arr[i].split(" ");
        let key = tokens[0];
        let value = tokens[1];

        pairs[key] = value;
    }

    if(pairs.hasOwnProperty(arr[arr.length-1])) {
        console.log(pairs[arr[arr.length-1]]);
    } else {
        console.log("None");
    }
}
