console.log(2+3);
var a=10;
let b="H1";
const c=30;
console.log(a);
console.log(b);
console.log(c);
var d="10";
console.log(a+d);

const e=[10,"hello",30.5,true];
e.push(50);
console.log(e);
console.log(e[2]);
e[1]="Hi";
console.log(e);
console.log(e.length);
e.pop();
console.log(e);

e.unshift("H1");
console.log(e);
e.shift();
console.log(e);

e.splice(1,2);
console.log(e);

e.splice(1,0,"H1","H2");
console.log(e);
const arr=[10,20,30,40,50];
const arr1=arr.map(num => num*5);
console.log(arr);
console.log(arr1);

const arr2=arr.filter(num => num>20);
console.log(arr2);

const arr3=arr.find(num => num%2==0);
console.log(arr3);

const courses=["C","C++","Java","Python","JavaScript"];
console.log(courses.includes("C#"));
console.log(courses);
const newcourse=courses.filter(c=>c!=="C++");
console.log(newcourse);

const arr4=[10,20,30,40,50];
sum=arr4.reduce((sum,num)=>sum+num,0);
console.log(sum);

const user={
    firstname:"H1",
    lastname:"H2",
    age:20,
    email:"XXXXXXXXXXXX",
    company:{
        salary:10000,
        name:"H1"
    }
};
console.log(user);
console.log(user.company);

console.log(Object.keys(user));
console.log(Object.values(user));

const arrr=[10,20,30,40,50];
const arrr2=[1,2,3,4,5];
const merge=[...arrr,...arrr2];
console.log(merge);

function add(a,b){
    return a+b;
}
console.log(add(10,20));

const arr5=[10,20,30,40,50];
function addArr(arr5){
    const sum=arr5.reduce((sum,num)=>sum+num,0);
    return sum;
}
console.log(addArr(arr5));

const fact=function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(fact(5));

function greet(name){
    console.log("Hello "+name);
}
greet("H1");

let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);   
