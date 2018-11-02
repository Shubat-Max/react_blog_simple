import { createSelector } from 'reselect';
import {mapToArr} from "../helpers";



const filterGetter = storage => storage.filters;
const articlesGetter = storage => storage.articles.entities;
const commentsGetter = storage => storage.comments.entities;
const idGetter = (storage, props) => props.id;



// Optimized for better performance
export const filterArticlesSelector = createSelector(articlesGetter, filterGetter, (articles, filters) => {
    const { selected } = filters;

    return mapToArr(articles).filter(article => {
        return (!selected.length || selected.includes(article.id));
    })
});

// Bad performance - tries to update filters on any action that updates screen
// export function filterArticles({filters, articles}) {
//     const { selected } = filters;
//
//     return articles.filter(article => {
//         return (!selected.length || selected.includes(article.id));
//     })
// }



// MORE OPTIMIZATION TO THE GOD OF OPTIMIZATION! ( for better performance )
export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.get(id);
});

// Optimized for better performance
// export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
//     return comments.find(comment => comment.id === id)
// });

// Bad performance - tries to update comments on any action that updates screen
// export const commentSelector = createSelector(commentsGetter, idGetter, (comments, id) => {
//     return comments.find(comment => comment.id === id)
// });




