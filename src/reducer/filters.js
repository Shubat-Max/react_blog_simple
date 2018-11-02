import { CHANGE_SELECTION, CHANGE_DATE_RANGE, DELETE_ARTICLE } from '../configs/constants';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
};

export default ( filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type){
        case CHANGE_DATE_RANGE:
            return { ...filters, dateRange: payload.dateRange };

        case CHANGE_SELECTION:
            return { ...filters, selected: payload.selected };

        case DELETE_ARTICLE:
            return { ...filters, selected: filters.selected.filter(id => id !== payload.id) };

        default:
            return filters;
    }
}