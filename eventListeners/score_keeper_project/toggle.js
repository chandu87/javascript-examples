// document.querySelector("#player1").textContent="3";
// document.querySelector("#player2").textContent="4";
var scores= [0,0];
var playCount=5;
var gameOver = false;

var btnPlayer1= document.querySelector("#btn-player1");
var btnPlayer2= document.querySelector("#btn-player2");
var btnReset= document.querySelector("#btn-reset");
var playCountInput = document.querySelector("#playCount");

btnPlayer1.addEventListener('click',function(){
    if(!gameOver){
        scores[0]++;
        if(scores[0] == playCount){
            document.querySelector("#player1").style.color = "green" ;
            gameOver = true;
        }
        document.querySelector("#player1").textContent = scores[0] ;
    }

});
btnPlayer2.addEventListener('click',function(){
    if(!gameOver){
        scores[1]++;
        if(scores[1] == playCount){
            document.querySelector("#player2").style.color = "green" ;
            gameOver = true;
        }
        document.querySelector("#player2").textContent = scores[1] ;
    }

});
btnReset.addEventListener('click',function(){
    scores = [0,0];
    playCount = 5;
    gameOver = false;
    document.querySelector("#player1").textContent = 0;
    document.querySelector("#player2").textContent = 0;
    document.querySelector("#player1").style.color = "black" ;
    document.querySelector("#player2").style.color = "black" ;
});
playCountInput.addEventListener('input',function(){
    playCount = playCountInput.innerHTML;
    console.log(playCount);
});
