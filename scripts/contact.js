/* ----- CONTACT ----- */
$('.contact-data').html(dataContact.map(item =>
    `<p>${item}</p>`
).join(''));

$('.contact-form').html(
    `<form id="contact-form" action="https://formspree.io/xayojzrw" method="POST">
        <input class="email form-control" type="email" name="_replyto" placeholder="Your email">
        <input class="name form-control" type="text" name="name" placeholder="Your name" />
        <input class="subject form-control" type="text" name="subject" placeholder="Subject" />
        <textarea class="message form-control" name="message" placeholder="Message"></textarea>
        <div class="status"></div> 
        <button id="submitBtn" class="btn-send" type="submit">Send message</button>
    </form>`
);

// Events & validation
$('.btn-send').click((event) => {
    var email = $('.email').val();
    var name = $('.name').val();
    var message = $('.message').val();
    var status = $('.status');
    status.empty();

    if (email === "") {
        event.preventDefault();
        status.append('<p class="warning">Please enter your email address!</p>')
    } else if (email.length < 6 && !email.includes('@') && !email.includes('.')) {
        event.preventDefault()
        status.append('<p class="warning">Email address not valid.</p>')
    }

    if (name === "") {
        event.preventDefault();
        status.append('<p class="warning">Please enter your name!</p>');
    } else if (name.length < 2) {
        event.preventDefault();
        status.append('<p class="warning">Name too short! Name should contain at least 2 characters.</p>');
    }

    if (message === "") {
        event.preventDefault();
        status.append('<p class="warning">Please enter a message!</p>');
    } else if (message.length < 20) {
        event.preventDefault();
        status.append('<p class="warning">Message too short! Message should contain at least 20 characters.</p>');
    }
});

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
    var form = document.getElementById("contact-form");
    var status = document.querySelector(".status");

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        status.innerHTML = '<p class="success">Your message was sent!</p>';
    }

    function error() {
        status.innerHTML = '<p class="warning">Oops! There was a problem.</p>';
    }

    // handle the form submission event
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}