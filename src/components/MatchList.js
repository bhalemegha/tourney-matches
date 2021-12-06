import React from "react";
import Match from "./Match";

function MatchList(matchData) {
  const matchArray = [];
  for (const match in matchData) {
    matchArray.push(<Match key={matchData[match].matchNumber} {...matchData[match]}/>);
  }
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {matchArray}
      {/* { <Match {...matchData[5]}/> } */}
    </section>
  );
}

export default MatchList;