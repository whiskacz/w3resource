//1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

// function func(a,b){
//     return Object.keys(b).every(key => a.hasOwnProperty(key) && a[key] === b[key])
// }

// console.log(func({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(func({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(func({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

//2. Write a JavaScript program to copy a string to the clipboard.

// function func(text) {
//     inputText = document.createElement("inputText")
//     document.body.appendChild(inputText)
//     const selected =document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
//     inputText.select()
//     document.execCommand('copy')
//     document.body.removeChild(inputText)
//     if (selected) {
//         document.getSelection().removeAllRanges();
//         document.getSelection().addRange(selected);
//       }
// }

// func("tekt")

// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

// const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ullam magni. Natus, odit, dolor illum modi sint consectetur aliquam deleniti recusandae fugiat autem dolorum veniam quis, nulla corporis fuga quisquam. Accusamus, porro? Nam suscipit a doloribus officia ratione possimus error sint, ipsum numquam sequi! Fugit eaque perspiciatis molestias quae tenetur aliquid nam libero facere nisi minima necessitatibus, iusto explicabo recusandae."

// function func (text) {
    
//     const handleArray = text.split(" ")
    
//     handleArray.forEach((element,index) => {if(index !== handleArray.length -1){
//         handleArray[index] = `${element}_`
//     }
//     })
    
//     return handleArray.join("")
// }

// console.log(func(text))


// 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

// const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ullam magni. Natus, odit, dolor illum modi sint consectetur aliquam deleniti recusandae fugiat autem dolorum veniam quis, nulla corporis fuga quisquam.\n Accusamus, porro? Nam suscipit a doloribus officia ratione possimus error sint, ipsum numquam sequi! Fugit eaque perspiciatis molestias quae tenetur aliquid nam libero facere nisi minima necessitatibus, iusto explicabo recusandae."

// const func = ( text ) => {

//     const title = text.slice(0,text.indexOf("\n"))
//     console.log(title)
//     const value = text.slice(text.indexOf("\n"),)
//     console.log(value)

//     const newObj = {
//         firstName : "Pawel",
//         hejka: function() {
//             console.log(`hejka ${this.firstName}`)
//         }

//     }
//     const newObj2 = Object.create(newObj) 
//     console.log(newObj2.hejka)

//     newObj2[title] = value
//     console.log(newObj2)
// }


// console.log(func(text))

//6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.

// const func = (arr, target) => {
//     return Object.values(arr).reduce((acc, value) => {
//         if(acc !==undefined) return acc;
//         if(typeof value === "object") return func(value,target)
//         if (value === target) return value;
//     }, undefined)
// }

// const data = {
//     level1: {
//       level2: {
//         level3: 'some data'
//       }
//     }
//   };

//   console.log(func(data, "level3"))

//   const exampleArray = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4,
//             },
//         },
//     },
//     h: 5,
// };

// const result = func(exampleArray, 3);
// console.log(result); // Wynik: 3


//7. Write a JavaScript program to convert a specified number into an array of digits.

// const num = 12341234

// const func = (numbers) => {
//     //return numbers.toString().split("")
//     // return [...`${numbers}`].map(element => parseInt(element))
//     const stringNumbers = numbers.toString()
//     const arr = [...stringNumbers]
//     return arr.join(',')

// }
// console.log(func(num))

// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.


// const testArr = [1,2,3,4,5,6]

// const func = (arr, target) => {
//     return arr.filter((element) => arr[element] !== target)
// } 

// console.log(func(testArr, 5))

// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

10. Write a JavaScript program to extract values at specified indexes from a specified array.