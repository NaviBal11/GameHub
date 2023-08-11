import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { AxiosRequestConfig } from "axios";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}
interface FetchGenresResponse{
    count:number;
    results:Genre[];
}
const useGenres=(requestConfig?:AxiosRequestConfig,deps?:any[]) =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    
  
    useEffect(() => {
        const controller=new AbortController();
      apiClients
        .get<FetchGenresResponse>("/genres",{signal:controller.signal,...requestConfig})
        .then((res) => setGenres(res.data.results))
        .catch((err) => {
            
            console.log(err.message);
       
        });
        return() => controller.abort();
    },deps?[...deps]:[]);
    return{genres};
}

export default useGenres;