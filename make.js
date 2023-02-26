// // function array(c){
// //     var length=0;
// //     while(c[length]!==undefined)
// //     length++;
// //     return length;
// // }
// // const c=[22,44,55,676,8];
// // console.log(array(c));

// // let color=['a','b','c','d'];
// // for(let i=0;i<color.length;i++)
// // {

// //     console.log('at Index'+i+'----'+color[i]);
// // }



// // const someArray=[1,2,3,4,5]
// // const outputarray =[];
// // let count =0;
// // const search=3;
// // for(let i=0;i<someArray;i++){

// //     if(someArray[i]===search&&count===0)
// //     {
// //          count++;
// // }else
// // {
// // outputarray.push(someArray[i]);

// // // } 
// // // console.log(outputarray);

// // // }

// // var arr=[1,2,3,4,5,6,7,8,8,1]
// // var count =0;
// // for(var i=0;i<arr.length;i++){
// //     for(var j=1;j<arr.length;j++){
// //         count++;
// //         break;
// //     }

// // }
// // console.log('duplicated element',+count);



// // var y= [1,2,3,4,5,6]
// // console.log(even(y));
// // function even(y){
// //     let arr=[];
// //     for(let i=0; i<y.length; i++)
// //     {
// //         if(i%2===0)
// //         {
// //             arr.push(y[i])
// //         }
       
// //     }

// //      arr;
// // }
// let student=[
//     {
//         name:'manish',
//         marks:69
//     },
//     {
//         name:'ashish',
//         marks:345
//     },
//     {
//         name:'netvik',
//         marks:'456'
//     }
// ];
// // for (let i=0;i<student.length;i++)
// // {
// //     student[i].marks=student[i].marks-10 
// // }
// // console.log(student)

// // student.forEach((fact)=>{
// //     fact.marks=fact.marks-10
// // });
// // console.log(student);

// // 
// // let Actor=[
// //     {
// //         name:'Akshay',
// //         Payment:2400,
// //         age:39
// //     },
// //     {
// //         name:'salman',
// //         Payment:2300,
// //         age:55
// //     },
// //     {
// //         name:'ritik',
// //         Payment:3000,
// //         age:30
// //     }
// // ]
// // const news =Actor.filter((charge)=>{
// // if(charge.age<40)
// // {
// // return true;
// // }
// // else{
// //     return false
// // }

// // })
// // console.log(news)

// // const User=[
// //     {
// //         fname:'manish',
// //         lname:'kushwah'
// //     },
// //     {
// //         fname:'anil',
// //         lname:'kushwah'
// //     }
// // ]
// // const newUser=User.map((final)=>{
// //     return{
// //         fullname:`${final.fname} ${final.lname}`
// //     };
// // });
// // console.log(newUser);

// const user=[
//     {
//         marks:600
//     },
//     {
//         marks:500
//     },
//     {
//         marks:100
//     }
// ]
// const NewUser=user.reduce((total,rate) => {
//           total=total+rate.marks;
//        return total
// },0)
// console.log(NewUser)

// const lan=['manish ','ullu','sai'];

// console.log(lan.shift())
// for (i=0;i<5;i++){
//     console.log('manish');
// }
const actor=[
    {
        name:'mnish',
        pay:'1000'
    },
    {
        name:'mnish',
        pay:'1000'
    } ,
       {
        name:'mnish',
        pay:'1000'
    }
];
// for (let i=0;i<actor.length;i++){
//     // actor[i].pay=actor[i].pay-100   
//     console.log(actor.length)
// // }
// actor.forEach((Actor) => {
//     Actor.pay=Actor.pay-10;

    
// })
// // console.log(actor)

// // for(let Actor of a/ctor){
// //     Actor.pay=Actor.pay-10
// // }
// // console.log(actor)
// const employee=[
//     {
//         name:'manish',
//         salary:20000
//     },
//     {
//         name:'manish',
//         salary:15000
//     },
//     {
//         name:'manish',
//         salary:19000
//     },
    
// ]
// const harry=employee.filter((student) =>{
//     if(student.salary<20000){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(harry);
// // our orignal array is acities and we have new array received 
// const array =[
//     {
//         fname:'manish ',
//         lname:'kushwah'

//     },
//     {
//         fname:'kapil',
//         lname:'kushwah'
//     },
//     {
//         fname:'dev',
//         lname:'patel'
//     }
// ]
// const sahihe=array.map((user) =>{
//     return {
//         fullname:user.fname + user.lname
//     }
// });
// console.log(sahihe)
// console.log(array)

// const movie=[
//     {
//         name:'harry potter',
//        bujget:2000
//     },
//     {
//         name:'hero',
//         bujget:89000

//     }
// ]
//  const fact=movie.reduce((total,movies)=>{

//     total=total+ movies.bujget;
//     return total
//  },0)
//  console.log(fact)


// const admin =[2,3,4,7];
// const user={
//     name:'manish',
//     id:7
// }
// // const admi=admin.indexOf(user.id)
// // console.log(admi)
// const sake=admin.includes(user.id)
// console.log(sake)

// const ame=['name','fach','shyam','sahil']
// ame.sort();
// console.log(ame)
let string='hello iam manish kushwah'
// console.log(string.split('a'))'
// console.log (string.substring(0,string.length-1))
let temp=string.split('').reverse().join('');
console.log(temp)