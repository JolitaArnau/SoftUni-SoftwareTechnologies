function fillStudentData(arr) {
    let students = [];

    for (let args of arr) {
        let tokens = args.split(" -> ");
        let name = tokens[0];
        let age = tokens[1];
        let grade = tokens[2];

       students.push({
           Name: name,
           Age: age,
           Grade: grade
       });
    }

    for (let student of students) {
        for (let key of Object.keys(student)) {
            console.log(`${key}: ${student[key]}`);
        }
    }
}
