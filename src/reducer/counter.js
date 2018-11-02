import { INCREMENT } from '../configs/constants'

export default (count = 0, action) => {
    const { type } = action;
    switch(type){
        case INCREMENT:
            return count + 1;
        default:
            return count;
    }
    // return count || 0;
}