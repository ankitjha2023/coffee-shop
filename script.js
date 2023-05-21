const btn = document.getElementById('btn')
const toggle = document.getElementById('toggle')
const links = document.querySelectorAll('.nav-link')

btn.addEventListener('click',()=>{

    if(toggle.classList.contains('fa-bars')){
        toggle.classList.replace('fa-bars', 'fa-xmark')
    }else{
        toggle.classList.replace('fa-xmark','fa-bars')
    }
})


links.forEach((link)=>{
    link.addEventListener("click",()=>{
        links.forEach((link)=>{
            link.style.textDecoration="none"
        })
        link.style.textDecoration="underline"
    })
    
    
})


