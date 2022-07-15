// // 1. ways to print in JavaScript

// console.log('Hello World');

// document.write('this is a document write'); // this is write document in the web page.

// console.log("hello world", 4 + 6, "Another log")


// // 2. JavaScript console API

// console.warn("This is a warning ");     // this will show a warning 

// console.error("This is an error"); // this  will shown as error

// // console.clear();  // this is clear the whole console

// console.assert(4 == 2)  // this will shown an error because of both the values are not equal.


// // 3. JavaScript Variables.
// // What are variables??.... Container to store data values.

// var number1 = 10;
// var number2 = 16.1;

// console.log(number1+number2);


//// 4. Datatypes in JavaScript.

// // Strings
// var str1 = "this is a string";
// var str2 = 'this is also a string';

// // numbers
// var num1 = 473;
// var num2  = 10.16;

// // objects
// var marks = {
//     rohan: 16,
//     vishi: 10,
//     sahil: 29,
//     harshit: 16
// }

// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(marks);


// // boolen
// a = true;
// b = false;
// console.log(a,b);


// // undefined. undefined are those whose value is not define.

// // var und = undefined;
// var und; // this is also undefined. 
// console.log(undefined);


// // null. which have nothing inside this.

// var n = null;
// console.log(n);

// /* 

// // At very high level, there are two types of JavaScript.
// // 1. Primitive Data Type:  undefined, null, number, string, boolean, symbol
// // 2. Reference data Type: Arrays and Objects

// */


// // Arrays
// var arr = [1, 2, 3, 4, 5];
// var arr2 = [1, 2, 3,"ROHAN KAPOOR", 4, 5];


// // 5. Operators in JavaScript

// // Arthimetic Operators
// var a = 10;
// var b = 16;
// console.log("The value of a+b is ", a+b);
// console.log("The value of a-b is ", a-b);
// console.log("The value of a*b is ", a*b);
// console.log("The value of a/b is ", a/b);

// // Assignment Operator.
// var c = b;
// console.log(c);
// c = c+2;    // c+=2
// c = c-2;    // c+=2
// c = c*2;    // c+=2
// c = c/2;    // c+=2


// // Comparsion Operator.
// var x = 10;
// var y = 34;

// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x!=y);


// // Logical Operators.

// // Logical and      // Both the values should be true.
// console.log(true && true);
// console.log(false && false);
// console.log(true &&  false);
// console.log(false &&  true);

// // Logical or       // anyone of the value should be true.
// console.log(true || true);
// console.log(false  || false);
// console.log(true || false);
// console.log(false || true);

// // Logical not      // this will become true is false and false become true.      
// console.log(!true);
// console.log(!false);


// // 6. functions in JavaScript.
// // Dry = do not repeat yourself.
// function avg(a ,b){
//     d = (a+b)/2
//     return d;
// }

// c1 = avg(7,14);
// c2 = avg(56,76);

// console.log(c1, c2);


// 7. conditional in JavaScriprt

// var age = 26;
// // single
// if(age>18){
//     console.log("You can drive a car");
// }

// // else-if
// // if(age>18){
// //     console.log("You can drive a car");
// // }

// // else{
// //     console.log("You cannot dive a gar. you are not eligable")
// // }

// // else if ladder
// if(age>55){
//     console.log("you can do this")
// }

// else if(age>35){
//     console.log("You can do better than this")
// }

// else if(age>25){
//     console.log("you are not eligable")

// }
// else if(age>18){
//     console.log("you are not eligable")

// }

// else{
//     console.log("Bacche raahe")
// }

// console.log("end of the ladder");


// 7. loops in JavaScript
//  for loop.

// var arr = [1, 2, 3, 4, 5, 6, 7]
// for(var i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// 2. forEach loop 

// arr.forEach(function(element){
//     console.log(element);
// })


// While loop

// const b = 23;  // this is a constant we cannot change the value of this.
// let a = 0; // this is a temp variable. 

// while(a<arr.length){
//     console.log(arr[a]);
//     a++;
// }


// do while loop.
// do{
//     console.log(arr[a]);
//     a++;
// }
// while(a<arr.length);


// 8. break and continue

// var arr = [1, 2, 3, 4, 5, 6, 7]
// for(var i = 0; i<arr.length;  i++){
//     if(i==2){
//         break;
//     }
//     console.log(arr[i]);
// }

// for(var i = 0; i<arr.length;  i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i]);
// }


// 9. Arrays methods 
// let arr = ["camera", "bike", 34, null, true];
// arr.pop(); // this is remove the last element of an array.
// console.log(arr.length); // this will print the length of an array.

// arr.push("Rohan"); // this is add a element in the last of an array.
// console.log(arr);

// arr.shift() // this will remove the first element.
// console.log(arr)

// let myarr = [2,4,7,8,83,43,13,554,75,432];
// myarr.sort();
// console.log(myarr);


// 10. strings method

// let mylovelyString = "ROHAN IS THE KING OF THE WORLD KING";
// console.log(mylovelyString.length);
// console.log(mylovelyString.indexOf("ROHAN"));
// console.log(mylovelyString.indexOf("KING"));
// console.log(mylovelyString.lastIndexOf("KING"));

// console.log(mylovelyString.slice(0,5))

// d = mylovelyString.replace("ROHAN", "MITTHU");
// console.log(d);


//11. Dates in JavaScript.

// mydates  = new Date;
// console.log(mydates); // this will get dates   
// console.log(mydates.getTime()); // this will get dates in full seconds
// console.log(mydates.getFullYear()); // this will print current year
// console.log(mydates.getDay()); // this will print day in number
// console.log(mydates.getMinutes()); // thi will print the numbers
// console.log(mydates.getHours());    // this will print the hours


// 12. DOM manupulation in JavaScript. imp. (Document Object Model)
// 1.

let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);

elemclass[0].style.background = "grey";

elemclass[0].classList.add(".bg-primary");
elemclass[0].classList.add(".text-successer");



// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn = document.getElementsByTagName("button");
// tn = document.getElementsByTagName("div");
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerHTML = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerHTML = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);


// 13. JavaScript Events

// function clicked(){
//     console.log("The button is clicked")
// }

// firstcontainer.addEventListener('click', function(){
//     console.log("clicked on container");
// })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse on contronller");
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse out of contronller");
// })

// firstcontainer.addEventListener('mouseup', function(){
//     console.log("mouse up when clicked on container");
// })


// firstcontainer.addEventListener('mousedown', function(){
//     console.log("mouse down when clicked on container");
// })


// 14. settimeout and setinterval in JavaScript.

// logkaro = ()=>{
//     // document.querySelectorAll('container')[1].interHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }

// //clr = setTimeout(logkaro, 3000);  // this will repeat only once

// clr =  setInterval(logkaro, 2000);
// console.log(clr);

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


//15. local storage in JavaScript

// localStorage.setItem("name", "Rohan Kapoor")
// localStorage
// localStorage.getItem("name")


// 16. Json in JavaScript

// obj = {name: "Rohan", length: 1}
// jso = JSON.stringify(obj); // this converted object into string through stringify
// console.log(typeof(jso))
// console.log(jso)

// parsed = JSON.parse(`{"name": "Rohan", "Length": 1, "a":{"This": "That"}}`)
// console.log(parsed)



