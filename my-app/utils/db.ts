import {Clinet} from "postgress";
import "dotenv/load.ts";

export interface Data{
    id: string;
    name:string;
}

const client = new Client({
    user: Deno.env.get("DB_USER"),
    database: Deno.env.get("DB_NAME"),
    hostname: Deno.env.get("DB_HOST"),
    password: Deno.env.get("DB_PASSWORD"),
    port: Deno.env.get("DB_PORT"),
});


await client.connect();

export const SelectAll = async() =>{
    try {
        const result = await client.queryObject<Data>(
            "SELECT * FROM data"
        );
        return result.rows;
    }catch(ex){
        console.error(ex);
        return[];
    }
}

