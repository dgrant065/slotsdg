/*----- constants -----*/
const SLOTS_LOOKUP = {
 
}
  
  /*----- state variables -----*/
  let winner, score, 
  
  /*----- cached elements  -----*/
  const boxes = window.querySelector('.boxes');
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

  