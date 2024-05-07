import React from 'react'
import {  GameMenuItem } from '../../game';

interface Props  {
    gameMenu: GameMenuItem,
    id:string
  };
const GameMenu: React.FC<Props> = ({gameMenu, id}: Props):JSX.Element => {
  return (
    <>
    <div id={id}>{gameMenu.name}</div>
    {gameMenu.hasSettings ?(
        <a href="">Settings</a>
    ):(
        <></>//TODO 
    )

    }
    { gameMenu.gameStarted?(
        <a href="">Resume Game</a>
    ):(
        <></>
    )

    }
    { gameMenu.hasModes ? (
        <div>
            <h3>Game Modes</h3>
            <a href="">Start Challenger game</a>
            <a href="">Start Defense game</a>
        </div>
    ):(
        <a href="">Start Challenger game</a>
    )}

</>
    )

}

export default GameMenu