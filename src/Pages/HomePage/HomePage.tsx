import React, { useEffect, useState } from 'react'
import { gameMenuAPI } from '../../Services/GameMenuService';
import { gameItem } from '../../game';
import GameList from '../../Component/GameList/GameList';

interface Props  {}

const HomePage = (props: Props) => {
  const [gameList, setGameList] = useState<gameItem[]>([]);
  const [serverError, setServerError] = useState<string|null>(null);
  useEffect(()=>{
     const getResult =  async() =>{
          const result = await gameMenuAPI()
          console.log(result)
          if (typeof result === "string"){
            setServerError(result)
          }
          else if (Array.isArray(result.data)){
            setGameList(result.data);
          }
        }
        getResult();
  },[])

  return (
  <>
    { gameList.length >0 ?(
       <div> <GameList gameList={gameList}/></div>
    ) : (
      <div>No games available</div>
    )

  }
  </>
  );
  
}

export default HomePage