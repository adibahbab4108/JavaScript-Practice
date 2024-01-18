function uuid() {
    return id = "id" + Math.random().toString(16).slice(2)
}
const students = {
    'id08d16c889ceaa': {
        id: 'id08d16c889ceaa',
        name: 'Adib Ahbab',
        email: 'adib.abc2022@gmail.com'
    },
    'id9cfa9e4853fb9': {
        id: 'id9cfa9e4853fb9',
        name: 'Inzamul Hoque',
        email: 'inzam.abc2022@gmail.com'
    },
    'id01bfdf2b28cfb': {
        id: 'id01bfdf2b28cfb',
        name: 'Asifur Rahman',
        email: 'asif.abc2022@gmail.com'
    }
}
//add/create object start....
const newStudent = {
    id: uuid(),
    name: "Leonel Messi",
    email: "leomessi@gmail.com"
}
students[newStudent.id] = newStudent;
// console.log(student);
//create object & add end....

//update an object start.....
const newData = {
    name: "Sumon",
    email: "sumon@gmail.com"
}
const idToUpdate = 'id01bfdf2b28cfb';
students[idToUpdate] = {
    ...students[idToUpdate],
    ...newData,
}
// console.log(students);
//update an object end.....

//delete an object start.....
delete students[idToUpdate];
//delete an object end.....
