for(let y = 2014 ; y<=2050 ; y++){
    const d = new Date(y, 0 , 1)   // year month date
    if(d.getDay() ===0){
        console.log(d.toDateString())
    }
}

