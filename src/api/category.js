import { instance } from "."


export const categoryAdd=async(formData)=>{
    const data = await instance.post("category/create",formData)
    return data
}
export const categoryAll=async()=>{
    const data=await instance.get("category/all")
    return data
}
export const categoryId=async(id)=>{
    const data=await instance.get(`category/all/${id}`)
    return data
}
export const categoryUpdate=async(cursive,description,id,lang,name)=>{
    const data=await instance.patch(`category/update`,{cursive,description,id,lang,name})
    return data
}
export const deleteCategorybyId=async(id)=>{
    const data =await instance.delete(`category/delete/${id}`)
    return data
}