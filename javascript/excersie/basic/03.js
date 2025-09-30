const store = new Date();
const date = store.getDate();
const month = store.getMonth();
const year = store.getFullYear();

let arrday = [`${date}-${month}-${year}` , `${month}-${date}-${year}` , `${date}-${month}-${year}`]


for(let i = 0 ;  i<arrday.length ; i++){
     console.log(arrday[i])
}
