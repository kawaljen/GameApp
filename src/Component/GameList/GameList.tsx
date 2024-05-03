import React from 'react'
import GameItem from '../GameItem/GameItem'
import { gameItem } from '../../game';
import {v4 as uuidv4} from "uuid"

interface Props  {
  gameList: gameItem[],
};


const GameList: React.FC<Props> = ({gameList}: Props):JSX.Element => {
  
  return <>

      { gameList.length>0? (
        gameList.map((item )=>{
          return <GameItem key={uuidv4()} gameList={item}/>
        })
      ):(
        <p>No games available</p>

      )}

      
  </>;
}

export default GameList