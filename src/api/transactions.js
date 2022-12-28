import { instance } from "."


export const TransactionAll=async(delivery,endTime,inBasket,nameORPhoneOREmail,notInBasket,notPaid,startTime,status,transactionID)=>{
    const data =instance.post("transaction/all",{delivery,endTime,inBasket,nameORPhoneOREmail,notInBasket,notPaid,startTime,status,transactionID})
    return data
}