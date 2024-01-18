const arr = [];
const arrToObj = {};
const n = 5000000
for (let i = 0; i < n; i++) {
    const ob = {
        id: i,
        value: i + 20
    }
    arr.push(ob);
    arrToObj[i] = ob;
}

const index = arr.findIndex(arrv => arrv.id === 4000000);

console.time('Time for Delete operation in Array: ');
arr.splice(index, 1);
console.timeEnd('Time for Delete operation in Array: ');

console.time('Time for Delete operation in Object: ')
delete arrToObj[index];
console.timeEnd('Time for Delete operation in Object: ')

/*
Object are way efficient..

Output:
Time for Delete operation in Array: : 1.069ms
Time for Delete operation in Object: : 0.007ms
*/