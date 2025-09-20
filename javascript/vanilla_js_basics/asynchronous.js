function wait2sec(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('Work is done')
        },2000)
    })
}

async function dowork(){          // Run First
    console.log(`Work is start`);
    const result = await wait2sec();
    console.log(`${result}`);
}

dowork()



function fakeapicall()
{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({userid:1 , username:'rahul'});
        },3000)
    })
}


async function getuserdata(){
    console.log(`Fetching Data start`);

    const userdata = await fakeapicall()

    console.log('Data Found: ',userdata);
}

getuserdata()



