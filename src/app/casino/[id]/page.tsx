import React from "react";

function CasinoDetailsPage({ id }: { id: string }) {
  console.log({ GameDetailsId: id });
  return <div>Casino Details: {id}</div>;
}

export default CasinoDetailsPage;
