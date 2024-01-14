const stu1 = {
    name: "Adib",
    Age: 25,
    birth: 1999
}
const stu2 = {
    name: "Ahbab",
    Age: 25,
    birth: 1999
}
const stu3 = {
    name: "Karim",
    Age: 25,
    birth: 1999
}
const all = [stu1, stu2, stu3];
const ar = [5, 4, 3, 2, 1, 0];
ar.forEach(function (value, index, array) {
    if (value % 2 == 0)
        console.log(value, index, array);
})