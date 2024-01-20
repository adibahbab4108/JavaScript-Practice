const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
const names = [
    "Adib", "Ahbab", "Rakib", "Shafiq", "Zabbar", "Ifty", "Imrus", "Nahiyan", "Ibrahim", "Rayan", "Ayan"
]
// return string sum.....................................
const result1 = numbers.reduce((sum, currentValue, index) => {
    if (index === 0) sum += '[';

    if (currentValue)
        sum += currentValue.toString() + (index < numbers.length - 1 ? ',' : '');

    if (index === numbers.length - 1) sum += ']';

    return sum;
}, '')// sum er initial value '' diye disi zeheto string return korbo(ja return korbo ekane tai dibo)

// console.log(result1);

// return array sum............................
const result2 = numbers.reduce((sum, currentValue) => {
    if (currentValue) sum.push(currentValue.toString())
    return sum;
}, [])// eibare array return korbo tai [] disi

//grouping the names with first letter............
const groupedNames = names.reduce((acc, cur) => {
    const firstLetter = cur[0].toUpperCase();

    // Check if the firstLetter key exists in the accumulator
    if (acc[firstLetter]) {
        acc[firstLetter].push(cur);
    } else {
        // If not, create a new array with the current name
        acc[firstLetter] = [cur];
    }
    return acc;
}, {});
// console.log(groupedNames);

//
Object.keys(groupedNames).forEach(groupKey => {
    console.log('_____', groupKey, '_____');
    groupedNames[groupKey].forEach(name => console.log(name));
})