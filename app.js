 let gameSeq=[];
 let userSeq=[];
 let btns=["yellow","red","green","purple"];

 let started = false;
 let level =0;

 let h2 = document.querySelector("h2");

 document.addEventListener("keypress",function() {
   if (started == false){
      console.log("game started"); 
      started = true;
      levelUp(); 
   }
 }); 

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash"); 
   } , 250) ;
} 

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
     btn.classList.remove("userflash"); 
  } , 250) ;
} 

 function levelUp(){
  userSeq= [] ; 
   level++;
   h2.innerText = `level ${level}`

   //random btn choose 
   let randomindex = Math.floor(Math.random() *3);
   let rancolor = btns[randomindex];
   let ranbtn = document.querySelector(`.${rancolor}`);
   gameSeq.push(rancolor);
   console.log(gameSeq);
   gameFlash(ranbtn);
 }

 function checkAns(idx){
 //  console.log("curr level :",level);
 if(userSeq[idx] == gameSeq[idx]){
  if(userSeq.length == gameSeq.length){
   //  levelUp();
   setTimeout (levelUp ,1000);
  }
   console.log("same value");
 }else{
  h2.innerHTML=`Game over! Your Score is <b> ${level}</b>  Press any key to restart`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="#8787e8";

  },150);
  reset();
 }
 }

 function btnPress(){
  //console.log(this);
   let btn  = this;
   userFlash(btn);
   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
   //console.log(userColor);
    }

    let allbtns = document.querySelectorAll(".btn ");
    for(btn of allbtns){
      btn.addEventListener("click", btnPress);
    }

    function reset(){
      started = false;
      gameSeq=[];
      userSeq=[];
      level=0;
    }

  
 