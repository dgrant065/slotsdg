/*----- constants -----*/
const items = [
    '🍇',
    '🍉',
    '🍙',
    '🍒',
    '🍍'
];
const reelSpeed = 100;

  
  /*----- state variables -----*/
  let winner, score
  let spinning = false;
  /*----- cached elements  -----*/
  const spinBtn = document.getElementById('spin-button')
 
  
  /*----- event listeners -----*/
document.querySelector('.info').textContent = items.join(' ');
document.getElementById('spin-button').addEventListener('click', () => {
    if (!spinning) {
        spinning = true;
        spinBtn.disabled = true;
        startSpinning();
        
    }
});


  /*----- functions -----*/

  init();

  function init() {
    // winner = null;
    // render();

  }

  function getRandomItem() {
    return items[Math.floor(Math.random() * items.length)];
  }

  function startSpinning() {
    const reels = document.querySelectorAll('.reel');
    const spinDuration = 2000;
    const startTime = Date.now();
    const animation = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= spinDuration) {
        clearInterval(animation);
        spinning = false;
        spinBtn.disabled = false;
        checkWin();
      } else {
        reels.forEach((reel) => {
          reel.textContent = getRandomItem();
        });
      }
    }, reelSpeed);
  }
    




//   function handleSpin(evt) {
//     console.log(evt.target.tagName)
//   }

  function render() {

  }

  function spin() {



  }
  