export interface gameItem{
    id:number,
    name:string,

  }
  export interface GameMenuItem{
    name:string,
    hasSettings:boolean,
    hasModes:boolean,
    gameStarted:boolean,

  }

  export interface GameSettings{
    nbGuesses : number,
    nbCases :number,
    nbColors :number,

  }