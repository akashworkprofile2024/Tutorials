
/* 
  SYNTAX:--   

fetch(url, options)
  .then(response => {
    // server से मिला response
  })
  .catch(error => {
    // कोई error हुआ
  });
  

url → जिस server या API से data चाहिए उसका link।
options (optional) → request का type (GET, POST, PUT, DELETE), headers, body इत्यादि।
  */



// SIMPLE GET REQUEST
fetch('https://api.github.com/users/akashworkprofile2024')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


/*

fetch() क्या है?

fetch() JavaScript का एक built-in function है जो server से data लाने (request करने) और server को data भेजने (send करने) के लिए इस्तेमाल होता है।
यह asynchronous तरीके से काम करता है यानी data आने तक आपका बाकी code रुका नहीं रहता।



*/ 