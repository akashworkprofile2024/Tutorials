function revstr(str){
    let revstore = '';
    for(let i = str.length -1 ; i >= 0 ; i--){
        revstore += str[i]
    }
    return revstore;
};console.log(revstr('Akash'))