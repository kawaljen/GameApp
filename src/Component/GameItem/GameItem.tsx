import React from 'react'
import "./GameItem.css"

interface Props  {
    name : string;
    hasSettings : boolean;
    hasModes : boolean;
}

const GameItem: React.FC<Props> = ({name, hasSettings,hasModes} : Props) : JSX.Element=> {
  return (
    <div className="game">
        <div className="info">
            <h3>Card {name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam accusantium est veritatis alias atque inventore saepe, deleniti debitis excepturi laudantium eligendi sed voluptatibus velit natus molestiae aliquid beatae eveniet?</p>
        </div>
    </div>
  )
}

export default GameItem