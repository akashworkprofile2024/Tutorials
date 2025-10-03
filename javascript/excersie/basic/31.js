function firstcapfun(str){
    const conarr = str.split(" ")
    let modify_store="";
    for(let i=0;i<conarr.length;i++){
       const n = conarr[i].charAt(0).toUpperCase() + conarr[i].slice(1) + " "
       modify_store += n
    }
    return modify_store
}console.log(firstcapfun('the quick brown fox'))

