var d=document.querySelector('.toggle')
var side=document.querySelector('.sidebar')
d.addEventListener('click',function(){
    side.classList.toggle('active')
})
var cross=document.querySelector('.cross')
cross.addEventListener('click',function(){
    if(side.classList.contains('active')){
        side.classList.remove('active')
    }
})
