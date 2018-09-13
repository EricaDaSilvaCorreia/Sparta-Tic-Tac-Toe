document.addEventListener('DOMContentLoaded', () => {
  // Your code here

    //Object start
    const tic = {};

    //Object Properties

    tic.body = document.getElementsByTagName('body');
    tic.playerTurn = document.getElementsByClassName('playerTurn');
    console.log(tic.playerTurn);

    tic.resetButton = document.getElementsByTagName('button');
    console.log(tic.resetButton);

    tic.tile = document.getElementsByTagName('td');
    console.log(tic.tile);

    tic.turn = true;

    // Object Methods

    tic.getTile = () => {
      for ( let i = 0; i < tic.tile.length; i++) {
        tic.tile[i].addEventListener('click', (e) => {
          switch (tic.turn) {
            case true:
            tic.tile[i].setAttribute('class', 'X');
            tic.tile[i].innerHTML = 'X';
            tic.playerTurn[0].innerHTML = "It O's turn";
            tic.turn = false;

            break;
            case false:
            tic.tile[i].setAttribute('class', 'O');
            tic.tile[i].innerHTML = 'O';
            tic.playerTurn[0].innerHTML = "It X's turn";
            tic.turn = true;

            break;
            default:

          }

        }); // end of tic tile addEventListener
      } // end of for loop
    } //end of get tile
    tic.getTile();

    tic.reseter = () => {
      tic.resetButton.addEventListener( 'click', (e) => {
        for (let j = 0; j < tic.tile.length; j++) {
          tic.tile[j].setAttribute('class', '');
          tic.tile[j].innerHTML = '';
        }//end of for loop
      }//end of reset button addEventListener
    };//end of reseter

    tic.resetButton.addEventListener('click', (e) => {
      tic.reseter();
    }); // end of rest button addEventListener


    //Win Statement


    tic.winInner1 = [tic.tile[0], tic.tile[1], tic.tile[2]];
    tic.winInner2 = [tic.tile[3], tic.tile[4], tic.tile[5]];
    tic.winInner3 = [tic.tile[6], tic.tile[7], tic.tile[8]];
    tic.winInner4 = [tic.tile[0], tic.tile[3], tic.tile[6]];
    tic.winInner5 = [tic.tile[1], tic.tile[4], tic.tile[7]];
    tic.winInner6 = [tic.tile[2], tic.tile[5], tic.tile[8]];
    tic.winInner7 = [tic.tile[0], tic.tile[4], tic.tile[8]];
    tic.winInner8 = [tic.tile[2], tic.tile[4], tic.tile[7]];

    tic.winArray = [tic.winInner1,tic.winInner2,tic.winInner3,tic.winInner4,tic.winInner5,tic.winInner6,tic.winInner7,tic.winInner8];


}); //end doc addEventListener
