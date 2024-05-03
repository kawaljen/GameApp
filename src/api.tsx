import axios from "axios"

interface GameSearch{
    name: string;
    id : number;
}
interface SearchResponse{
    data : GameSearch[];
}


export const searchGame= async (query : string) =>{
    // try{
    //     const data = await axios.get<SearchResponse>(

    //     )
    //     return data;
    // }
    // catch (error){
    //     if(axios.isAxiosError(error)){
    //         console.log("error message", error.message)
    //         return error.message;
    //     }
    //     else {
    //         console.log("unexpected error: ", error)
    //         return "an expected error";
    //     }

    // }

}