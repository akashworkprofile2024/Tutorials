function mydisplay(some){
    console.log(`${some}`);
}

let mypromise=new Promise(function(myresolve,myreject){
    let x = 0

    if(x==0){
        myresolve('ok')
    }else{
        myreject('Error')
    }
})

mypromise.then(
    function(value){mydisplay(value)},
    function(error){mydisplay(error)}
)