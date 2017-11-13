function parseJSON(arr) {
    let array = [];
    for(let string of arr) {
        let object = JSON.parse(string);
        array.push(object);
    }

    let debug = 0;
    for(let object of array) {
        for(let key of Object.keys(object)) {
            console.log(`${key.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}: ${object[key]}`)
        }
    }
}
