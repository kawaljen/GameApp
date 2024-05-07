import React, { ChangeEvent, useEffect, useState } from 'react'
import {  GameMenuItem, GameSettings } from '../../game';
import GameSettingsList from '../GameSettingsList/GameSettingsList';
import { gameSettingsAPI, updateGameSettingsAPI } from '../../Services/GameSettingsAPI';

interface Props  {
    gameMenu: GameMenuItem,
    id:string
  };
const GameMenu: React.FC<Props> = ({gameMenu, id}: Props):JSX.Element => {

    const [gameSettings, setGameSettings] = useState< GameSettings>();
    const [serverError, setServerError] = useState<string|null>(null);

    useEffect(()=>{
        const getResult =  async() =>{
           // if(gameMenu.hasSettings){

             const result = await gameSettingsAPI()
             console.log(result)
             if (typeof result === "string"){
               setServerError(result)
             }
             else if (typeof result == 'object'){
                setGameSettings(result.data);
             }
             
          // }
        }
        getResult();
     },[])
   
     const onClick = async (e:React.MouseEvent<HTMLButtonElement>)=>{
        if(gameSettings !== undefined){
            const result  = await updateGameSettingsAPI(gameSettings)
            console.log(typeof result)
            if (typeof result === "string"){
              setServerError(result)
            }
            else if (typeof result == 'object'){ 
               setGameSettings(result.data);
             }
        }
         
     }
     const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        //e.target.value
        //setGameSettings({});
     }




  return (
    <>
    <div id={id}>{gameMenu.name}</div>
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
    {gameMenu.hasSettings && gameSettings !== undefined ?(

        <GameSettingsList gameSettings={gameSettings}  onClick={onClick} handleChange={handleChange}/>
    ):(
        <>Test</>//TODO 
    )

    }
</>
    )

}

export default GameMenu