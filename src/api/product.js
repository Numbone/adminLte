import { instance } from "."


export const AllProduct = async () => {
    const data = instance.get('product/all')
    return data
}
export const productCreate = async (form) => {
    const data = instance.post('product/create',  form )
    return data
}