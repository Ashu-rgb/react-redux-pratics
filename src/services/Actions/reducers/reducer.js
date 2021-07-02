import { ADD_TO_Cart } from "../Constent"
const intialState={
    cardData:[]
}
export default function cardItems(state= [],action){

    switch(action.type){
        case ADD_TO_CARD:
            //console.warn('reducer',action)
            return[
                ...state,
                {cardData:action.data}
            ]
            break;
            default:
                return state
    }

}