import React from "react";
import Player from "./Player";

function PlayerList(playerData) {
  const players = [];
  for (const player in playerData) {
    players.push(<Player key={playerData[player].matchNumber} {...playerData[player]}/>);
  }
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
      {/* {props.map((player) => (<Player key={player.gamerTag} {...player} />))} */}
    </section>
  );
}

export default PlayerList;