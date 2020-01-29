var i=0
;
h="hidden"
;
O="block"
;
let output=document.getElementById('output')
;
let incr=document.getElementById('incr')
;
let decr=document.getElementById('decr')
;
// "trying to hide and reveal 'clicker'"
// let clicker=document.getElementById('clicker')
// var h=
// if(output.innerHTML>="5")
// {document.getElementById('clicker').style.visibility=O
//         console.log('jello')
// };
output.innerHTML=i
;
incr.addEventListener('click',function(){
    i=i+1    
    output.innerHTML=i
});
decr.addEventListener('click',function(){
    i=i+2;
    output.innerHTML=i
});
clicker.addEventListener('click',function(){
    i=i+5;
    if(i>100){
        i=0
        output.innerHTML=i
    };
    output.innerHTML=i
});