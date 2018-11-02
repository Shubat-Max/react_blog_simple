import { START, SUCCESS, FAILED } from "../configs/constants";

export default store => next => action => {
    const {callAPI, type, ...rest } = action;
    if (!callAPI) return next(action);

    next({
        type: type + START,
        ...rest
    });

    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({
            type: type + SUCCESS,
            ...rest,
            response
        }))
        .catch(error => next({
            type: type + FAILED,
            ...rest,
            error
        }));
}