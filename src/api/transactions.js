import { instance } from "."


export const TransactionAll=async(delivery,endTime,inBasket,nameORPhoneOREmail,notInBasket,notPaid,startTime,status,transactionID)=>{
    const data =instance.post("transaction/all",{delivery,endTime,inBasket,nameORPhoneOREmail,notInBasket,notPaid,startTime,status,transactionID})
    return data
}
export const TransactionCopy=async(id)=>{
    const data =instance.post('transaction/copy',{id})
    return data
}