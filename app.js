var i=0
var z=0
var w=0
;
let output=document.getElementById('output')
;
let incr=document.getElementById('incr')
;
let decr=document.getElementById('decr')
;
function reset(){
    
    if(i>100){
        i=0
        z=z+1
        output.innerHTML=i
        zombie.innerHTML=z
    };
}
;
output.innerHTML=i
;
zombie.innerHTML=z
;
wraith.innerHTML=w

incr.addEventListener('click',function(){
    i=i+1    
    output.innerHTML=i
    reset()
    
});
decr.addEventListener('click',function(){
    i=i+2;
    output.innerHTML=i
    reset()
});
clicker.addEventListener('click',function(){
    i=i+5;
    reset()
    output.innerHTML=i
});
