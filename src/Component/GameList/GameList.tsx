import React from 'react'
import GameItem from '../GameItem/GameItem'

type Props = {}

const GameList: React.FC<Props> = (props: Props) => {
  return (
    <div>
        <GameItem name ="mastermind" hasSettings hasModes/>
        <GameItem name ="jeu plus moins" hasSettings hasModes/>

    </div>
  )
}

export default GameList