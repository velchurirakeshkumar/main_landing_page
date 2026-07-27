
document.querySelectorAll('.card').forEach((c,i)=>{
 c.style.opacity=0;
 c.style.transform='translateY(30px)';
 setTimeout(()=>{
   c.style.transition='all .8s';
   c.style.opacity=1;
   c.style.transform='translateY(0)';
 },500+i*250);
});
