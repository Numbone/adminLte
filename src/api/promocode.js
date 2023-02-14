import { instance } from "."


export const promocodeAll=async()=>{
    const data =await instance.get("promocode/all")
    return data
}
export const promocodeCreate=async(code,count,discount,type,issue_date)=>{
    const data =await instance.post("promocode/create",{code,count,discount,type,issue_date})
    return data
}
export const promocodeUpdate=async(code,count,id,discount,type,issue_date)=>{
    const data =await instance.patch("promocode/update",{code,count,id,discount,type,issue_date})
    return data
}
export const promocodeFilter=async(promocode)=>{
    const data =await instance.post("promocode/code",{promocode})
    return data
}