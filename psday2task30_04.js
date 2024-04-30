//print 1 to 10 
// let num = +prompt("Enter a number")
// let i=1
// while(!(i>=num+1)){
//     console.log(i)
//     i++
// }

//print 10 to 1
// let num = +prompt("Enter a number")
// i=num
// while(!(i<=0)){
//     console.log(i)
//     i--
// }

//print -10 to -1
// let num = +prompt("Enter a number")
// i=-num;
// while(!(i==0)){
//      console.log(i)
//      i++
// }

//print -1 to -10 
// let num = +prompt("Enter a number")
// i=-1;
// while(i!=-num-1){
//     console.log(i)
//     i--
// }


// 2.write a program to find the largest prime in the given number
// num = prompt("Enter a number:");
// largeNum=0;
// for(n of num){
//     if(n>1){
//         c=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c=false
//                 break
//             }
//         }
//         if(c){
//             if(n>largeNum){
//                 largeNum=n
//             }
//         }
//     }
// }
// console.log("large prime num is:",largeNum)


//3.write a program to print the sum of largest and smallest prime digits in the given number
// num = prompt("Enter a number:");
// value1=0; value2=9;
// for(n of num){
//     if(n>1){
//         c=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c=false
//                 break
//             }
//         }
//         if(c){
//             if(n>value1){
//                 value1=Number(n)
//             }
//             if(n<value2){
//                 value2 = Number(n)
//             }
//         }
//     }
// }
// console.log("sum of largest prime number and smallest prime num is",(value1+value2))

//4.write a program to print the largest non prime digit in the given number
//  num = prompt("enter upto number:");
// value=0;
// for(n of num){
//     if(n>1){
//         c=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c=false
//                 if(n>value){
//                     value=n
//                 }
//                 break
//             }
//         }
//         if(c)
//     }
// }
// console.log("large non prime num is:",value)