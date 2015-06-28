$(function () {
    Parse.$ = jQuery;
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("gXBvula4BhQX8yxAMTwRfsx25pgfxPUSLZc0yoni", "7SwfWyYSdhj4VTE8dPtatnkjbDNxklzrQai59IXC");
    // Get data from the form and put them into variables


});

function login() {
    Parse.User.logIn(document.getElementById("username").value, document.getElementById("password").value, {
        success: function (user) {
            alert("success"); // Do stuff after successful login.
        },
        error: function (user, error) {
            // The login failed. Check error to see why.
            console.log(error);

        }
    });
}