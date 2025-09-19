 const btn_store = document.querySelectorAll('.button')
          const body = document.querySelector('body') 
          btn_store.forEach(function(btn){
            btn.addEventListener('click',function(e){
                   if(e.target.id === 'pink'){
                       body.style.backgroundColor=e.target.id
                   }
                    if(e.target.id === 'purple'){
                       body.style.backgroundColor=e.target.id
                   }
                    if(e.target.id === 'yellow'){
                       body.style.backgroundColor=e.target.id
                   }
                    if(e.target.id === 'orange'){
                       body.style.backgroundColor=e.target.id
                   }
            });
          });


          