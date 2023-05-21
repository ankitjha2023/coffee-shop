
const search = document.getElementById('search')
const allItem = document.querySelectorAll('h5')

search.addEventListener('keyup',()=>{
    let searchTerm = search.value.toUpperCase()

   
    allItem.forEach(item=>{
        if(item.textContent.toUpperCase().indexOf(searchTerm)>-1){
            item.parentElement.parentElement.style.display=""
        }else{
            item.parentElement.parentElement.style.display="none"
        }
    })
})