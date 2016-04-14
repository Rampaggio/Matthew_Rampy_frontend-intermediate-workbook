'use strict';

$(document).ready(function () {
    getUsers();
});

function getUsers() {
    $.ajax("https://reqres-api.herokuapp.com/api/users", {
        success: function (users) {

            var currentUserTR = null;
            _.each(users, function (user) {
                currentUserTR = `<tr>
                          <td>${user.id}</td>
                          <td>${user.first_name}</td>
                          <td>${user.last_name}</td>
                          <td><a href="#" data-id="${user.id}">view</a></td>
                         </tr>`
                $("tbody").append(currentUserTR);
                currentUserTR = null;
            });

            $("a").click(function (event) {
                event.preventDefault();

                var url = "https://reqres-api.herokuapp.com/api/users/";
                var id = $(this).data('id');

                populateUserDetails(url + id);
            });
        },
        error: function () {
            console.log("There was an error completing the ajax request.");
        }
    });
}

function populateUserDetails(url) {

    $.ajax(url, {
        success: function (user) {
            var name = `<h3>${user.first_name} ${user.last_name}</h3>`;
            var occupation = `<h4>${user.occupation}</h4>`;
            var phoneNumber = `<p>${user.phone}</p>`;
            var address = `<p>${user.address}</p>`;
            var image = `<img src="${user.avatar}">`;
            $("#details").empty().append(name + occupation + phoneNumber + address + image);
        },
        error: function () {
            console.log("Error retrieving user info");
        }
    });
}

                /* Spec 1 - Let's try an AJAX call

                Using jQuery's $.ajax method, make a call to https://reqres-api.herokuapp.com/api/users. Watch the call happen in your Network tab in your developer console.

                Spec 2 - Iterate over the users collection

                In a success callback, pass in users as your reponse, and the iterate over .each user using Underscore.js#each. In each loop, create a var called str that builds an html string that matches the <tr></tr> in the html markup, but with the user keys. At the end of each loop, append the str to the tbody element.

                Spec 3 - Individiual AJAX calls

                You should have produced links for each row. Put a click listener on each link, and in the callback, prevent the default event from occuring. Create a var url that starts as a string 'https://reqres-api.herokuapp.com/api/users/'. Now grab the data-id value from the link using the .data method, and attach it to the end of the url. Now make an .ajax with that url, and in a success callback, pass in user as the response. build another str that builds an html string that matches the default markup in the div#details element. */