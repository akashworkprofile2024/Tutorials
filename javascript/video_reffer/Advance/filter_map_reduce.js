const coding = ['python','java','javascript']

// const store = coding.forEach((item)=>{
//         //  console.log(item);
//          return item
// })

// console.log(`Values: ${store} >> Type: ${store}`);


// FILTER OPERATIONS
const num  = [1,2,3,4,5,6]
// const store = num.filter((ele)=> ele > 2)
// console.log(store)

// const store = num.filter((ele)=>{ return ele > 2})
// console.log(store)


// 
// const newnum = []

// num.forEach((ele)=>{
//     if(ele > 2 ){
//         newnum.push(ele)
//     }
// })
// console.log(`Push Element Using ForEach: ${newnum}`);


// const books = [
//     {title:'Book One', genre:'Fiction', publish:1981, edition:2004},
//     {title:'Book Two', genre:'Non-Fiction', publish:1992, edition:2008},
//     {title:'Book Three', genre:'Science', publish:1985, edition:2010},
//     {title:'Book Four', genre:'History', publish:2001, edition:2015},
//     {title:'Book Five', genre:'Fantasy', publish:1999, edition:2012},
//     {title:'Book Six', genre:'Biography', publish:1987, edition:2005},
//     {title:'Book Seven', genre:'History', publish:1995, edition:2011},
//     {title:'Book Eight', genre:'Romance', publish:2003, edition:2018},
//     {title:'Book Nine', genre:'Thriller', publish:1990, edition:2007},
//     {title:'Book Ten', genre:'Adventure', publish:1983, edition:2006},
//     {title:'Book Eleven', genre:'Self-Help', publish:2005, edition:2020}
// ];

// const userBooks= books.filter((bk)=> bk.genre === 'History' )
// console.log(userBooks);


// const userBooks=books.filter((bk)=>{
//        return bk.publish <=2005;
// }) 
// console.log(userBooks)


// const mynum = [1,2,3,4,5,6,7,8,9,10]

// const store = mynum.map((num)=>num + 10);
// console.log(store)



// Chaning Method

// const newnums = mynum
// .map((num)=>num*10)   // 10  , 20 , 30 ....
// .map((num)=>num + 1) // 11 , 21 ,  31 ....
// .filter((num)=>num > 32 )
// console.log(newnums)




// ARRAY REDUCE 
// ACCUMULATOR IS EMPTY VARIABLE
// Here final sum store in accumulator
// const array1 = [1,2,3,4]

// const initialvalue = 0;  
// const sumwithinitial = array1.reduce(
//     (accumulator , currentvalue) => accumulator + currentvalue , initialvalue 
// );

// console.log(sumwithinitial)
 

// const numbers = [1,2,3]
// const total=numbers.reduce(function(accumu , currval){
//     console.log(`acc: ${accumu} :=: currval:${currval}`)
//     return accumu + currval 
// } , 0)

// console.log(`Final Answer : ${total}`);


// const total=numbers.reduce((acc , curr)=>acc + curr , 0)
// console.log(`Final Answer : ${total}`);



const arrsalecourse = [
    { product: 'Python', price: 5000 },
    { product: 'JavaScript', price: 4500 },
    { product: 'Java', price: 4000 },
    { product: 'C++', price: 3500 },
    { product: 'ReactJS', price: 6000 },
    { product: 'NodeJS', price: 5500 }
];
let cart = arrsalecourse.reduce((accu , course)=>accu + course.price, 0 )
console.log(`All Total Course Price: ${cart}`);
