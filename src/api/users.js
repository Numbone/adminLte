import { instance } from "."

export const getUsers= async()=>{
    const data = await instance.get("user/all")
    return data
} 
export const getUserId=async(id)=>{
    const data = await instance.get(`user/all/${id}`)
    return data
}
export const deleteUser=async(id)=>{
    const data =await instance.delete(`user/delete/${id}`)
    return data
}

export const updateUser=async(email,father_name,first_name,id,password,phone_number,second_name)=>{
    const data=await instance.patch("user/update",{email,father_name,first_name,id,password,phone_number,second_name})
    return data
}