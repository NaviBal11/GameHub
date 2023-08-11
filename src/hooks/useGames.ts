import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Genre } from "../hooks/useGenres";
export interface Platform{
  id:number;
  name:string;
  slug:string;
}


export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
  
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
const useGames=(selectedGenre:Genre|null) =>{
    const [games, setGames] = useState<Game[]>([]);
    
  
    useEffect(() => {
        const controller=new AbortController();
      apiClients
        .get<FetchGamesResponse>("/games",{params:{genres:selectedGenre?.id}})
        
        .then((res) => {setGames(res.data.results);

    })
        
        .catch((err) => {
            
            console.log(err.message);
       
        });
        return() => controller.abort();
    },[selectedGenre?.id]);
    return{games};
}

export default useGames;