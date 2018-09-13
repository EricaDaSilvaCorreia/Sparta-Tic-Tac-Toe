document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  const tic = {};
  // tic.table = document.getElementsByTagName ('table');
  // tic.row = document.getElementsByTagName ('tr');
  tic.body = document.getElementsByTagName('body');
  tic.playerTurn = document.getElementsByClassName('playerTurn');
  console.log(tic.playerTurn);

  console.log(tic.playerTurn);
  tic.Reset = document.getElementById('reset');
  tic.tile = document.getElementsByTagName('td');
  console.log(tic.tile);

  tic.turn = true;


  tic.getTile = () => {
    for ( let i = 0; i < tic.tile.length; i++) {
      tic.tile[i].addEventListener('click', (e) => {
        switch (tic.turn) {
          case true:
          tic.tile[i].setAttribute('class', 'X');
          tic.tile[i].innerHTML = 'X';
          tic.playerTurn[0].innerHTML = "It O's turn";
          // tic.playerOTurn();
          tic.turn = false;

          break;
          case false:
          tic.tile[i].setAttribute('class', 'O');
          tic.tile[i].innerHTML = 'O';
          tic.playerTurn[0].innerHTML = "It X's turn";
          // tic.playerOTurn();
          tic.turn = true;

          break;
          default:

        }
      });
    }
  }
  tic.getTile();


  

  tic.winInner1 = [tic.tile[0], tic.tile[1], tic.tile[2]];
  tic.winInner2 = [tic.tile[3], tic.tile[4], tic.tile[5]];
  tic.winInner3 = [tic.tile[6], tic.tile[7], tic.tile[8]];
  tic.winInner4 = [tic.tile[0], tic.tile[3], tic.tile[6]];
  tic.winInner5 = [tic.tile[1], tic.tile[4], tic.tile[7]];
  tic.winInner6 = [tic.tile[2], tic.tile[5], tic.tile[8]];
  tic.winInner7 = [tic.tile[0], tic.tile[4], tic.tile[8]];
  tic.winInner8 = [tic.tile[2], tic.tile[4], tic.tile[7]];

  tic.winArray = [tic.winInner1,tic.winInner2,tic.winInner3,tic.winInner4,tic.winInner5,tic.winInner6,tic.winInner7,tic.winInner8];
  //
  // tic.reset = document.getElementById('reset');
  // tic.reset.addEventListener( 'click' (e) => {
  //   if (tic.resetIt = true) {
  //
  //   }
  // })
  // tic.resetIt = true;

  // while (tic.Reset) {
  //
  // }

  //
  //
  //






  // tic.table = document.getElementsByTagName ('table');
  // tic.td = document.getElementsByTagName ('td');
  //
  // tic.tr = document.getElementsByTagName ('tr');
  //
  // tic.td.addEventListener ('click', (e) => {
  //   tic.td.setAttribute('class', 'X');
  //   tic.td.setAttribute('class', 'O');
  //   tic.td.setAttribute('class', 'clear');
  //
  // })
  // tic.tr.appendChild(tic.td);
  // tic.button = document.getElement('reset');
  // console.log(tic.button);
  //
  //
  // tic.button.addEventListener('click', (e) =>{
  //
  //   // e.target.
  //   }
  // );//closebutton



});
