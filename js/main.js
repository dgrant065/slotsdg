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
  const messageEls = document.getElementById('messages')
  
  /*----- event listeners -----*/
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
    messageEls.innerText = 'Please push button to play!!';

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
    setTimeout(checkWin, 2000)
  }

  function checkWin() {
    const reels = document.querySelectorAll('.reel');
    const symbols = Array.from(reels, (reel) => reel.textContent);
    if (symbols.every((symbol) => symbol === symbols[0])) {
        messageEls.innerText = 'JACKPOT!! You Won!!!';
      } else {
        messageEls.innerText = 'Aww shoot! Better Luck Next Time!!';
      }
    }
  
    





  