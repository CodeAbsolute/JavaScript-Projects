function getRandomNumber(){
    return Math.floor(Math.random()*6+1);
}


var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player 1 Won";
}
else if(randomNumber2 === randomNumber1){
    document.querySelector('h1').innerHTML="Draw";
}
else{
    document.querySelector('h1').innerHTML="Player 2 Won";
}
document.querySelectorAll('img')[0].setAttribute("src","images/dice"+ randomNumber1+".png");
document.querySelectorAll('img')[1].setAttribute('src','images/dice'+ randomNumber2+".png");

