const iconMobil=document.querySelector('.MobilMenu')
const ull=document.querySelector('.ul')
iconMobil.addEventListener('click',()=>{
     iconMobil.classList.toggle('click')
     if(iconMobil.className=='MobilMenu click'){
        ull.style.display='flex'  
     }else{
          ull.style.display='none'   
     }
     
})
////////////
const one=document.getElementById('one')
const tow=document.getElementById('tow')
const three=document.getElementById('three')
const about=document.getElementById('about')
const work=document.getElementById('work')
const test=document.getElementById('test')
const persing=document.getElementById('persing')
const blog=document.getElementById('blog')
const countact=document.getElementById('countact')
window.onload=()=>{
     one.style.visibility='hidden'
     tow.style.visibility='hidden'
     three.style.visibility='hidden'
     about.style.opacity='0'
     work.style.opacity='0'
     test.style.opacity='0'
     persing.style.opacity='0'
     blog.style.opacity='0'
     countact.style.opacity='0'

}
window.onscroll=()=>{
     console.log(scrollY)
if(scrollY > 220){
     one.style.transition='0.4s'
     tow.style.transition='0.4s'
     three.style.transition='0.4s'
     one.style.visibility='visible'
     tow.style.visibility='visible'
     three.style.visibility='visible'
     }else{
     one.style.visibility='hidden'
     tow.style.visibility='hidden'
     three.style.visibility='hidden'  
     }
if(scrollY>660){
     about.style.transition='2s'
     about.style.opacity='1' 
}else{
     about.style.opacity='0'  
}
if(scrollY>985){
     work.style.transition='2s'
     work.style.opacity='1' 
}else{
     work.style.opacity='0'  
}
if(scrollY>1843){
     test.style.transition='2s'
     test.style.opacity='1' 
}else{
     test.style.opacity='0'  
}
if(scrollY>2227){
     persing.style.transition='2s'
     persing.style.opacity='1' 
}else{
     persing.style.opacity='0'  
}
if(scrollY>3150){
     blog.style.transition='2s'
     blog.style.opacity='1' 
}else{
     blog.style.opacity='0'  
}
if(scrollY>4462){
     countact.style.transition='2s'
     countact.style.opacity='1' 
}else{
     countact.style.opacity='0'  
}

}