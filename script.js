const blob= document.getElementById("blob");

document.body.onpointermove = event=>{
  const{clientX,clientY} = event;
  
  blob.animate({
    left:`${clientX-150}px`,
    top:`${clientY-150}px`
  },{ duration:5000,fill:"forwards"});
}