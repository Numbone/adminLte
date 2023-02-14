import { instance } from "."


export const invoiceAll=async()=>{
    const {data}=await instance.get("invoice/all")
    return data
}
export const invoiceComment=async(invoice_id,comment_text)=>{
    const data =instance.post("invoice/comment",{invoice_id,comment_text})
    return data
}
export const invoiceStatus=async(invoice_id,status_text)=>{
    const data =instance.post("invoice/status",{invoice_id,status_text})
    return data
}
export const invoiceAllId=async(id)=>{
    const data =await instance.get(`invoice/all/${id}`)
    return data
}
export const invoiceDelivery=async(delivery)=>{
    const data =await instance.get(`/invoice/delivery?delivery=${delivery}`)
    return data
}