'use strict';

/*const value=prompt('you should write between 1 end 20 number:');*/

 
let score=20, highScore=0;

const randomValue=Math.trunc(Math.random() * 20) + 1;

console.log(randomValue);

const startMessage=function(message){

document.querySelector('.message').textContent=message;
};
 

document.querySelector('.btn__check').addEventListener('click', function () {
    const guessValue = Number(document.querySelector('.third-guess').value);
    console.log(guessValue, typeof guessValue);

    if(!guessValue){
        startMessage('not number');
    }
    else if(guessValue === randomValue){
        startMessage('Correct');
        highScore++;
        document.querySelector('.number').textContent=randomValue;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='8rem';


        if (score > highScore){
            highScore= score;
        document.querySelector('.highscore').textContent=highScore;
            }
    }
    else if(guessValue !== randomValue){
        if(score>=1){
            startMessage(guessValue>randomValue? 'too high':'too low');
            score--;
            document.querySelector('.score').textContent=score;

        }
        else{
            startMessage('lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }

});
document.querySelector('.btn__box').addEventListener('click',function(){
    score=20;
   
    const randomValue=Math.trunc(Math.random() * 20) + 1;
    startMessage('start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.third-guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';



});

