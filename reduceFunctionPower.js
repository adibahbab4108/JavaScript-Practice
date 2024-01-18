const numbers = [1, 2, 3, 4, false, "", NaN, 5, 6];
// return string sum
const result1 = numbers.reduce((sum, currentValue, index) => {
    if (index === 0) sum += '[';

    if (currentValue)
        sum += currentValue.toString() + (index < numbers.length - 1 ? ',' : '');

    if (index === numbers.length - 1) sum += ']';

    return sum;
}, '')// sum er initial value '' diye disi zeheto string return korbo(ja return korbo ekane tai dibo)

console.log(result1);

// return array sum
const result2 = numbers.reduce((sum, currentValue) => {
    if (currentValue) sum.push(currentValue.toString())
    return sum;
}, [])// eibare array return korbo tai [] disi