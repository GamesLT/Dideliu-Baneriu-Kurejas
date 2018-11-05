import $ from 'jquery';

export default function (id) {
    return $('#' + id + ' [name=result]');
};