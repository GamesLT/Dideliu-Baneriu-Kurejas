import $ from 'jquery';

export default function (id) {
    return $('#' + id + ' [name=source], #' + id + ' [name="source[]"]');
};