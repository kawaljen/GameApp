import React, { useState } from 'react'

type Props = {}

const Play: React.FC<Props> = (props: Props) :JSX.Element=> {
    const [play, setPlay] = useState<string>("");

    const onClick = (e:any)=>{
        setPlay(e.target.value);
        console.log(e)
    }

    return (
        <div>
            <input value={play} onChange={(e)=> onClick(e)}></input>


        </div>
    )
}

export default Play