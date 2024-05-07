import React, { ChangeEvent } from 'react'
import {  GameSettings } from '../../game';


interface Props  {
    gameSettings:GameSettings,
    handleChange:(e:ChangeEvent<HTMLInputElement>) =>void;
    onClick:(e:React.MouseEvent<HTMLButtonElement>) =>void;
}

const GameSettingsList : React.FC<Props> = ({gameSettings, handleChange, onClick}: Props):JSX.Element => {

//TODO faire ca dynamiquement
  return (
    <div>

      <div> 
            <p>Nombre de cases</p>
            <input value= {gameSettings.nbCases} onChange={(e)=>handleChange(e)}></input>
            
      </div>
      <div> 
            <p>Nombre de guess</p>
            <input value= {gameSettings.nbGuesses} onChange={(e)=>handleChange(e)}></input>
      </div>
      <button onClick={(e)=> onClick(e)}>Enregister les changements</button>

    </div>
  )
}

export default GameSettingsList