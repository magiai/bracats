import { check } from './check.js';

$(document).ready(() => {
    $("#form").on('submit', () => {
        let result = check($("#input").val());
        $("#result").removeClass(`${result ? 'in' : ''}correct`).addClass(`${!result ? 'in' : ''}correct`);
        return false;
    }).on('input', () => {
        $("#result").removeClass('correct incorrect');
    })
});