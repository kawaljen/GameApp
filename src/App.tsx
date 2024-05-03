
import './App.css';
import React, { ChangeEvent, useEffect, useState } from 'react'
import GameList from './Component/GameList/GameList';
import Play from './Component/Play/Play';
import { playAPI } from './Services/PlayApi';
import GameResult from './Component/GameResult/GameResult';
import { gameMenuAPI } from './Services/GameMenuService';
import { gameItem } from './game';
import ErrorBlock from './Component/ErrorBlock/ErrorBlock';



function App() {
  const [play, setPlay] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [gameList, setGameList] = useState<gameItem[]>([]);
  const [serverError, setServerError] = useState<string|null>(null);

  const onClick = async (e:React.MouseEvent<HTMLButtonElement>)=>{
      const result = await playAPI(play)
      if (typeof result === "string"){
        setServerError(result)
      }
      else if (Array.isArray(result.data)){
        setResult(result.data.message);
      }
      
  }
  const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setPlay(e.target.value);
  }
  useEffect(()=>{
    (async() =>{
        const result =  await gameMenuAPI()
        if (typeof result === "string"){
          setServerError(result)
        }
        else if (Array.isArray(result.data)){
          setGameList(result.data);
        }
    })()
  },[])


  return (
    <div className="App">
      {serverError &&  <ErrorBlock serverError={serverError}/>}
      <Play onClick={onClick} play={play} handleChange={handleChange}/>
      <GameResult result={result}/>
      <GameList gameList={gameList}/>

    </div>
  );
}

export default App;
