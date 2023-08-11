import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9c77e98fa2114446a4b504c930a8360b'
    }
})