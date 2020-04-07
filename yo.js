
var num1=Math.random();
num1=num1*6;
num1=Math.floor(num1)+1;
var num2=Math.random();
num2=num2*6;
num2=Math.floor(num2)+1;




if (num1===1)
{
  document.querySelector(".p1img").setAttribute("src","dice1.png");

}
else if (num1===2)
{
  document.querySelector(".p1img").setAttribute("src","dice2.png");

}
else if (num1===3)
{
  document.querySelector(".p1img").setAttribute("src","dice3.png");

}
else if (num1===4)
{
  document.querySelector(".p1img").setAttribute("src","dice4.png");

}
else if (num1===5)
{
  document.querySelector(".p1img").setAttribute("src","dice5.png");

}
else if (num1===6)
{
  document.querySelector(".p1img").setAttribute("src","dice6.png");

}
/*dice 2*/
if (num2===1)
{
  document.querySelector(".p2img").setAttribute("src","dice1.png");

}
else if (num2===2)
{
  document.querySelector(".p2img").setAttribute("src","dice2.png");

}
else if (num2===3)
{
  document.querySelector(".p2img").setAttribute("src","dice3.png");

}
else if (num2===4)
{
  document.querySelector(".p2img").setAttribute("src","dice4.png");

}
else if (num2===5)
{
  document.querySelector(".p2img").setAttribute("src","dice5.png");

}
else if (num2===6)
{
  document.querySelector(".p2img").setAttribute("src","dice6.png");

}
/*exceptions*/
if (num1===1 && num2===1)
{
  document.querySelector(".p1img").setAttribute("src","dice1.png");
  document.querySelector(".p2img").setAttribute("src","dice1.png");

}

else  if (num1===2 && num2===2)
{
    document.querySelector(".p1img").setAttribute("src","dice2.png");
    document.querySelector(".p2img").setAttribute("src","dice2.png");


}
else  if (num1===3 && num2===3)
{
    document.querySelector(".p1img").setAttribute("src","dice3.png");
    document.querySelector(".p2img").setAttribute("src","dice3.png");


}
else  if (num1===4 && num2===4)
{
    document.querySelector(".p1img").setAttribute("src","dice4.png");
    document.querySelector(".p2img").setAttribute("src","dice4.png");

}
else  if (num1===5 && num2===5)
{
    document.querySelector(".p1img").setAttribute("src","dice5.png");
    document.querySelector(".p2img").setAttribute("src","dice5.png");


}
else  if (num1===6 && num2===6)
{
    document.querySelector(".p1img").setAttribute("src","dice6.png");
    document.querySelector(".p2img").setAttribute("src","dice6.png");


}





/*results*/
if (num1>num2)
{
  document.querySelector(" body h1").textContent="player1 wins";
}
else if(num1<num2) {
  document.querySelector("body h1").textContent="player2 wins";
}
else if (num1===num2)
{
    document.querySelector("body h1").textContent="Game drawn";
}
