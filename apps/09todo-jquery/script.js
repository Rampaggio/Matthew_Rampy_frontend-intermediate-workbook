'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        event.preventDefault();
        var todoList = $(this).find('#todo').val();
        console.log(todoList);
        $('#todo-list').append('<li>' 
                               + '<input type="checkbox">'
                               + '<label>'
                               + todoList
                               + '</label>'
                               + '</li>');
    })
    $('ul').sortable();
});
