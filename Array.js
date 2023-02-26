// //const language =['java','python','Mern'];

// //language.push('React'); //    --->last element add

// //language.pop()               -->last element deleted

// //language.unshift('html')     -->first element add

// //language.shift()             --->first element is deleted

// //console.log(language.pop())   -----> return last element

// //----------------------------------------//
// //loop use in Array
// // const Actor = [
// //     {
// //         name: 'manish',
// //         payment: 100,
// //         salary:20000
// //     },
// //     {
// //         name: 'Akshay',
// //         payment: 200,
// //         salary:25000
// //     },
// //     {
// //         name: 'Satish',
// //         payment: 300,
// //         salary:15000
// //     }
// //  ];
// // for (let i = 0; i < Actor.length; i++) {
// //     Actor[i].payment = Actor[i].payment - 10;
// //     Actor[i].salary=Actor[i].salary-5000
// // }
// // console.log(Actor);


// //----------------------------------------------------
// //using for each method in Array

// // Actor.forEach((Actor)=>{
// //     Actor.payment=Actor.payment-10;
// //     Actor.salary=Actor.salary-2000
// // })
// // console.log(Actor)
// //--------------------------------------------------------

// // //using for of loop
// // for(let actor of Actor){
// //     actor.payment=actor.payment-20
// //     actor.salary=actor.salary-1000
// // }
// //     console.log(Actor)
// //--------------------------------------------------------

// //Array using Filter

// // const Students=[
// //     {
// //         name:'student1',
// //         Age:23,
// //         marks:45
// //     },
// //     {
// //         name:'student2',
// //         Age:20,
// //         marks:50
// //     },
// //     {
// //         name:'student3',
// //         Age:19,
// //         marks:35
// //     }
// // ];
// //  const failed=Students.filter((rohit)=>{
// //     if(rohit.marks>45){
// //     return true;
// //     } else {
// //         return false;
// //     }

// // });
// // console.log(failed);


// // //--->Second trick 
// // //
// // const failed=Students.filter((sourabh)=>sourabh.marks<45);
// // console.log(failed);
// //-------------------------------------------------------------
// // Using Map method
// // const users=[
// //     {
// //       fName:'manish',
// //       lName:'kushwah'  
// //     },

// //     {
// //         fName:'ashish',
// //         lName:'thakur'
// //     }
// // ];
// //  const FinalUser=users.map((user)=> {
// //         fullname:`${user.fName} ${user.lName}`
// //     });

 
// //  console.log(FinalUser);
// //--------------------------------------------------------------------

// //reduce

// // const movies=[
// //     {
// //         name:'bahubali',
// //         budget:1200
// //     },
// //     {
// //         name:'social',
// //         budget: 2300
// //     },
// //     {
// //         name:'matrix',
// //         budget:4000
// //     }
// // ];
// // const total=movies.reduce((acc,movie)=>{
// //     acc=acc+movie.budget;
// //     return acc;
// // },0);
// // console.log(total);
// //----------------------------------------------------

// //remove duplicate item in Array
// // const Arr=["mango","apple","apple"]

// // function removeDuplicates(Arr){
// // return Arr.filter((item,index)=>Arr.indexOf(item)===index);
// // }
// // console.log(removeDuplicates(Arr))


//  //----------------------------------------------------------------
// //string to array convert
//  let str="Hello How are you";
//  //console.log([str]);---->trick1
//  //console.log([...str]);------>trick 2
//  //console.log(str.split(''))

//  //all the space element in array 

// // console.log(str.split(' '))
// //console.log (str.split('are'))

// //replace any character
// //console.log(str.replace('H',"_"))

// // let temp=str.split("").reverse().join("")




let arr=[23,55,88,99,67823,9,2];
console.log(arr.reverse())