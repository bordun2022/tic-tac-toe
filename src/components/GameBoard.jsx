import React from "react";


const GameBoard = ({board, onSelect}) => {

  return (
    <ol id="game-board" >
      {board.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((col, index2) => (
              <li key={index2}>
                <button onClick={() => onSelect(index, index2)} disabled={col !== null ? true : false}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  ); // для key в нас немає значення title чи id як ми звикли, тому використали вбудований index
};

export default GameBoard;
