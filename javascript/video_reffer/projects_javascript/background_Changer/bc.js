const storeimg_btn = document.querySelectorAll('.button')
const body = document.querySelector('body')
storeimg_btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        storeimg_btn.forEach(img => img.style.border = "none");
        const imgsrc = e.target.getAttribute('src');
        body.style.backgroundImage=`url(${imgsrc})`;
        body.style.backgroundRepeat='no-repeat'
        body.style.backgroundSize='cover'
        body.style.backgroundPosition='center';
        e.target.style.border='4px solid white';
        
    });
})
