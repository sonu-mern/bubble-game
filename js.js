var timer = 60;
var num = 0;
var ran = 0;
var newscore=0;
var newscore=0;
var tcount =0;
function start (){

    function makeBubble(){
        var clutter ="";
    
        for(var i = 1;i<=189;i++){
             ran = Math.floor(Math.random()*10);
            clutter += `<div class="bubble">${ran}</div>`;
        
        }
        document.querySelector(".pbottom").innerHTML= clutter;
    }
    makeBubble();
    
    function runtimer(){
     tcount=   setInterval(function (){
           if(timer > 0){
    
               timer--;
               document.querySelector("#time").textContent = timer;
           }
           else{
               clearInterval(tcount);
               document.querySelector(".pbottom").innerHTML=`<h1>Game Over</h1>`
               document.querySelector("#hit").textContent=0;
    
           }
    
       },1000);
    }
    runtimer();
    
    function hitcount(){
         num = Math.floor(Math.random()*10);
        document.querySelector("#hit").innerHTML=num;
    }
    hitcount();
    
    function nscore(){
       
        newscore += 10;
        document.querySelector("#score").textContent=newscore;
    }
  
    
    function countScore (){
      document.querySelector(".pbottom").addEventListener("click",function(detail){
            var clickedNum = Number(detail.target.textContent);
            const audioElement = document.getElementById("myAudio");
           
                // Check if the audio is currently paused or ended
                if (audioElement.paused || audioElement.ended) {
                    // Play the audio
                    audioElement.play();
                } else {
                    // If the audio is already playing, pause and rewind it to the beginning
                    audioElement.pause();
                    audioElement.currentTime = 0;
                }
            ;
          
            if(clickedNum===num){
               nscore();
               makeBubble();
               hitcount();
            }else{

            }
        })
    
    }
    countScore();
}

document.querySelector(".exit").addEventListener("click",function(){
    location.reload();

})





