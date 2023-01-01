const one=document.getElementById('one')
const tow=document.getElementById('tow')
const trhee=document.getElementById('trhee')
const foor=document.getElementById('foor')
const five=document.getElementById('five')
const heder=document.querySelector('header')
const nav=document.querySelector('header .center')
const menu=document.querySelector('.menu')
menu.addEventListener('click',()=>{
     menu.classList.toggle('click')
     if(menu.classList=='menu click'){
          nav.style.display='flex'
     }else{
          nav.style.display='none' 
     }
   
})






window.onscroll=()=>{
     console.log( scrollY)
     if(scrollY>250){
          tow.style.transform='translateX(0%)'
     }else{
          tow.style.transform='translateX(-100%)'
     }
     if(scrollY>560){
          heder.style.backgroundColor='black'
     }else{
          heder.style.backgroundColor='transparent'
     }
     if(scrollY>600){
          trhee.style.transform='translateX(0%)'
     }else{
          trhee.style.transform='translateX(100%)'
     } 
     if(scrollY>1642){
          foor.style.transform='translateX(0%)'
     }else{
          foor.style.transform='translateX(-100%)'
     } 
     if(scrollY>2060){
          five.style.transform='translateX(0%)'
     }else{
          five.style.transform='translateX(100%)'
     } 
     
}

