import { ADD_TO_Cart } from "../Constent"
export const addToCart=(data)=>{
    console.warn("action",data)
    return{
        type:'ADD_TO_Cart',
        data:data
    }
}

export const removeToCart=(data)=>{
    return{
        type:'REMOVE_TO_Cart',
        data:data
    }
}

