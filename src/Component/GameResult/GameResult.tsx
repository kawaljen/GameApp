import React from 'react'

interface Props  {
    result: string;
    
};

const GameResult: React.FC<Props> = ({result}: Props):JSX.Element => {
  return (

    <div>
        <h3>test {result}</h3> 
    </div>
  )
}

export default GameResult