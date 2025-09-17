const storeform = document.querySelector('form')
// console.log(storeform)

storeform.addEventListener('submit' , function(e){
    e.preventDefault();

    const storeheight = parseInt(document.querySelector('#height').value);

    const storeweight = parseInt(document.querySelector('#weight').value);

    const store_result = document.querySelector('#results');
    

    if(storeheight === '' || storeheight < 0 || isNaN(storeheight)){
         store_result.innerHTML = `Please give a valid height${storeheight}`;
    }else if(storeweight === '' || storeweight < 0 || isNaN(storeweight)){
         store_result.innerHTML = `Please give a valid weight${storeweight}`;
    }else{
        const bmi = (storeweight / ((storeheight*storeheight)/1000)).toFixed(2);

        store_result.innerHTML=`<span>${bmi}</span>`
    }
    


});



