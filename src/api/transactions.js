import { instance } from "."


export const TransactionAll=async(delivery,endTime,inBasket,nameORPhoneOREmail,notInBasket,notPaid,startTime,status,transactionID,notShipment)=>{
    const data =instance.post("transaction/all",{delivery,endTime,inBasket,nameORPhoneOREmail,notInBasket,notPaid,startTime,status,transactionID,notShipment})
    return data
}
export const TransactionCopy=async(id)=>{
    const data =instance.post('transaction/copy',{id})
    return data
}
export const transactionComment=async(transaction_id,text)=>{
    const data =instance.post("transaction/comment",{text,transaction_id})
    return data
}
export const transactionChangeStatus=async(text,transaction_id)=>{
    const data =instance.post("transaction/status/add",{text,transaction_id})
}
export const transactionChangeShipment=async(transactions_id)=>{
    const data =instance.post("transaction/shipment",{transactions_id})
}