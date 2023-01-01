const heder=document.querySelector('header')
const ulMobil=document.querySelector('.menu')
const nav=document.querySelector('nav')
const section1=document.getElementById('section1')
const slid2=document.getElementById('slid2')
const section3=document.getElementById('section3')
const section4=document.getElementById('section4')
const sectoin5=document.getElementById('sectoin5')

ulMobil.addEventListener('click',()=>{
     ulMobil.classList.toggle('click')
     if(ulMobil.classList=='menu click'){
          nav.style.display='flex'
     }else{
          nav.style.display='none'
     }
})





window.addEventListener('scroll',()=>{
     console.log(scrollY)
     if(40>=scrollY && scrollY>=0){
          heder.style.display='flex'
          heder.style.backgroundColor='transparent'
     }else if (500>scrollY && scrollY>40){
          heder.style.display='none'
     }else{
          heder.style.display='flex'
          heder.style.backgroundColor='black'
     }
     if(scrollY>360){
          section1.style.transition='2s'
          section1.style.opacity='1'
     }else{
          section1.style.opacity='0'
     }
     if(scrollY>800){
          slid2.style.transition='2s'
          slid2.style.opacity='1'
     }else{
          slid2.style.opacity='0'
     }
     if(scrollY>1217){
          section3.style.transition='2s'
          section3.style.opacity='1'
     }else{
          section3.style.opacity='0'
     }
     if(scrollY>1830){
          section4.style.transition='2s'
          section4.style.opacity='1'
     }else{
          section4.style.opacity='0'
     }
     if(scrollY>2330){
          sectoin5.style.transition='2s'
          sectoin5.style.opacity='1'
     }else{
          sectoin5.style.opacity='0'
     }

})


let current=0;
const sliders=document.querySelectorAll('.slider .blok')
const btnlef=document.getElementById('left')
const btnrifht=document.getElementById('right')
btnlef.addEventListener('click',()=>{
     current++
     if(current>=3){
          current=2
       }
     sliders.forEach((e)=>{
          e.style.visibility='hidden'
          sliders[current].style.visibility='visible'
     }) 
})

btnrifht.addEventListener('click',()=>{
     current--
     if(current<=0){
          current=0
       }
     sliders.forEach((e)=>{
          e.style.visibility='hidden'
          sliders[current].style.visibility='visible'
     })  
   })







