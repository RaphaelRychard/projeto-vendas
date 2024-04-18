import React from "react";

interface TypeButtons {
  children: React.ReactNode
}

function buttons( {children}: TypeButtons ) {
  return (
    <>
      <h1>{children}</h1>
    </>
  )
}

export default buttons;