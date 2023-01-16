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
export const categoryUpdate=async(cursive,description_en,description_ru,id,name_en,name_ru)=>{
    const data=await instance.patch(`category/update`,{cursive,description_en,description_ru,id,name_en,name_ru})
    return data
}
export const deleteCategorybyId=async(id)=>{
    const data =await instance.delete(`category/delete/${id}`)
    return data
}
export const setPhotosEn=async(formData)=>{
    const data =await instance.post("/category/photos_en",formData)
    return data 
}
export const setPhotosRu=async(formData)=>{
    const data =await instance.post("/category/photos_ru",formData)
    return data 
}