//  primative

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.5;

const isloggedin = false
const temperature = null 
let userEmail;

const  id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId)

// const bigNumber = 64684765465464n


// Reference (non- primative)
// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "daagu"];

let myObj = {
    name: "mayank",
    age: 20, 
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)

// ___________________________________________________________________________________________________________________________________


// stack and heap concept

let myyoutube ="mayanknaruka";
let anothername=myyoutube;

 anothername="chaiaurcode"

 console.log(myyoutube)
console.log(anothername)

// ///////////////////////OBJECT HEAP EXAMPLE/////////

let userone ={
    email :"mayank@gmail.com",
    upi :"user@ybl"
}

let usertwo = userone

usertwo.email="mayankgoogle.com"

console.log(userone.email)
console.log(usertwo.email)