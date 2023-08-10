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
  const spinBtn = document.querySelector('spin-button')
 
  
  /*----- event listeners -----*/
document.querySelector('.info').textContent = items.join(' ');
document.querySelector('spin-button').addEventListener('click', () => {
    if (!spinning) {
        spinning = true;
        spinBtn.disabled = true;
        startSpinning();
        
    }
});


  /*----- functions -----*/

  init();

  function init() {
    winner = null;
    render();

  }

  function startSpinning() {
    
  }

  function getRandomItem() {
    return items[Math.floor(Math.random() * items.length)];
  }

  function handleSpin(evt) {
    console.log(evt.target.tagName)
  }

  function render() {

  }

  function spin() {



  }
  