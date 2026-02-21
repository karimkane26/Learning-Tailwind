
let buttonhambouger = document.querySelector('.hamburger')
buttonhambouger.addEventListener('click', function() {
    document.querySelector('.responsive').style.display='block '
    document.querySelector('.responsive').classList.add('flex','justify-end','my-6','space-y-3','rounded-md','bg-blue-500');
    document.querySelector('.closure').style.display='block'
})

 let closure =  document.querySelector('.closure')
 closure.addEventListener('click',function(){
 document.querySelector('.responsive').style.display = 'none';

 })
