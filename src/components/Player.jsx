import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function clickHandler() {
    setIsEditing((edit) => !edit);

    if(isEditing) {
      onChangeName(symbol, playerName)
    }
    
  }

  function changeNameHandler(event) {
   event.preventDefault();
   setPlayerName(event.target.value)

  }

  return (
    <>
      <li className={isActive ? "active" : ''}>
        <span className="player">
          {!isEditing && <span className="player-name">{playerName}</span>}
          {isEditing && <input type="text" required value={playerName} onChange={changeNameHandler}></input>}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;
