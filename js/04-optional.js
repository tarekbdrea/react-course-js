import { students } from "./data.js";

const findStudent = id => {
    for (const student of students) {
        if (student.id === id) {
            return student;
        }
    }
};

for (const { name, grade } of students) {
    console.log(`${name}: ${grade >= 56 ? "pass" : "fail"}`);
}

console.log(findStudent(3)?.email ?? "-");
console.log(findStudent(1)?.email ?? "-");
console.log(findStudent(9)?.name ?? "Not found");