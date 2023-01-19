import { instance } from "."


export const AllProduct = async () => {
    const data =  await instance.get('product/all')
    return data
}
export const productCreate = async (form) => {
    const data =  await instance.post('product/create',  form )
    return data
}
export const productId=async(id)=>{
    const data = await instance.get(`/product/all/${id}`)
    return data
}
export const productUpdate=async(actionEn,actionRu,article,categoryEn,categoryRu,compoundEn,compoundRu,contraindicationsEn,contraindicationsRu,count,
    descriptionEn,descriptionRu,id,modeOfAppEn,modeOfAppRus,nameEn,nameRu,price,weight)=>{
    const data = await instance.patch("/product/update",{actionEn,actionRu,article,categoryEn,categoryRu,compoundEn,compoundRu,contraindicationsEn,contraindicationsRu,count,
        descriptionEn,descriptionRu,id,modeOfAppEn,modeOfAppRus,nameEn,nameRu,price,weight})
    return data
}

export const deleteProductId=async(id)=>{
    const data =await instance.delete(`/product/delete/${id}`)
    return data
}
export const setPhotsProductEn=async(formData)=>{
    const data =await instance.post("/product/photos/create_en",formData)
    return data 
}
export const setPhotosProductRu=async(formData)=>{
    const data =await instance.post("/product/photos/create_ru",formData)
    return data 
}
export const deletePhotosEn=async(id)=>{
    const data =await instance.delete(`/product/photos/delete_en?url=${id}`)
    return data 
}
export const deletePhotosRu=async(id)=>{
    const data =await instance.delete(`/product/photos/delete_ru?url=${id}`)
    return data 
}