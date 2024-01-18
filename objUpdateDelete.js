function uuid() {
    return id = "id" + Math.random().toString(16).slice(2)
}
const student = [
    {
        id: 'id08d16c889ceaa',
        name: 'Adib Ahbab',
        email: 'adib.abc2022@gmail.com'
    },
    {
        id: 'id9cfa9e4853fb9',
        name: 'Inzamul Hoque',
        email: 'inzam.abc2022@gmail.com'
    },
    {
        id: 'id01bfdf2b28cfb',
        name: 'Asifur aba',
        email: 'asif.abc2022@gmail.com'
    }
]

const indexToModify=student.findIndex(item=>item.id==="id9cfa9e4853fb9")
// update specific property start.....
const idToUpdate = "id9cfa9e4853fb9";
const toUpdateData = {
    name: "Leonel Messi",
    email: "localStorage.mrssi@gmail.com",
    age: 36
}

student[indexToModify]={
    ...student[indexToModify],
    ...toUpdateData
}
console.log("Updated ")
console.log(student)
// update specific property end.....

// delete specific property start...
student.splice(indexToModify,1);
console.log("Deleted ")
console.log(student)
// delete specific property end...

