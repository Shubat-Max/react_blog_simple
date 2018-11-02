import { OrderedMap, Map } from 'immutable'

export function arrToMap(arr, RecordModel = Map) {
    return arr.reduce((acc, item) =>
            acc.set(item.id, new RecordModel(item))
        , new OrderedMap({}));
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray();
}