const boxs=document.querySelectorAll(".box")
const body=document.querySelector("body")
const button=document.querySelector("button")


boxs.forEach(function (e){
        console.log(e);
        e.addEventListener("click",function(nice){
                console.log(nice);
                console.log(nice.target)
                if(nice.target.id==="yellow"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="blue"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="purple"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="green"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="Coral"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="Violet"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="IndiGo"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="Teal"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }
                else if(nice.target.id==="red"){
                        body.style.backgroundColor=nice.target.id
                }


                      
        })
})
button.addEventListener("click",function(){
        setTimeout(function() {
                location.reload();
              },);
})


 

