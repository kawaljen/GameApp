import React, { useEffect, useState } from 'react'
import {  GameMenuItem } from '../../game';
import { gameMenuAPI } from '../../Services/GameMenuAPI';
import {v4 as uuidv4} from "uuid"
import GameMenu from '../../Component/GameMenu/GameMenu';

type Props = {}

const GamePage = (props: Props) => {
    const [gameMenu, setGameMenu] = useState< GameMenuItem>();
    const [serverError, setServerError] = useState<string|null>(null);
    useEffect(()=>{
       const getResult =  async() =>{
            const result = await gameMenuAPI()
            console.log(result)
            if (typeof result === "string"){
              setServerError(result)
            }
            else if (typeof result == 'object'){
                setGameMenu(result.data);
            }
          }
          getResult();
    },[])
  
    return (
    <>
    { gameMenu != null ? (
      <GameMenu gameMenu={gameMenu} id={uuidv4()}/>
    ):(
        <div>No menu</div>
    )}
    </>
    );
}

export default GamePage