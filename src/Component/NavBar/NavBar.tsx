import React from 'react'

interface Props {}

const NavBar = (props: Props) => {
  return (
    <div>
        <a href="/play">Play</a>
        <a href="/mastermind">Mastermind</a>
    </div>
  )
}

export default NavBar