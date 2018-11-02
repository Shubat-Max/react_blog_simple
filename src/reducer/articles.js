import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, LOAD_ARTICLE_COMMENTS } from '../configs/constants'
import { arrToMap } from "../helpers";
import { OrderedMap, Record } from 'immutable';



const articleModel = Record({
    id: undefined,
    title: '',
    text: undefined,
    comments: [],
    loading: false,
    commentsLoading: false,
    commentsLoaded: false
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();



// export default ( articles = arrToMap(normalizedArticles), action) => {
export default ( articles = defaultState, action) => {
    const { type, payload, response, randomId } = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles
                .deleteIn(['entities', payload.id]);

        case ADD_COMMENT:
            return articles
                .updateIn(
                    ['entities', payload.articleId, 'comments'],
                    comments => comments.concat(randomId)
                );

        case LOAD_ALL_ARTICLES + START:
            return articles
                .set('loading', true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('entities', arrToMap(response, articleModel))
                .set('loading', false)
                .set('loaded', true);

        case LOAD_ARTICLE + START:
            return articles
                .setIn(['entities', payload.id, 'loading'], true);

        case LOAD_ARTICLE + SUCCESS:
            return articles
                .setIn(['entities', payload.id], new articleModel(payload.response));

        case LOAD_ARTICLE_COMMENTS + START:
            return articles
                .setIn(['entities', payload.articleId, 'commentsLoading'], true);

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return articles
                .setIn(['entities', payload.articleId, 'commentsLoading'], false)
                .setIn(['entities', payload.articleId, 'commentsLoaded'], true);

        default:
            return articles;
    }
}

// export default ( articles = normalizedArticles, action) => {
//     const {type, payload } = action;
//
//     switch (type) {
//         case DELETE_ARTICLE:
//             return articles.filter(article => article.id !== payload.id);
//         default:
//             return articles;
//     }
// }