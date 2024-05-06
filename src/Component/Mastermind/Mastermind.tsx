import React, { ChangeEvent, useState, MouseEvent } from 'react'

interface Props  {
    play: string|undefined;
    handleChange:(e:ChangeEvent<HTMLInputElement>) =>void;
    onClick:(e:React.MouseEvent<HTMLButtonElement>) =>void;
    
};

const Mastermind: React.FC<Props> = ({handleChange, onClick, play}: Props) :JSX.Element=> {

    return (
        <div>
            <input value={play} onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=> onClick(e)}>Try</button>
        </div>
    )
}

export default Mastermind