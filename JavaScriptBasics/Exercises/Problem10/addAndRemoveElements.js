function addOrRemove(arr) {
    let result = [];

    for (let action of arr) {
        let tokens = action.split(" ");
        let command = tokens[0];

        if(command === "add") {
            let number = Number(tokens[1]);
            result.push(number);
        }

        if (command === "remove") {
            let index = Number(tokens[1]);
            result.splice(index, 1);
        }
    }

    for (let item of result) {
        console.log(item);
    }
}
