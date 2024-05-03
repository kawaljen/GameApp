import React from 'react'

interface Props  {
    serverError: string;
    
};


const ErrorBlock: React.FC<Props> = ({serverError}: Props):JSX.Element => {
  return (
    <div><p>{serverError}</p></div>
  )
}

export default ErrorBlock