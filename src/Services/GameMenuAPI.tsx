import axios from "axios"


const api ="http://localhost:5190/api/v0/mastermind/menu" 

export const gameMenuAPI = async ()=>{
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