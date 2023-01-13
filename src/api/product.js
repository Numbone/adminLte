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
export const productUpdate=async(action,category,compound,contraindications,count,description,id,modeOfApp,name,price,weight)=>{
    const data = await instance.patch("/product/update",{action,category,compound,contraindications,count,description,id,modeOfApp,name,price,weight})
    return data
}

export const deleteProductId=async(id)=>{
    const data =await instance.delete("/product/delete",{id})
}