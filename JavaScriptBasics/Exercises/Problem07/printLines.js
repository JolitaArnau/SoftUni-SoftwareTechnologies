function printLines(lines) {
    for (let content of lines) {
       if (content === "Stop") {
           return;
       }
       console.log(content);
    }
}
