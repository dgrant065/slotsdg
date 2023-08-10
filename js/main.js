/*----- constants -----*/
const items = [
    '🍇',
    '🍉',
    '🍙',
    '🍒',
    '🍍'
]

  
  /*----- state variables -----*/
  let winner, score
  
  /*----- cached elements  -----*/
  const spinBtn = document.querySelector('#spinner')
  const resetBtn = document.querySelector('#reset')
  
  /*----- event listeners -----*/
document.querySelector('#spinner').addEventListener('click', spin)
document.querySelector('#reset').addEventListener('click', init)

  /*----- functions -----*/

  init();

  function init() {
    winner = null;
    render();

  }

  function handleSpin(evt) {
    console.log(evt.target.tagName)
  }

  function render() {

  }

  function spin() {
    
  }
  