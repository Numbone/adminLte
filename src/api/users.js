import { instance } from "."

export const getUsers= async()=>{
    const data = await instance.get("user/all")
    return data
} 