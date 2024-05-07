import axios from "axios"
import {  GameSettings } from '../game';

const api ="http://localhost:5190/api/v0/mastermind/settings/" 

export const gameSettingsAPI = async ()=>{
    try{
        const data = await axios.get(api );
        return data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            console.log("error message " , error.message);
            return error.message;
        }
        else{
            console.log("inexpected error ", error)
            return "an unexpected error has occured";
        }
    }

}

export const updateGameSettingsAPI = async (GameSettings: GameSettings)=>{
    try{
        const data = await axios.post<GameSettings>(api,{
           nbCases:  GameSettings.nbCases,
           nbGuesses:  GameSettings.nbGuesses
        } );
        return data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            console.log("error message " , error.message);
            return error.message;
        }
        else{
            console.log("inexpected error ", error)
            return "an unexpected error has occured";
        }
    }

}