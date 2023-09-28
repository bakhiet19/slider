const a = ["1.jpg" , "2.jpg" , '3.jpg' , '4.jpg'];
let imgs = document.getElementById('img');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
var count = 0;



right.addEventListener('click' , function(e){
    if(count == a.length - 1){
        count = 0
        imgs.setAttribute('src' , a[count])
    }
    else{
     ++ count;
     imgs.setAttribute('src' , a[count])
    }
 })


left.addEventListener('click' , function(e){
   if(count == 0){
    count = a.length -1
    imgs.setAttribute('src' , a[count])
   }
   else{
    -- count;
    imgs.setAttribute('src' , a[count])
   }
})




// setInterval(function(){
//    let sec_count = 0;
   
//         if(sec_count == 0){
//             imgs.setAttribute('src' , a[++sec_count])
//         }
//         else if(sec_count == 1){
//             imgs.setAttribute('src' , a[++sec_count]);
//              if(sec_count == 2){
//                 imgs.setAttribute('src' , a[++sec_count])
//             }
//         }
      
//         else{
//             imgs.setAttribute('src' , a[0])
//         }
   
// },3000)










let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');


one.addEventListener('click' , function(){
    imgs.setAttribute('src' , a[0])
})

two.addEventListener('click' , function(){
    imgs.setAttribute('src' , a[1])
})


three.addEventListener('click' , function(){
    imgs.setAttribute('src' , a[2])
})

four.addEventListener('click' , function(){
    imgs.setAttribute('src' , a[3])
})
