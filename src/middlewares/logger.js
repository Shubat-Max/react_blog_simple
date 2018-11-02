export default store => next => action => {
    console.log('---', 'dispatching', action);
    next(action);

    // if(!action.generateId) return next(action);
    // next({
    //     ...action,
    //     randomId: (Date.now() + Math.random()).toString()
    // });
}