import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../configs/constants'
import { arrToMap } from "../helpers";
import { Record, OrderedMap } from 'immutable';


const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();


export default ( comments = defaultState, action) => {
    const { type, payload, response, randomId } = action;

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return comments
                .update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));

        default:
            return comments;
    }
}


// const commentsMap = normalizedComments.reduce((acc, comment) => {
//     acc[comment.id] = comment;
//     return acc;
// }, {});
//
// export default ( comments = commentsMap, action) => {
//     const {type} = action;
//
//     switch (type) {
//         case DELETE_COMMENT:
//             return comments;
//         default:
//             return comments;
//     }
// }