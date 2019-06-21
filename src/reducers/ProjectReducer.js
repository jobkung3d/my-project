
export default function (state = [], action){
    switch(action.type){
        case 'product_add' :
            return action.payload;
        default:
            return state;
    }
}