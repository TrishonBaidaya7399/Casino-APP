import React from "react";

function GameDetailsPage({ id }: { id: string }) {
  console.log({ GameDetailsId: id });
  return <div>Game Details: {id}</div>;
}

export default GameDetailsPage;
