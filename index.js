

document.addEventListener('DOMContentLoaded',init)

function init(){
    addListenders()
}
function addListenders(){
    document.querySelectorAll('nav a').forEach(item =>{
        item.addEventListener('click',onNavication)
    })
}
function onNavication(ev){
    document.querySelectorAll('nav a').forEach(item =>{
       item.classList.remove('active')
    })
    ev.target.classList.add('active')
}