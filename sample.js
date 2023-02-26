// var a=5;
// var b=6;
// var c=3.14*5*5;
// console.log(`area of circle ${c}`);

// var p=3000;
// var r=3;
// var t=1;

// var SI=p*r*t/100;
// console.log("Simple Interest is ",`${SI}`);

// var H=45;
// var E=40;
// var m=49;
// var S=39;
// var B=42;

// var T=(H+E+m+S+B)/2.5;
// console.log("percentage of 5 subject=",`${T}`);

// const char ='a'

// const result = char.charCodeAt(0);
// console.log(`${result}`);
// var char ='a'
// var result= char.charCodeAt(0);
// console.log(result);

//factorrial of  iven no


// var a=8;

// var f=1;
// for (var i=1;i<a;i++)
// {
//    var f=f*i;

// }
// console.log(`facrial of ibven ono.${f}`)



// var A=55;
// var B=0;
// var C=45;

// if((A>B)&&(A>C))
// {
//     console.log("A is Greatest")

// }
// else if((B>C)&&(B>A))
// {
//     console.log("B is greatest")


// }
// else
// {
//     console.log(" c is greatest")
// }



// const Name ="ashishkushwah" + "ashishkushwah";
// console.log(Name.length)
// console.log(Name.toUpperCase())
// console.log(Name.toLowerCase())
// console.log(Name.slice(6))
// console.log(Name.replaceAll("ashish","manish"))
// console.log(Name)
// console.log(Name[0])
// console.log(Name[1])
// console.log(Name[2])
// console.log(Name[3])

// let boy1= "manish";
// let boy2 = "ashish";

// console.log(`${boy1} is a friend of ${boy2}`)




// let fruit= 'ban\'na'



// console.log(fruit.length)


// var Name= "har\""
// console.log(Name.length)


// const Sentence="this is fox drive"
// const word="foxx"
// console.log(Sentence.includes(word));

// let St/r= "plese ive me 1000"
// console.log(Str.slice(13))

// let Marks_12 =[45,67,56,34,89,78,false,null,"not present"]
// console.log(Marks_12.toString())
// console.log(Marks_12.join('%'))
// Marks_12.pop()
// console.log(Marks_12)
// Marks_12.push(56)
// console.log(Marks_12)

// Marks_12.unshift(45[2])
//  console.log(Marks_12)


//  delete Marks_12[3]
//  console.log(Marks_12)


// var  A=[1,2,32,4,5,6,7,8,9]
// var B=[9,8,7,6,5,4,3,2,1]
// var C = A.concat(B)
// console.log(C)


// let marks =[12,5,6,88]
// // marks.push(890)//remove first element pop, push,shift,unshift 
// // /console.log(marks)
// // let b=marks.toString();// toString use to array element convert to string/
// // console.log(b)

// delete marks[3]
// // console.log(marks)
// let num=[2,3,5,6,789.98]
// // for(let i=0;i<num.length;i++)
// // {
// //     console.log(num[i])
// // }
// num.forEach((element) => {
//     console.log(element*element)
// });

// let Name=[2,3,5,6,7,8];
// // let arr=Array.from(Name)
// // // console.log(arr);
// // for(let i of Name){
// //     console.log(i)
// // }

// let gg=Name.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(gg)``
let i,j;
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        if(j<=i){
          console.log("*")  
        }
        
        else{
            console.log("&nbsp")
        }
        
        console.log("+<br>+")
    }
}
