// Random integer function taken from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const RandomColorAnimation = function RandomColorAnimation()  {
  this.canvas = document.createElement('canvas');
  this.canvas.height = 600;
  this.canvas.width = 600;
 
  let ctx = this.canvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 599, 599);

  document.body.insertBefore(this.canvas, document.body.nextSibling);

  this.resetButton = document.createElement("button");
  this.resetButton.innerHTML = "Reset Canvas";
  // attach event listener to the button 
  this.resetButton.addEventListener('click', function resetButtonClickEventListener(e) {
    if (e.target && e.target.nodeName === 'BUTTON') {
      console.log("Reset Clicked");
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 599, 599);
    }
  });

  document.body.insertBefore(this.resetButton, document.body.nextSibling);


  window.requestAnimationFrame(function draw() { 
    let r = getRandomIntInclusive(0, 255);
    let g = getRandomIntInclusive(0, 255);
    let b = getRandomIntInclusive(0, 255);
    let x = getRandomIntInclusive(0, 599);
    let y = getRandomIntInclusive(0, 599);
    let a = 255; 

    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( x, y, 1, 1 );
    
    window.requestAnimationFrame(draw);
});
} //RandomColorAnimation


// Allow inclusion in browers and node
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    RandomColorAnimation,
  };
} else {
  window.RandomColorAnimation = RandomColorAnimation;

  window.onload = function onload() {
    window.rca = new RandomColorAnimation();
  };
} //else