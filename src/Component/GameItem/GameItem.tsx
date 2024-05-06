import React from 'react'
import "./GameItem.css"
import { gameItem } from '../../game';

interface Props  {
    gameList : gameItem;
    key:string;
}

const GameItem: React.FC<Props> = ({gameList, key }: Props) : JSX.Element=> {


  return (
    <div className="game" id={key}>
        <div className="info">
            <h3>Card- <a href={gameList.name}>{gameList.name}</a></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </div>
  )
}

export default GameItem