import { students } from "./data";

const contact = ({ name, email = "no email" }) => `${name} ->${email}`;

for(const student of students){
    console.log(contact(student));
}