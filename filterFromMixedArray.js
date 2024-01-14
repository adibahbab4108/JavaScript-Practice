const mixedArray = [1, 2, 3, "Adib", null, 4, false, 5, , undefined];
let numberArry = [];

//imperative method
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        numberArry.push(mixedArray[i])//taking only number
    }
}
console.log(numberArry);

//declerative method
const filteredArray=mixedArray.filter((v)=>typeof v==='number');
console.log(filteredArray);