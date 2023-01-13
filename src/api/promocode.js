import { instance } from "."


export const promocodeAll=async()=>{
    const data =await instance.get("promocode/all")
    return data
}
export const promocodeCreate=async(code,count,discount,type)=>{
    const data =await instance.post("promocode/create",{code,count,discount,type})
    return data
}
export const promocodeUpdate=async(code,count,discount,type)=>{
    const data =await instance.patch("promocode/update",{code,count,discount,type})
    return data
}
