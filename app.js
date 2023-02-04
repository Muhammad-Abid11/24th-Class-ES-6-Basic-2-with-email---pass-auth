
////  1. Object Destructure


/*

let obj = {
    names: "abid",
    classes: "fourth",
}

let { names, classes } = obj;   // here it save as a variable
console.log(names);         //---> abid
console.log(classes);       //---> fourth

*/


////  1. Array Destructure

/*

let Arrays = ["abid", "umair"];    //old method
let name1 = Arrays[0];
let name2 = Arrays[1];
console.log(name1)
console.log(name2)

console.log(`Down Array Distructuring`) // here we use tilda
// i.e Template Literal


let [name3, name4] = Arrays;
console.log(name3);
console.log(name4);


*/

////    2. Function Expression


/*function f00(){
                        OLD Methode
}*/

////IN NEW WE SAVE FUNCTION IN  A VARIABLE

// let foo=function(){
//     console.log(`Hello World`)
// }

// foo();





//          3. ARROW FUNCTIONS
//

/*
function foo(){                                     NORMAL
    console.log("Hello I'm Arrow Function "+names)
}*/

/*

let foo = (names, names2) => {             // if singal arrgument so round bracket also remove possile let foo= name=>{}
    console.log("Hello I'm Arrow Function " + names)
    console.log(`Hello I'm Arrow Function ${names} and ${names2}`)
    return "return sajid"
}

let names3 = foo("abid", "basit"); //2 pass argument
console.log(names3)              //1 received

let hello = () => "hello sajid 2"      //when you direct want return
console.log(hello());

*/


//  "this" difference in ES6 and
//     in arrow ES6 target parent
//     in ES5 it target its element









//// 4. Call BACK FUNCTION // Jo apne parameter me function ly   vide 38:00mint

//// callback function , jo kisi function me ja kr k call ho. or jis function me wo ja rha hai usy higher order function kahengy (video 1:18:00)
//// or higher order function apne argument me function lyta hai.



//// setInterval-> khas time k interval k bad repeat ho

// setInterval(() => console.log("hello kesy ho yar"), 1000)  //setInterval(function(),time in msec)


/*

let getData = (render_data) => {
    setTimeout(() => {
        render_data("Abid");
    }, 3000)    //3sec
}
let render_data = (data) => {       //Is also Call BAck
    console.log(data)
}

getData(render_data);

*/


//With parenthesis the method is invoked because of the parenthesis,
// the result of that invocation will be stored in before_add.
//Without the parenthesis you store a reference (or "pointer" if you will)
// to the function in the variable.
//--x
//From the above discussion you can understand that, when the function is
// called with parentheses, the code is executed and returns the result.
// And, when it is called without parentheses, a function reference is returned to the callable

// ALERT;
//getData(render_data); is line me hum render k reference pass kr rhen hen bajaye usy call krne k
// agar humne ye kiya too undefined ayega----->getData(render_data());
// q k easa krne sy ap usy call kr rhy ho parameter k under.




// 5. Array Filter Function   (higher order function) || jo return krta ho output
//  it always return its value

/*

let array = [{ names: "abid", age: 20 }, { names: "sajid", age: 30 }]// in array 2 objects
console.log(array);

// ////  array.filter(Functio ())  <-- in filter its requires 1 functionArgumnet

array.filter((a) => {                                 // array.filter(function(){
    console.log(`Data "a" k ander hai  `)
    console.log(a)                                  // })
})

array.filter((item, index, array1) => {
    console.log("Items", item);
    console.log("Index", index);
    console.log("Arrays", array1);
})

*/

/*
let array = [{ names: "abid", age: 20 }, { names: "sajid", age: 30 }]// in array 2 objects

let filter =array.filter(()=> {return true})    //1. basically filter me jb true return hota hai to wo array sy sb ly ata hai
     console.log(filter)                     // if false show nhi hoga kuch bhi
 */


/*
let array = [{ names: "abid", age: 20 }, { names: "sajid", age: 30 }]// in array 2 objects

let filter =array.filter((a)=> a.age===20)     //yhn 'a' argunment aya hai //2. yahn 1st condition true hai jbhi 1st show kry ga
        console.log(filter)
*/



/*

let array = [{ names: "abid", age: 20 }, { names: "sajid", age: 30 }]// in array 2 objects
let filter =array.filter(a=> a.age>10)
console.log(filter)

*/


// //       6. Search

/*
        let names="abid"
        let search=" ab"        // kh pe nhi ayega start sy kuch bhi match kry to ajayega
        if(names.startsWith(search)){       //      endsWth(srach) also work
            console.log(names)      //result->>> "abid"
        }

    */

// // 7. Array Map

//same like filter

// map me hum data ko update kr sakten hen.jesa nichy hua hai. ye filter me work nhi kryga
// map me true/false work nhi krta
// agar map nhi hota too hamen forloop use krna hota elements use krne k liye
/*
        let array=[1,2,3,4]
        console.log(array)              //-->>>>  [1,2,3,4]
        let multiply =array.map(data=> data*2)    // yhn per bhi 'data' as a argument hai by default
        console.log(multiply)           //-->>>>  [2,4,6,8]

*/

// callback function , jo kisi function me ja kr k call ho. or jis function me wo ja rha hai usy higher order function kahengy (video 1:18:00)
// or higher order function apne argument me function lyta hai.



// one topic fetch repeat video on 1:25:00



//  8.Classes
/*    let obj={
        names2:"abdi",      <-- object remainder
        age:123
    };
    console.log(obj);
*/

/*    function Student(names,age){      //// Function's name Capital -> "S" constructor
        this.names=names
        this.age=age                    ////  ES5 constructor remainder
    }
    let student1=new Student("abid",23)
    console.log(student1);

*/

// ES6 class(     Constructor     )
/*
   class Student{
       constructor(names,age){
           this.names=names;
           this.age=age;
       }
   }
    let student1=new Student("Abid",23)
    console.log(student1);


*/

//    Merging of class also defined 1:40:00

/*

class Student {
    constructor(names, age) {
        this.names = names;
        this.age = age;
    }
}
class School extends Student {          //extends use too connect to use classes property
    constructor(names, age, school) {
        super(names, age)              //super us class sy pehly jiski property apko chahye
        this.school = school;
    }
}


let student1 = new Student("Abid", 23)
let student2 = new Student("sajid", 223, "saylani")
console.log(student1);
console.log(student2);

*/





//  Firebase Authetication

/*

let signup = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    //console.log(email.value)
    //console.log(password.value)

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            // Signed in 
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}




let login = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    // console.log(email.value);
    // console.log(password.value);

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            // Signed in
            console.log("user login ......")
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });


}



*/




