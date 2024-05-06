import React, { ChangeEvent, useState } from 'react'
import GameResult from '../../Component/GameResult/GameResult';
import { MastermindPlayAPI } from '../../Services/MastermindPlayApi';
import Mastermind from '../../Component/Mastermind/Mastermind';

type Props = {}

const MastermindPage = (props: Props) => {
    const [play, setPlay] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [serverError, setServerError] = useState<string|null>(null);
  
    const onClick = async (e:React.MouseEvent<HTMLButtonElement>)=>{
        const result  = await MastermindPlayAPI(play)
        console.log(typeof result)
        if (typeof result === "string"){
          setServerError(result)
        }
        else if (typeof result == 'object'){ 
          setResult(result.data.message);
         }
        
    }
    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
      setPlay(e.target.value);
    }
  return (
    <div>
       <Mastermind onClick={onClick} play={play} handleChange={handleChange}/>
       <GameResult result={result}/>
    </div>
  )
}

export default MastermindPage