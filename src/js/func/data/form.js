import $ from 'jquery';
import res from './result.js';
import src from './source.js';
import reaction from '../helpers/reactions.js'

export default function (id, otherObjs) {
    var ret = {
        form: $('#' + id),
        source: src(id),
        result: res(id),
        reactions: new reaction('#' + id)
    };
    if (otherObjs) {
        for (var x in otherObjs) {
            ret[x] = otherObjs[x];
        }
    }
    return ret;
};